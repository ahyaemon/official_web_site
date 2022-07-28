import {Component} from "solid-js";
import {MenuList} from "../../components/MenuList";
import {musicMenuItems} from "./MusicPage";
import juvenile from "../../assets/music/dtm/juvenile.mp3"

export const DtmPage: Component = () => (
    <div>
        <h2>自作曲</h2>
        <MenuList menuItems={musicMenuItems}/>

        <hr/>

        <h2>DTM</h2>

        <p>音量でかいかも</p>

        <h3>2017</h3>
        <div>
            <p>juvenile</p>
            <audio src={juvenile} controls={true}/>
        </div>
    </div>
)
