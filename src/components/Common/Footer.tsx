import React from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.section`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`

const Footer = () => {
  return (
    <FooterWrapper>
      Thank You for Visiting My handbook, Have a Good Day 😆
      <br />© 2022 Developer Joometa, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
