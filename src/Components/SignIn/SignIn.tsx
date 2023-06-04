import { Button } from "../Button";
import { StyledInputContainer, StyledInput } from "./styled";

type SignInProps = {
  center?: boolean
}

export const SignIn = ({center}: SignInProps) => {
  return (
    <StyledInputContainer center={center}>
      <StyledInput placeholder="Dirección de correo" />
      <Button
        backgroundColor="var(--red) "
        padding="12px 24px"
        borderRadius="0.20rem"
        color="var(--white) "
        border="none"
        fontWeight="var(--bold)"
        fontSize="24px"
      >
        Empezar {">"}
      </Button>
    </StyledInputContainer>
  );
};
