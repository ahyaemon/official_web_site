import {Component} from "solid-js";
import {MenuItem} from "../../types/MenuItem";
import {MenuList} from "../../components/MenuList";

export const gameMenuItems: MenuItem[] = [
    { title: "SUPER LIBRE", link: "/game/super-libre" },
]

export const GamePage: Component = () => (
    <div>
        <h2>ゲーム</h2>
        <MenuList menuItems={gameMenuItems}/>
    </div>
)
