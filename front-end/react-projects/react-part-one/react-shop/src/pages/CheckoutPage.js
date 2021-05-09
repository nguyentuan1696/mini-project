import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        <section className='section section-center'>
          <h1>checkout here...if this was real</h1>
        </section>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
