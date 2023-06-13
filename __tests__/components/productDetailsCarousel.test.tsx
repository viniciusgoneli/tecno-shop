import CardCarousel from "@/components/Carousel";
import Carousel from "@/components/Carousel";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import { ImageProps } from "@/types/imageProps";
import {
	act,
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react";

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

const renderComponent = () => {
	render(<ProductDetailsCarousel images={mockedImages} />);
};

describe("ProductDetailsCarousel", () => {
	it("should a least one image to be in the document", () => {
		renderComponent();

		const image = screen.getByTestId("image_0");

		expect(image).toBeInTheDocument();
	});

	it("should render dots when images count is greater than one", () => {
		renderComponent();

		const images = screen.getAllByTestId(/image/);

		expect(images.length).toBeGreaterThan(1);

		const dots = screen.getAllByTestId(/dot/);

		expect(images.length).toBe(dots.length);
	});

	it("should fill dot when it is clicked", () => {
		renderComponent();

		const images = screen.getAllByTestId(/image/);

		expect(images.length).toBeGreaterThan(1);

		const dot = screen.getByTestId("dot_1");

		expect(dot).not.toHaveClass("dotFill");

		fireEvent.click(dot);

		expect(dot).toHaveClass("dotFill");
	});

	it("should move the slider proportionally to the 'images' length.", () => {
		renderComponent();

		const images = screen.getAllByTestId(/image/);

		expect(images.length).toBeGreaterThan(1);

		const dot = screen.getByTestId("dot_1");

		expect(dot).not.toHaveClass("dotFill");

		fireEvent.click(dot);

		const slider = screen.getByTestId("slider");

		const translateX = getTranslateXValue(slider.style.transform);

		expect(Math.abs(translateX)).toBe(100 / images.length);
	});

	const getTranslateXValue = (transformRule: string) => {
		const translateXText = transformRule.substring(
			transformRule.indexOf("translateX")
		);

		const value = parseFloat(
			translateXText.substring(
				translateXText.indexOf("(") + 1,
				translateXText.indexOf(")")
			)
		);

		return value;
	};

	it("should move to next slide when the right arrow is clicked", () => {
		renderComponent();

		const images = screen.getAllByTestId(/image/);

		expect(images.length).toBeGreaterThan(1);

		const slider = screen.getByTestId("slider");

		const currTranslateX = getTranslateXValue(slider.style.transform);

		expect(Math.abs(currTranslateX)).toBe(0);

		const nextBtn = screen.getByTestId("next-btn");

		fireEvent.click(nextBtn);

		const newTransateX = getTranslateXValue(slider.style.transform);

		expect(newTransateX).toBe(-(100 / images.length));
	});

	it("should move to previous slide when the left arrow is clicked", () => {
		renderComponent();

		const images = screen.getAllByTestId(/image/);

		expect(images.length).toBeGreaterThan(1);

		const slider = screen.getByTestId("slider");

		const nextBtn = screen.getByTestId("next-btn");

		fireEvent.click(nextBtn);

		const currTranslateX = getTranslateXValue(slider.style.transform);

		expect(currTranslateX).toBe(-(100 / images.length));

		const previousBtn = screen.getByTestId("previous-btn");

		fireEvent.click(previousBtn);

		const newTransateX = getTranslateXValue(slider.style.transform);

		expect(Math.abs(newTransateX)).toBe(0);
	});
});
