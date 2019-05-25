import PuzzleGame from './domain/puzzle/puzzle_game'
import Card from './domain/puzzle/card'
import CardStack from './domain/puzzle/card_stack'
import PuzzleBinder from './puzzle_binder';

const cards: Card[] = [
  { moji: "あ" },
  { moji: "ひ" },
  { moji: "ゃ" },
  { moji: "え" },
  { moji: "も" },
  { moji: "ん" },
]
const answer = cards.map((card) => card.moji).join("")
cards.reverse()
const puzzle_game = new PuzzleGame(cards, answer)
const puzzle_div = document.getElementById('puzzle')
const puzzle_binder = new PuzzleBinder(puzzle_game, puzzle_div)
