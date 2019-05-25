import Card from './card'
import CardStack from './card_stack'

export default class PuzzleGame {

  readonly card_stacks: CardStack[] = []

  /**
   * - 受け取ったカードの枚数分のスタックを用意する
   * - カードはすべて最初のスタックに配置する
   * @param cards
   */
  constructor(
    cards: Card[],
    readonly answer: string,
  ) {
    // スタックリストの初期化
    for (let i = 0; i < cards.length; i++) {
      // 最初のスタックのみ、カードを全部入れる
      if (i === 0) {
        this.card_stacks.push(new CardStack(cards))
      } else {
        this.card_stacks.push(new CardStack([]))
      }
    }
  }

  public mojis(istack: number): string[] {
    return this.card_stacks[istack].mojis()
  }

  public card_clicked(istack: number) {
    const stack = this.card_stacks[istack]
    if (stack.isEmpty()) {
      return
    }

    const next_istack = (istack + 1) % this.card_stacks.length
    const next_stack = this.card_stacks[next_istack]
    stack.give_top_card_to(next_stack)
  }

  public cleared(): boolean {
    // カード数が 1 以外のスタックがある場合は false
    if (this.card_stacks.some((stack) => !stack.has_one_card())) {
      return false
    }

    const answer = this.card_stacks.map((stack) => stack.first_moji()).join('')
    return this.answer === answer
  }

}
