import Carousel from "@/components/Carousel";
import { ImageSrcProps } from "@/models/imageProps";
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
] satisfies ImageSrcProps[];

const renderComponent = () => {
	render(<Carousel images={mockedImages} />);
};

describe("Carousel", () => {
	it("should a least one image to be in the document", () => {
		renderComponent();

		const images = screen.getByTestId("image_0");

		expect(images).toBeInTheDocument();
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

	jest.useFakeTimers();
	jest.spyOn(global, "setTimeout");

	it("should auto play with the duration passed to it", () => {
		const timeout = 1500;

		render(
			<Carousel
				images={mockedImages}
				autoplay
				autoplayDuration={timeout}
			/>
		);

		const images = screen.getAllByTestId(/image/);

		expect(images.length).toBeGreaterThan(1);

		const initialFilledDot = screen.getByTestId("dot_0");

		expect(initialFilledDot).toHaveClass("dotFill");

		expect(setTimeout).toHaveBeenCalledTimes(1);

		act(() => jest.runAllTimers());

		const nextFilledDot = screen.getByTestId("dot_1");

		expect(nextFilledDot).toHaveClass("dotFill");

		expect(initialFilledDot).not.toHaveClass("dotFill");
	});

	it("should move the slider proportionally to the 'images' length.", () => {
		renderComponent();

		const images = screen.getAllByTestId(/image/);

		expect(images.length).toBeGreaterThan(1);

		const dot = screen.getByTestId("dot_1");

		expect(dot).not.toHaveClass("dotFill");

		fireEvent.click(dot);

		const slider = screen.getByTestId("slider");

		const transformRule = slider.style.transform;

		const translateXText = transformRule.substring(
			transformRule.indexOf("translateX")
		);

		const value = parseFloat(
			translateXText.substring(
				translateXText.indexOf("(") + 1,
				translateXText.indexOf(")")
			)
		);

		const absValue = Math.abs(value);

		expect(absValue).toBe(100 / images.length);
	});
});
