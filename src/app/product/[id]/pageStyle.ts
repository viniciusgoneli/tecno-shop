"use client";

import { darkGrayColor, headerHeight } from "@/utils/constants";
import styled from "styled-components";

export const Main = styled.main`
	width: 100%;
	margin-top: ${headerHeight}px;
`;

export const DetailsSection = styled.section`
	padding: 0 14px;
`;

export const TitleH2 = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 1.8rem;
	line-height: 37px;
	color: #000000;
	margin-bottom: 7px;
	margin-top: 10px;
`;

export const PriceStrong = styled.strong`
	font-size: 1.8rem;
	font-weight: 400;
	margin-top: 1rem;
`;

export const RowDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5.5px;
	margin: 21px 0;
`;

export const FreeShippingP = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 27px;
	color: ${darkGrayColor};
`;

export const DescriptionSection = styled.section`
	padding-top: 16px;
	margin-bottom: 36px;
`;

export const TechInfoP = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 25px;
	color: ${darkGrayColor};
`;
