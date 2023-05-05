import getScrollbarSize from './getScrollbarSize'

/**
 * Переключение скролла на странице с уетом текущего размера скроллбара
 * чтобы не происходило подергивание
 *
 * @param {boolean} isFixed  скролл убран
 */
const toggleBodyScroll = (isFixed: boolean) => {
  const body = document.body
  const hasScroll = document.body.offsetHeight > window.innerHeight

  if (isFixed) {
    if (hasScroll) {
      const scrollBarSize = getScrollbarSize()
      body.style.marginRight = scrollBarSize + 'px'
    }
    body.style.overflow = 'hidden'
  } else {
    body.removeAttribute('style')
  }
}

export default toggleBodyScroll
