import styled from 'styled-components'
import Carousel from 'react-carousel-light'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Example1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Title>React Carousel Light</Title>
      <Carousel
        wrapperStyle={{ width: "100vw" }} 
        listStyle={{padding: "50px"}} 
        navButtonScrollDuration={500}
        navButtonIconColor="#425e7a"
  navButtonIconSize="25"
        easing='in-expo'
      >
        <img src="https://picsum.photos/id/1/1280/400" width='100%' alt="1" />
        <img src="https://picsum.photos/id/2/1280/400" width='100%' alt="1" />
        <img src="https://picsum.photos/id/3/1280/400" width='100%' alt="1" />
      </Carousel>
    </div>
  )
}
