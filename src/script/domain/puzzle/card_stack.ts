import Card from './card'

export default class CardStack {

  constructor(
    private readonly cards: Card[]
  ) {}

  public isEmpty(): boolean {
    return this.cards.length === 0
  }

  public has_one_card(): boolean {
    return this.cards.length === 1
  }

  public first_moji(): string {
    return this.cards[0].moji
  }

  public mojis(): string[] {
    return this.cards.map((card) => card.moji)
  }

  /**
   * 一番上のカードを、引数で受け取ったスタックの一番上に乗せる
   * @param stack
   */
  public give_top_card_to(stack: CardStack): void {
    const top_card = this.cards.pop()
    stack.cards.push(top_card)
  }

}
