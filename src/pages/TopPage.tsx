import {Component, createSignal, Show} from "solid-js";
import {Game} from "../game/Game";
import {GameArea} from "../components/game/GameArea";
import {Head} from "../components/Head";

export const TopPage: Component = () => {

    const [game, setGame] = createSignal(Game.create())

    const handleClick = (i: number) => {
        setGame(game => game.click(i))
    }

    return (
        <div>
            <Head/>
            ようこそ
            <div class="game">
                <GameArea decks={game().decks} clickDeck={handleClick}/>
            </div>
            <Show when={game().isCleared}>
                <p class="game-cleared">クリアしたからと言って特に何も無い</p>
            </Show>
        </div>
    )
}
