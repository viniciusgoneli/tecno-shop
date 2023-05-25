import { render, screen } from "@testing-library/react";
import Header from "../../src/components";
import React from "react";

describe("Header", () => {
	it("should render shop name correctly", () => {
		render(<Header />);

		const name = screen.getByText("Participle+");

		expect(name).toBeInTheDocument();
	});
});
