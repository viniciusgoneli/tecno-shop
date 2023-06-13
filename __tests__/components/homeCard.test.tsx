import HomeCard from "@/components/HomeCard";
import { ImageProps } from "@/types/imageProps";
import { render, screen } from "@testing-library/react";

const mockedImages = [
	{
		src: "/images/woman-with-red-dress.jpg",
		alt: "Woman wearing a red dress.",
	},
	{
		src: "/images/woman-with-red-dress.jpg",
		alt: "Woman wearing a red dress.",
	},
	{
		src: "/images/woman-with-red-dress.jpg",
		alt: "Woman wearing a red dress.",
	},
] satisfies ImageProps[];

const mockedWidth = 293;
const mockedHeight = 193;
const mockedTitle = "Product title";
const mockedSubtitle = "Product subtitle";

const renderComponent = () => {
	render(
		<HomeCard
			title={mockedTitle}
			subtitle={mockedSubtitle}
			images={mockedImages}
		/>
	);
};

describe("HomeCard", () => {
	it("should title be in the document", () => {
		renderComponent();

		const title = screen.getByText(mockedTitle);

		expect(title).toBeInTheDocument();
	});

	it("should subtitle be in the document", () => {
		renderComponent();

		const subtitle = screen.getByText(mockedSubtitle);

		expect(subtitle).toBeInTheDocument();
	});

	it("should carousel be in the document", () => {
		renderComponent();

		const carouselSlider = screen.getByTestId("slider");

		expect(carouselSlider).toBeInTheDocument();
	});
});
