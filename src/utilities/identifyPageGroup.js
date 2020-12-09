export const identifyPageGroup = (group) => {
  document.dispatchEvent(new CustomEvent('active-page-group', {
    bubbles: true,
    composed: true,
    detail: group
  }))
}
