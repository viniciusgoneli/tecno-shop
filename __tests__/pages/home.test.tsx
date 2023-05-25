import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../../src/app/page";

describe("Home", () => {
	it("should render correctly", () => {
		render(<Home />);

		const text = screen.getByText("Ola mundo");

		expect(text).toBeInTheDocument();
	});
});
