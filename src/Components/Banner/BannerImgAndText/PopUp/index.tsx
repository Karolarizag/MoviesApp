import { PopUpContainer, PopUpGif, PopUpImage, PopUpText } from "./styled";

export const PopUp = () => {
  return (
    <PopUpContainer>
      <PopUpImage />
      <PopUpText top="22px" color="var(--white)">Stranger Things</PopUpText>
      <PopUpText top="45px" color="var(--blue)">Descargándose...</PopUpText>
      <PopUpGif />
    </PopUpContainer>
  );
};
