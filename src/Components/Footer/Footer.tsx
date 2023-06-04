import { HeartIcon } from "../../Utils/Icons";
import { FooterContainer, FooterText } from "./styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText color="var(--white)">
        Made with {HeartIcon} by{" "}
        <a
          href="https://github.com/Karolarizag"
          rel="noreferrer"
          target="_blank"
        >
          Karol Ariza
        </a>
      </FooterText>
      <FooterText color="var(--red)">
        IMPORTANT: This is just an inspiration of Netflix. This is NOT the
        original page and all right belong to the originals, you can find at{" "}
        <a href="https://www.netflix.com" rel="noreferrer" target="_blank">
          Netflix.com
        </a>
      </FooterText>
    </FooterContainer>
  );
};
