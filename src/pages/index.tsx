import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GlobalStyle, Footer } from '@components/Common'
import { Introduction, CategoryList } from '@components/Main'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <Footer />
    </Container>
  )
}

export default IndexPage
