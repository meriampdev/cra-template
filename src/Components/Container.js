import React from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div`
  ${'' /* background-color: #67DAB7; */}
  height: -webkit-fill-available;
  opacity: 0.9;
`

class Container extends React.Component {
  render() {
    return(
      <ContainerDiv id='ContainerDiv'>
        {this.props.children}
      </ContainerDiv>
    )
  }
}

export default Container
