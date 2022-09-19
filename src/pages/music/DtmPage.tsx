import {Component, For, Show} from "solid-js";
import {MenuList} from "../../components/MenuList";
import {musicMenuItems} from "./MusicPage";
import juvenile from "../../assets/music/dtm/juvenile.mp3"
import {Head} from "../../components/Head";

const musicHistories = [
    {
        year: 2017,
        songs: [
            {
              title: "OVERGROUND",
              youtube: "https://www.youtube.com/embed/C64_SxPL3UE",
            },
            {
              title: "IN ORDER",
              youtube: "https://www.youtube.com/embed/SEnatjSL7Ic",
            },
            {
              title: "MOUNTAIN RANGE",
              youtube: "https://www.youtube.com/embed/3hYVdUCCnv0",
            },
            {
              title: "INFLUENZA",
              youtube: "https://www.youtube.com/embed/x64zkqvjSE4",
            },
            {
              title: "SPHEROIDAL BURST",
              youtube: "https://www.youtube.com/embed/5LKupXY8qrs",
            },
            {
              title: "INCUBATOR",
              youtube: "https://www.youtube.com/embed/fMZLhT3lXBg",
            },
            {
              title: "MASQUERADE",
              youtube: "https://www.youtube.com/embed/ueIPWhENI3Y",
            },
            {
                title: "JUVENILE",
                file: juvenile,
                youtube: "https://www.youtube.com/embed/QnFnmeVAD5w",
            },
        ],
    }
]

export const DtmPage: Component = () => (
    <div>
        <Head title="DTM"/>

        <h2>自作曲</h2>
        <MenuList menuItems={musicMenuItems}/>

        <hr/>

        <h2>DTM</h2>

        <p>音量でかいかも</p>

        <For each={musicHistories}>{ history =>
            <div>
                <h3>{history.year}</h3>
                <For each={history.songs}>{song =>
                    <div>
                        <p>{song.title}</p>
                        <Show when={song.file}>
                            <audio src={song.file} controls/><br/>
                        </Show>
                        <Show when={song.youtube}>
                            <div class="youtube">
                                <iframe src={song.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                            </div>
                        </Show>
                    </div>
                }</For>
            </div>
        }</For>
    </div>
)
