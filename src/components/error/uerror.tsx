import React from 'react'
import { styled } from 'styled-components'
const ErrorPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UError = () => {
  return (
    <ErrorPage>
        <h1>404Error</h1>
    </ErrorPage>
  )
}

export default UError