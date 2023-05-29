import { AsideMenuItem, SubItem } from "@/types/asideMenuItem";

const clothingSubItems = [
    {
        id: 1,
        title: "Tops",
        href: ""
    },
    {
        id: 2,
        title: "Bottoms",
        href: ""
    },
    {
        id: 3,
        title: "Dresses",
        href: ""
    },
    {
        id: 4,
        title: "Denim",
        href: ""
    },
    {
        id: 5,
        title: "Jumpsuits",
        href: ""
    },
    {
        id: 6,
        title: "Outerwear",
        href: ""
    },
    {
        id: 7,
        title: "Sale",
        href: ""
    },
    {
        id: 8,
        title: "Back-in-Stock",
        href: ""
    },
] satisfies SubItem[]

export const menuData = [
    {
        id: 1,
        title: "New Arrivals",
        href: "",
        subItems: []
    },
    {
        id: 2,
        title: "Clothing",
        href: "",
        subItems: clothingSubItems
    },
    {
        id: 3,
        title: "Shoes",
        href: "",
        subItems: []
    },
    {
        id: 4,
        title: "Jewelry",
        href: "",
        subItems: []
    },
    {
        id: 5,
        title: "Accessories",
        href: "",
        subItems: []
    },
    {
        id: 6,
        title: "Beauty & Scents",
        href: "",
        subItems: []
    }
] satisfies AsideMenuItem[]