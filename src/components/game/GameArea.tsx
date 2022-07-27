import {Component, For, splitProps} from "solid-js";
import {Deck} from "../../game/Game";

export const GameArea: Component<{clickDeck: (i: number) => void, decks: Deck[]}> = (props) => (
    <For each={props.decks}>{(deck, i) =>
        <div class="deck" onClick={() => props.clickDeck(i())}>
            <DeckArea deck={deck}/>
        </div>
    }</For>
)


const DeckArea: Component<{deck: Deck}> = (props) => (
    <For each={props.deck}>{card =>
        <div class="card">
            {card}
        </div>
    }</For>
)


