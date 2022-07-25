import {Component} from "solid-js";
import {MenuList} from "../../components/MenuList";
import {musicMenuItems} from "./MusicPage";

export const DtmPage: Component = () => (
    <div>
        <h2>自作曲</h2>
        <MenuList menuItems={musicMenuItems}/>

        <hr/>

        <h3>DTM</h3>
    </div>
)
