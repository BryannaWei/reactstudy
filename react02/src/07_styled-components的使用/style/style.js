
import styled from 'styled-components'

export const HomeWrapper = styled.h2`
  font-size: 30px;
  color: red;
`

export const ListWrapper = styled.ul`
  font-size: 20px;
  color: green;
  li{
    cursor: pointer;
    &:hover{
      color: blue;
      text-decoration: underline;
    }
  }
`