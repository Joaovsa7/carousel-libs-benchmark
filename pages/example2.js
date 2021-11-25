import { Carousel } from '@trendyol-js/react-carousel'

export default function Example1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    
      <h1>React Carousel</h1>
      <Carousel
        className="carousel"
        useArrowKeys
        slide={2}
        leftArrow={<span className='arrow-base arrow-left'>&lt;</span>}
        rightArrow={<span className='arrow-base arrow-right'>&gt;</span>}
      >
        <div style={{
          background: 'blue',
          width: '300px',
          height: '500px'
        }}>
         </div> 
         <div style={{
          background: 'red',
          width: '300px',
          height: '500px'
        }}>
         </div>
         <div style={{
          background: 'green',
          width: '300px',
          height: '500px'
        }}>
         </div> 
      </Carousel>
    </div>
  )
}
