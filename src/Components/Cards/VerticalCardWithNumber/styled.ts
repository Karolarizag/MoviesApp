import styled from "styled-components";

export const VerticalWithNumberContainer = styled.div`
  height: 173px;
  width: 202px;
  position: relative;

  @media (max-width: 1024px) {
    height: 166px;
    width: 200px;
  }

  @media (max-width: 600px) {
    height: 134px;
    width: 182px;
  }
`;

export const NumberStyled = styled.p`
  color: black;
  text-shadow: 2px 0 grey, -2px 0 grey, 0 2px grey, 0 -2px grey, 1px 1px grey,
    -1px -1px grey, 1px -1px grey, -1px 1px grey;

  line-height: 179px;
  font-size: 200px;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  font-family: fantasy;
  padding-left: 5px;

  @media (max-width: 1024px) {
    font-size: 185px;
  }

  @media (max-width: 600px) {
    line-height: 139px;
    font-size: 150px;
  }
`;

export const ImageStyled = styled.div<{img: string}>`
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100%;
  width: 115px;
  position: absolute;
  right: 0px;
`