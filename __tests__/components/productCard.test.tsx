import { render, screen } from "@testing-library/react";
import ProductCard, {
	ProductCardProps,
} from "../../src/components/ProductCard";
import { ImageSrcProps } from "@/models/imageProps";

const mockedTitle = "Dress";
const mockedPrice = 299;
const mockedImageProps = {
	src: "/images/woman-with-red-dress.jpg",
	alt: "Woman wearing a red dress.",
} satisfies ImageSrcProps;

const getCompProps = () =>
	({
		title: mockedTitle,
		price: mockedPrice,
		imgProps: mockedImageProps,
	} satisfies ProductCardProps);

describe("ProductCard", () => {
	it("should title be in the document", () => {
		render(<ProductCard {...getCompProps()} />);

		const title = screen.getByText(mockedTitle);

		expect(title).toBeInTheDocument();
	});

	it("should product image be in the document", () => {
		render(<ProductCard {...getCompProps()} />);

		const image = screen.getByTestId("prod-card-img");

		expect(image).toBeInTheDocument();
	});

	it("should price be in the document and being two fixed-point notation", () => {
		render(<ProductCard {...getCompProps()} />);

		const price = screen.getByText(`$${mockedPrice.toFixed(2)}`);

		expect(price).toBeInTheDocument();
	});

	describe("if price has the 'discountPercent' property", () => {
		const discountPercent = 0.5;

		it("should price be with dicount", () => {
			render(
				<ProductCard
					{...getCompProps()}
					discountPercent={discountPercent}
				/>
			);

			const priceWithDiscount = screen.getByText(
				`$${(mockedPrice * discountPercent).toFixed(2)}`
			);

			expect(priceWithDiscount).toBeInTheDocument();
			expect(priceWithDiscount).toHaveClass("priceWithDiscount");
		});

		it("should old price has 'oldPrice' class", () => {
			const discountPercent = 0.5;

			render(
				<ProductCard
					{...getCompProps()}
					discountPercent={discountPercent}
				/>
			);

			const oldPrice = screen.getByText(
				`$${mockedPrice.toFixed(2)}`
			);

			expect(oldPrice).toBeInTheDocument();
			expect(oldPrice).toHaveClass("oldPrice");
		});
	});
});
