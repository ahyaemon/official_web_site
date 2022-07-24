import { Link } from "solid-app-router";
import {Component, For} from "solid-js";

const menuItems: { title: string, link: string }[] = [
    { title: "このサイトについて", link: "about" },
    { title: "歴史", link: "/history" },
    { title: "好きな本", link: "/book" },
    { title: "自作曲", link: "/music" },
    { title: "自作ゲーム", link: "/game" },
    { title: "自作プログラム", link: "/program" },
    { title: "他", link: "/others" },
]

export const Menu: Component = () => (
    <ul class="menu-list">
        <For each={menuItems}>{ item =>
            <li>
                <Link href={item.link} class="menu-item">{item.title}</Link>
            </li>
        }</For>
    </ul>
)

