import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}


export default function Example1() {
  return (
    <div>
      <h1>React Multi Carousel</h1>
      <Carousel  responsive={responsive}>
        <img src="https://picsum.photos/id/1/1280/400" width='100%' alt="1" />
        <img src="https://picsum.photos/id/2/1280/400" width='100%' alt="1" />
        <img src="https://picsum.photos/id/3/1280/400" width='100%' alt="1" />
      </Carousel >
    </div>
  )
}
