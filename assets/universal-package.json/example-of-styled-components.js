import React from 'react'
import styled from 'styled-components'

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

const MyReactNativeComponent = () => (
  <StyledView>
    <StyledText>Hello World!</StyledText>
  </StyledView>
)
