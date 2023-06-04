import { useState } from "react";
import { FaqType } from "../../../Utils/types";
import { FaqContainer, FaqText, FaqTitle } from "./styled";
import { CloseIcon, PlusIcon } from "../../../Utils/Icons";

export const Faq = ({ title, text }: FaqType) => {
  const [showText, setShowText] = useState(false);

  const revertTextState = () => setShowText((prev) => !prev);

  return (
    <FaqContainer>
      <FaqTitle onClick={revertTextState}>
        {title}
        {showText ? CloseIcon : PlusIcon}
      </FaqTitle>
      {showText && (
        <FaqText>
          {text?.map((t: string, idx: number) => (
            <p key={idx}>{t}</p>
          ))}
        </FaqText>
      )}
    </FaqContainer>
  );
};
