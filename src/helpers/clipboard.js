export const setClipboard = (text) => {
  // https://developer.mozilla.org/fr/docs/Web/API/Clipboard/write
  navigator.clipboard.writeText(text)
}
