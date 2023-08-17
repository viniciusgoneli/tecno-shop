import Carousel from "@/components/HomeCarousel";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import styles from "./HomeCarouse.module.css";
import { ImageSrcProps } from "@/models/imageProps";

const mockedData = [
	{
		src: "",
		alt: "",
	},
	{
		src: "",
		alt: "",
	},
	{
		src: "",
		alt: "",
	},
] as ImageSrcProps[];

describe("Home Carousel", () => {
	it("Should be in the document", () => {
		render(<Carousel data={mockedData} />);

		const carouselSection = screen.getByTestId("home-carousel");

		expect(carouselSection).toBeInTheDocument();
	});
	it("Should has a slider", () => {
		render(<Carousel data={mockedData} />);

		const slider = screen.getByTestId("slider");

		expect(slider).toBeInTheDocument();
	});
	it("Should has a slider", () => {
		render(<Carousel data={mockedData} />);

		const slider = screen.getByTestId("slider");

		expect(slider).toBeInTheDocument();
	});
	it("Should has three slides", () => {
		render(<Carousel data={mockedData} />);

		const slider = screen.getByTestId("slider");

		const slides = slider.querySelectorAll("li");

		expect(slides.length).toBe(mockedData.length);
	});
});
