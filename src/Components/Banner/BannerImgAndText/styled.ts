import styled from "styled-components";

export const BannerContainer = styled.div<{ toLeft: boolean }>`
  color: var(--white);
  display: flex;
  flex-direction: ${({ toLeft }) => (toLeft ? "row-reverse" : "row")};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 50px 0 80px;
  border-bottom: 8px solid var(--dark-grey);
`;

export const BannerText = styled.p<{ 
  FontSizeDesktop: string; 
  FontSizeMobile: string;
  fontweight: string 
}>`
  font-size: ${({ FontSizeDesktop }) => FontSizeDesktop};
  font-weight: ${({ fontweight }) => fontweight};
  max-width: 500px;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: ${({ FontSizeMobile }) => FontSizeMobile};
    padding: 0 20px;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  width: 500px;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  
  @media (max-width: 600px) {
    width: 400px;
    height: 300px;
    padding: 0 25px;
  }
`;

export const BannerImg = styled.div<{ img: string }>`
  background-image: url(${({ img }) => img});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;
