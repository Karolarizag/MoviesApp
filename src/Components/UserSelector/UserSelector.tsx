import { UsersCardType } from "../../Utils/types";
import {
  UserCardImg,
  UserCardName,
  UserCardContainer,
  UserSelectorContainer,
  UserSelectorTitle,
  UserSelectorWrapper,
} from "./styled";

type UserSelectorProps = {
  UserCards: UsersCardType[];
  EventHandler: any;
};

export const UserSelector = ({
  UserCards,
  EventHandler,
}: UserSelectorProps) => {

  const renderUserCard = UserCards.map((item: UsersCardType) => {
    const { id, name, img, extraField } = item;
    const handleClick = () => {
      if (!extraField) {
        EventHandler();
      }
    };
    return (
      <UserCardContainer key={id} onClick={handleClick}>
        <UserCardImg img={img as string} />
        <UserCardName>{name}</UserCardName>
      </UserCardContainer>
    );
  });

  return (
    <UserSelectorContainer>
      <UserSelectorTitle>¿Quién eres? Elige tu perfil</UserSelectorTitle>
      <UserSelectorWrapper>{renderUserCard}</UserSelectorWrapper>
    </UserSelectorContainer>
  );
};
