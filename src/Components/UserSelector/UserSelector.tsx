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
    return (
      <UserCardContainer key={id} onClick={!extraField && EventHandler}>
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
