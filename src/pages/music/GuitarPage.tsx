import {Component} from "solid-js";
import {MenuList} from "../../components/MenuList";
import {musicMenuItems} from "./MusicPage";

export const GuitarPage: Component = () => (
    <div>
        <h2>自作曲</h2>
        <MenuList menuItems={musicMenuItems}/>

        <hr/>

        <h3>ギター</h3>
    </div>
)
