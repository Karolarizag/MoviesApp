import styled from 'styled-components'

export const StyledHeaderContainer = styled.div`
  height: 60px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 32px 0;
  background-color: transparent;
  width: -webkit-fill-available;
`

export const StyledHeaderImage = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
  width: 170px;
  height: 50px;
`
