import { FaqType } from "../../Utils/types";
import { SignIn } from "../SignIn";
import { Faq } from "./Faq";
import { FaqsContainer, FaqsTitle } from "./styled";

type FaqsProps = {
  title: string;
  content: FaqType[];
};

export const Faqs = ({ title, content }: FaqsProps) => {
  const renderContent = () => {
    return content?.map((item: FaqType, idx: number) => {
      return <Faq key={idx} title={item.title} text={item.text} />;
    });
  };

  return (
    <FaqsContainer>
      <FaqsTitle>{title}</FaqsTitle>
      {renderContent()}
      <p>
        ¿Quieres ver algo ya? Escribe tu dirección de correo para crear una
        suscripción a Netflix o reactivarla.
      </p>
      <SignIn center={true} />
    </FaqsContainer>
  );
};
