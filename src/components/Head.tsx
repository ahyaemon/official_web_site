import {Component} from "solid-js";

type HeadProps = {
    title?: string,
}

const title = "あひゃえもんのページ"

export const Head: Component<HeadProps> = (props) => {
    document.title = props.title ? `${props.title} | ${title}` : title

    return <></>
}
