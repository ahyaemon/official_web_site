import {Component, For} from "solid-js";

const menuItems: { title: string, link: string }[] = [
    { title: "このサイトについて", link: "about" },
    { title: "歴史", link: "" },
    { title: "好きな本", link: "" },
    { title: "自作曲", link: "" },
    { title: "自作ゲーム", link: "" },
    { title: "自作プログラム", link: "" },
    { title: "他", link: "" },
]

export const Menu: Component = () => {
    return (
        <ul>
            <For each={menuItems}>{ item =>
                <li>{item.title}</li>
            }</For>
        </ul>
    )
}
