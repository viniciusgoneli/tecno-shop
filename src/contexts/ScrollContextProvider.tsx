"use client";

import React, { createContext, useState } from "react";

interface ScrollContextProps {
	children: React.ReactNode;
}

interface ScrollContextDataProps {
	scrollEnabled: boolean;
	setScrollEnabled: (value: boolean) => void;
}

export const ScrollContext = createContext({} as ScrollContextDataProps);

export default function ScrollProvider({ children }: ScrollContextProps) {
	const [scrollEnabled, setScrollEnabled] = useState(true);

	const data = {
		scrollEnabled,
		setScrollEnabled,
	} satisfies ScrollContextDataProps;

	return (
		<ScrollContext.Provider value={data}>
			{children}
		</ScrollContext.Provider>
	);
}
