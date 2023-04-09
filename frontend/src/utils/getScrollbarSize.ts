/**
 * Возвращает ширину скроллбара в браузере
 *
 * @return  {number}  ширина скроллбара
 */
const getScrollbarSize = () => {
  let scrollbarSize = void 0
  if (scrollbarSize === undefined) {
    const scrollDiv = document.createElement('div')
    scrollDiv.style.cssText =
      'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'
    document.body.appendChild(scrollDiv)
    scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth
    document.body.removeChild(scrollDiv)
  }

  return scrollbarSize
}

export default getScrollbarSize
