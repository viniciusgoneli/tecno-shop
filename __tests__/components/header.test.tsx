import AsideMenu from "@/components/AsideMenu";
import Header from "@/components/Header";
import {
	findByTestId,
	findByText,
	fireEvent,
	getByTestId,
	render,
	screen,
	waitFor,
} from "@testing-library/react";
import React from "react";

const onClickMenuButton = jest.fn();

describe("Header", () => {
	it("should render shop name correctly", () => {
		render(<Header onClickMenuButton={onClickMenuButton} />);

		const name = screen.getByText("Participle+");

		expect(name).toBeInTheDocument();
	});
	it("should render banner offer correctly", () => {
		render(<Header onClickMenuButton={onClickMenuButton} />);

		const bannerText = screen.getByText(
			"Free Shipping On All U.S. Orders"
		);

		expect(bannerText).toBeInTheDocument();
	});
	it("should open aside menu", async () => {
		render(<Header onClickMenuButton={onClickMenuButton} />);

		const button = screen.getByTestId("menu");

		fireEvent.click(button);

		expect(onClickMenuButton).toBeCalled();
	});
});
