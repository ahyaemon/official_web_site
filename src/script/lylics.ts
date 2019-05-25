/**
 * - 歌詞の表示状態を切り替える
 * @param e
 */
const switch_lylics = (e: MouseEvent) => {
  const lylics = (e.target as HTMLElement).parentElement.getElementsByClassName("lylics")[0] as HTMLElement
  const display = lylics.style.display
  if (display === "" || display === "none") {
    lylics.style.display = "block"
  } else {
    lylics.style.display = "none"
  }
}

/**
 * - onload
 */
window.onload = () => {
  const buttons = document.getElementsByClassName('switch_lylics')
  for (const button of buttons) {
    (button as HTMLElement).onclick = (e) => { return switch_lylics(e) }
  }
}
