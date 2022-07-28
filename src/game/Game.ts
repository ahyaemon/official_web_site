type Card = "あ" | "ひ" | "ゃ" | "え" | "も" | "ん"

export type Deck = Card[]

export class Game {

    private constructor(
        public readonly decks: Deck[]
    ) {}

    static create(): Game {
        return new Game([["あ", "ひ", "ゃ", "え", "も", "ん"], [], [], [], [], []])
    }

    click(i: number): Game {
        const clickedDeck = this.decks[i]
        const nextDeck = this.decks[(i + 1) % 6]

        const decks = this.decks.map((deck, ideck) => {
            if (ideck === i) {
                if (clickedDeck.length === 1) {
                    return []
                } else {
                    return clickedDeck.slice(-clickedDeck.length + 1)
                }
            } else if (ideck === (i + 1) % 6) {
                return [clickedDeck[0], ...nextDeck]
            } else {
                return deck
            }
        })

        return new Game(decks)
    }

    get isCleared(): boolean {
        return this.decks.every(deck => deck.length === 1) &&
            this.decks.map(deck => deck[0]).join("") === "あひゃえもん"
    }
}
