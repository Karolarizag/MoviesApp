import styled from "styled-components"

export const PopUpContainer = styled.div`
  width: 80%;
  height: 90px;
  background-color: var(--dark);
  border-radius: 15px;
  border: 1px solid var(--light-grey);
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: row;
`

export const PopUpImage = styled.div`
  background-image: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png");
  background-position: center;
  background-size: cover;
  height: 70px;
  width: 50px;
  position: absolute;
  top: 10px;
  left: 20px;
`

export const PopUpText = styled.div<{top: string, color: string}>`
  font-size: 16px;
  color: ${({color}) => color};
  position: absolute;
  top: ${({top}) => top};
  left: 90px;
`

export const PopUpGif = styled.div`
  background-image: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif");
  background-size: cover;
  height: 50px;
  width: 50px;
  position: absolute;
  right: 20px;
  top: 20px;

`