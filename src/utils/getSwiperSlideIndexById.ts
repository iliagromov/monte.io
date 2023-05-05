import Swiper from 'swiper/types/swiper-class'

const getSwiperSlideIndexById = (swiper: Swiper, id: string) => {
  let slideIndex = 0
  swiper.slides.forEach((slide: HTMLElement) => {
    const { id: dataId, swiperSlideIndex } = slide.dataset
    if (dataId === id) {
      slideIndex = +swiperSlideIndex
    }
  })

  return slideIndex
}

export default getSwiperSlideIndexById
