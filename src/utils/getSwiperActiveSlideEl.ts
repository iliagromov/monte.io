import Swiper from 'swiper/types/swiper-class'

const getSwiperActiveSlideEl = ({ slides, realIndex }: Swiper) => {
  let activeSlideEl: HTMLElement | null = null

  slides.forEach((slide: HTMLElement) => {
    if (+slide.dataset.swiperSlideIndex === realIndex) {
      activeSlideEl = slide
    }
  })

  return activeSlideEl
}

export default getSwiperActiveSlideEl
