import {Component, For} from "solid-js";
import {Link} from "solid-app-router";
import {MenuItem} from "../types/MenuItem";

type MenuListProps = {
    menuItems: MenuItem[],
}

export const MenuList: Component<MenuListProps> = (props) => (
    <ul class="menu-list">
        <For each={props.menuItems}>{item =>
            <li>
                <Link href={item.link} class="menu-item">{item.title}</Link>
            </li>
        }</For>
    </ul>
)
