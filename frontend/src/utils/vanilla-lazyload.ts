import LazyLoad, { ILazyLoadInstance } from 'vanilla-lazyload'

let lazyLoadInstance: ILazyLoadInstance
let lazyLoadSelector: string

const initLazyLoad = (selector = 'lazyload') => {
  lazyLoadSelector = selector
  lazyLoadInstance = new LazyLoad({
    elements_selector: `.${lazyLoadSelector}`,
    callback_error: function (el) {
      el.parentElement.classList.add('lazyload-error')
    },
    callback_loaded: function (el) {
      el.parentElement.classList.add('lazyload-loaded')
    },
  })

  return lazyLoadInstance
}

export const getLazyLoadInstance = () => {
  return lazyLoadInstance
}

export const getLazyLoadSelector = () => {
  return lazyLoadSelector
}

/**
 * инициализация lazyload
 *
 * @return lazyLoadInstance
 */
const enchancedInit = () => {
  if (!lazyLoadInstance) {
    lazyLoadInstance = initLazyLoad()
  }

  return lazyLoadInstance
}

export default enchancedInit
