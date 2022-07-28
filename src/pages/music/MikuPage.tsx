import {Component} from "solid-js";
import {MenuList} from "../../components/MenuList";
import {musicMenuItems} from "./MusicPage";
import sazanka from "../../assets/music/miku/山茶花.mp3";
import {Head} from "../../components/Head";

export const MikuPage: Component = () => (
    <div>
        <Head title="初音ミク"/>

        <h2>自作曲</h2>
        <MenuList menuItems={musicMenuItems}/>

        <hr/>

        <h2>初音ミク</h2>

        <p>音量でかいかも</p>

        <h3>2017</h3>
        <div>
            <p>山茶花</p>
            <audio src={sazanka} controls={true}/>
        </div>
    </div>
)
