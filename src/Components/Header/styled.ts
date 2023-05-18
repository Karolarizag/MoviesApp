import styled from 'styled-components'

export const StyledHeaderContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledHeaderImage = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
  margin-left: -13px;
  width: 170px;
  height: 50px;
`
