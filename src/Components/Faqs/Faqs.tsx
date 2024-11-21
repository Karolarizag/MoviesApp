import { FaqType } from "../../Utils/types";
import { SignIn } from "../SignIn";
import { Faq } from "./Faq";
import { FaqsContainer, FaqsTitle } from "./styled";

type FaqsProps = {
  title: string;
  subtitle: string;
  content: FaqType[];
};

export const Faqs = ({ title, subtitle, content }: FaqsProps) => {
  const renderContent = () => {
    return content?.map((item: FaqType, idx: number) => {
      return <Faq key={idx} title={item.title} text={item.text} />;
    });
  };

  return (
    <FaqsContainer>
      <FaqsTitle>{title}</FaqsTitle>
      {renderContent()}
      <p>{subtitle}</p>
      <SignIn center={true} />
    </FaqsContainer>
  );
};
