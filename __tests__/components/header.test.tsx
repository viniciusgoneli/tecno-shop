import Header from "@/components/Header";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Header", () => {
	it("should render shop name correctly", () => {
		render(<Header />);

		const name = screen.getByText("Participle+");

		expect(name).toBeInTheDocument();
	});
	it("should render banner offer correctly", () => {
		render(<Header />);

		const bannerText = screen.getByText(
			"Free Shipping On All U.S. Orders"
		);

		expect(bannerText).toBeInTheDocument();
	});
});
