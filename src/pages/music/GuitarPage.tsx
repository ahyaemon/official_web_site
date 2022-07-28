import {Component, For} from "solid-js";
import {MenuList} from "../../components/MenuList";
import {musicMenuItems} from "./MusicPage";
import sukinakoto from "../../assets/music/guiter/好きなことだけして生きるにはどうすればいいの.mp3"
import yogurt from "../../assets/music/guiter/ヨーグルト.mp3"
import ninjin from "../../assets/music/guiter/かわいそうなにんじん.mp3"
import nothing from "../../assets/music/guiter/なんにもしたくない.mp3"
import {Head} from "../../components/Head";

const musicHistories = [
    {
        year: 2018,
        songs: [
            {
                title: "好きなことだけして生きるにはどうすればいいの",
                file: sukinakoto,
            },
            {
                title: "ヨーグルト",
                file: yogurt,
            },
        ],
    },
    {
        year: 2017,
        songs: [
            {
                title: "かわいそうなにんじん",
                file: ninjin,
            },
        ],
    },
    {
        year: 2015,
        songs: [
            {
                title: "なんにもしたくない",
                file: nothing,
            },
        ],
    },
]

export const GuitarPage: Component = () => (
    <div>
        <Head title="ギター"/>

        <h2>自作曲</h2>
        <MenuList menuItems={musicMenuItems}/>

        <hr/>

        <h2>ギター</h2>

        <For each={musicHistories}>{history =>
            <div>
                <h3>{history.year}</h3>
                <For each={history.songs}>{song =>
                    <div>
                        <p>{song.title}</p>
                        <audio src={song.file} controls={true}/>
                    </div>
                }</For>
            </div>
        }</For>
    </div>
)
