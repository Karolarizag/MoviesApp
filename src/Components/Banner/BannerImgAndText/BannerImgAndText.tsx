import { PopUp } from "./PopUp";
import {
  BannerContainer,
  BannerImg,
  BannerText,
  ImageContainer,
} from "./styled";

type BannerImgAndTextProps = {
  title: string;
  text: string;
  img: string;
  toLeft: boolean;
  popup?: boolean;
};

export const BannerImgAndText = ({
  text,
  title,
  img,
  toLeft,
  popup,
}: BannerImgAndTextProps) => {
  console.log(toLeft);
  return (
    <BannerContainer toLeft={toLeft}>
      <div>
        <BannerText FontSizeDesktop="3rem" FontSizeMobile="2rem" fontweight="var(--bold)">
          {title}
        </BannerText>
        <BannerText FontSizeDesktop="1.5rem" FontSizeMobile="1.2rem" fontweight="var(--light)">
          {text}
        </BannerText>
      </div>
      <ImageContainer>
        <BannerImg img={img} />
        {
          popup && <PopUp />
        }
      </ImageContainer>
    </BannerContainer>
  );
};
