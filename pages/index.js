import Link from 'next/link'
import styled from 'styled-components'
import { Carousel } from '@trendyol-js/react-carousel'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Example1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Title>Carousel Benchmark</Title>
      <Link href='/example1'>React Carousel Light</Link>
      <Link href='/example2'>@trendyol-js/react-carousel</Link>
      <Link href='/example3'>React Slick Carousel</Link>
      <Link href='/example4'>React Multi Carousel</Link>
    </div>
  )
}
