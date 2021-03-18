import styled from 'styled-components'

export const HomeWrapper = styled.div`
  color: red;
  font-size: 22px;
  
  .banner {
    background-color: blue;

    span {
      color: #fff;

      &.active {
        color: red;
      }

      &:hover {
        color: green;
      }

      &::after {
        content: "aaa"
      }
    }
  }
`
export const TitleWrapper = styled.h2`
  text-decoration: underline;
  /* color: green;
  font-size: 22px; */
  color: ${ props => props.theme.themeColor };
  font-size: ${ props => props.theme.fontSize };
`