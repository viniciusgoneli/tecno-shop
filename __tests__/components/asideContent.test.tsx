import AsideMenuSubMenu from "@/components/AsideMenuSubMenu";
import { accountData } from "@/components/AsideMenuContent/accountData";
import { menuData } from "@/components/AsideMenu/menuData";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("AsideContent", () => {
	it("should 'Menu' tab to be in the document", () => {
		render(<AsideMenuSubMenu />);

		const menuTab = screen.getByText("Menu");

		expect(menuTab).toBeInTheDocument();
	});

	it("should 'Account' tab to be in the document", () => {
		render(<AsideMenuSubMenu />);

		const accountTab = screen.getByText("Account");

		expect(accountTab).toBeInTheDocument();
	});

	it("should the initial selected tab to be 'Menu'", () => {
		render(<AsideMenuSubMenu />);

		const menuTab = screen.getByTestId("menu-tab");

		expect(menuTab).toHaveClass("menuButtonSelected");
	});

	it("the tabs should switch after click", () => {
		render(<AsideMenuSubMenu />);

		const menuTab = screen.getByTestId("menu-tab");
		const accountTab = screen.getByTestId("account-tab");

		const menuButton = menuTab.firstElementChild;
		const accountButton = accountTab.firstElementChild;

		expect(menuButton).not.toBeNull();
		expect(accountButton).not.toBeNull();

		fireEvent.click(accountButton as Element);

		expect(menuTab).not.toHaveClass("menuButtonSelected");
		expect(accountTab).toHaveClass("menuButtonSelected");

		fireEvent.click(menuButton as Element);

		expect(menuTab).toHaveClass("menuButtonSelected");
		expect(accountTab).not.toHaveClass("menuButtonSelected");
	});

	it("the data of menu tab should be 'menuData'", () => {
		render(<AsideMenuSubMenu />);

		const menuTab = screen.getByTestId("menu-tab");
		const menuButton = menuTab.firstElementChild;

		expect(menuButton).not.toBeNull();

		fireEvent.click(menuButton as Element);

		const listItems = screen.getByTestId("list-items");

		const regex = /<\/?[a-zA-Z]+\b[^>]*>/g;

		const listContent = listItems.innerHTML
			.split(regex)
			.filter((txt) => txt)
			.join("");

		const menuDataContent = menuData?.map((d) => d.title).join("");

		expect(menuDataContent).toBe(listContent);
	});

	it("the data of account tab should be 'accountData'", () => {
		render(<AsideMenuSubMenu />);

		const accountTab = screen.getByTestId("account-tab");
		const accountButton = accountTab.firstElementChild;

		expect(accountButton).not.toBeNull();

		fireEvent.click(accountButton as Element);

		const listItems = screen.getByTestId("list-items");

		const regex = /<\/?[a-zA-Z]+\b[^>]*>/g;

		const listContent = listItems.innerHTML
			.split(regex)
			.filter((txt) => txt)
			.join("");

		const accountDataContent = accountData
			?.map((d) => d.title)
			.join("");

		expect(accountDataContent).toBe(listContent);
	});

	it("should display sub items only after click item", () => {
		render(<AsideMenuSubMenu />);

		const items = screen.getAllByTestId("li-subitem-true");

		for (const it of items) {
			const subItemsBeforeDisplayed = it.querySelector("ul");

			expect(subItemsBeforeDisplayed).not.toBeInTheDocument();

			const anchor = it.querySelector("a");

			if (!anchor) continue;

			fireEvent.click(anchor);

			const subItemsAfterDisplayed = it.querySelector("ul");

			expect(subItemsAfterDisplayed).toBeInTheDocument();
		}
	});
});
