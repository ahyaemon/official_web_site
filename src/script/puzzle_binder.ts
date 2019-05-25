import PuzzleGame from "./domain/puzzle/puzzle_game";

/**
 * - PuzzleGame クラスと実際の DOM を紐づける
 */
export default class PuzzleBinder {
  private stack_divs: HTMLElement[] = []
  private clear_p: HTMLElement

  constructor(
    private puzzle_game: PuzzleGame,
    private target_element: HTMLElement,
  ) {
    const stack_num = puzzle_game.card_stacks.length

    // stack_divs を作成
    for (let i = 0; i < stack_num; i++) {
      const stack_div: HTMLElement = document.createElement('div')
      this.stack_divs.push(stack_div)
    }

    // クラスを付与
    this.stack_divs.forEach((div) => {
      div.classList.add('card_stack')
    })

    // クリック時動作を付与
    for (let i = 0; i < stack_num; i++) {
      this.stack_divs[i].onclick = () => { this.stack_clicked(i) }
    }

    // 子要素を付与
    this.update_stack_divs()

    // target の子要素として追加
    for (let i = 0; i < stack_num; i++) {
      target_element.appendChild(this.stack_divs[i])
    }

    // クリア時のテキストを作成
    this.clear_p = document.createElement('p')
    this.clear_p.id = 'puzzle_clear'
    this.clear_p.innerText = 'クリアしたからと言って特に何もない'
  }

  /**
   * - 各スタックとパズルゲームの状態を同期させる
   */
  private update_stack_divs(): void {
    for (let istack = 0; istack < this.stack_divs.length; istack++) {
      const stack_div = this.stack_divs[istack]

      // 一旦子要素を全消去
      while (stack_div.firstChild) {
        stack_div.removeChild(stack_div.firstChild)
      }

      // パズルゲームと同期
      for (const moji of this.puzzle_game.mojis(istack)) {
        const e = document.createElement('div')
        e.classList.add('card')
        e.innerText = moji
        stack_div.appendChild(e)
      }
    }
  }

  /**
   * - スタックがクリックされた時の動作
   * - スタックの一番上のカードを次のスタックに乗せる
   * @param istack
   */
  private stack_clicked (istack: number) {
    // puzzle_game の状態をアップデート
    this.puzzle_game.card_clicked(istack)

    // dom をアップデート
    this.update_stack_divs()

    // クリア判定
    if (this.puzzle_game.cleared()) {
      this.target_element.appendChild(this.clear_p)
    } else {
      try {
        this.target_element.removeChild(this.clear_p)
      } catch (e) {

      }
    }
  }

}
