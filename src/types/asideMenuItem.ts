export interface AsideMenuItem {
    id: number;
    title: string;
    href: string;
    subItems: SubItem[]
}

export interface SubItem extends Omit<AsideMenuItem, "subItems"> {

}