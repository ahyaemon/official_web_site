import {Component} from "solid-js";
import {MenuItem} from "../../types/MenuItem";
import {MenuList} from "../../components/MenuList";
import {Head} from "../../components/Head";

export const gameMenuItems: MenuItem[] = [
    { title: "SUPER LIBRE", link: "/game/super-libre" },
]

export const GamePage: Component = () => (
    <div>
        <Head title="ゲーム"/>

        <h2>ゲーム</h2>
        <MenuList menuItems={gameMenuItems}/>
    </div>
)
