import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default function Example1() {
  return (
    <div>
      <h1>React Slick</h1>
      <Slider {...settings}>
        <img src="https://picsum.photos/id/1/1280/400" width='100%' alt="1" />
        <img src="https://picsum.photos/id/2/1280/400" width='100%' alt="1" />
        <img src="https://picsum.photos/id/3/1280/400" width='100%' alt="1" />
      </Slider>
    </div>
  )
}
