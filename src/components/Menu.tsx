import {Component} from "solid-js";
import {MenuItem} from "../types/MenuItem";
import {MenuList} from "./MenuList";

const menuItems: MenuItem[] = [
    { title: "このサイトについて", link: "/about" },
    { title: "歴史", link: "/history" },
    { title: "好きな本", link: "/book" },
    { title: "自作曲", link: "/music" },
    { title: "自作ゲーム", link: "/game" },
    { title: "他", link: "/others" },
]

export const Menu: Component = () => <MenuList menuItems={menuItems}/>
