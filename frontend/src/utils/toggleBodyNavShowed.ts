import toggleBodyScroll from './toggleBodyScroll'

const toggleBodyNavShowed = (isShowed: boolean) => {
  const body = document.body
  toggleBodyScroll(isShowed)

  if (isShowed) {
    body.classList.add('nav-showed')
  } else {
    body.classList.remove('nav-showed')
  }
}

export default toggleBodyNavShowed
