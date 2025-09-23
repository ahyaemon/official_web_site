import {Component} from "solid-js";
import {Head} from "../components/Head";

export const AboutPage: Component = () => {
    return (
        <div>
            <Head title="このサイトについて"/>

            <h2>このサイトについて</h2>
            <p>管理人：あひゃえもん</p>
            <p>連絡先：iamahyaemon&lt;@&gt;gmail.com</p>
            <p>twitter: @ahyaemon</p>
            <p><a href="https://music-gg.com" target="_blank">Music GG で自作曲を公開中</a></p>
        </div>
    )
}
