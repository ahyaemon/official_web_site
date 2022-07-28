import {Component} from "solid-js";
import {MenuItem} from "../../types/MenuItem";
import {MenuList} from "../../components/MenuList";

export const musicMenuItems: MenuItem[] = [
    { title: "ギター", link: "/music/guitar" },
    { title: "DTM", link: "/music/dtm" },
    { title: "初音ミク", link: "/music/miku" },
]

export const MusicPage: Component = () => (
    <div>
        <h2>自作曲</h2>
        <MenuList menuItems={musicMenuItems}/>
    </div>
)
