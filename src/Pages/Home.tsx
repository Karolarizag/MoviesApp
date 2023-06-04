import { BannerBackgroundImage } from "../Components/Banner/BannerBackgroundImage";
import { BannerImgAndText } from "../Components/Banner/BannerImgAndText";
import { HomePageContainer, HomePageContent } from "../Components/Containers";
import { Header } from "../Components/Header";
import { isOdd } from "../Services/Utils";
import data from "../Data/data.json";

export const Home = () => {
  const { homeContent } = data;

  const renderContent = () => {
    return homeContent?.map((item) => {
      const leftContent = isOdd(item.id);
      return (
        <BannerImgAndText
          key={item.id}
          toLeft={leftContent}
          title={item.title}
          text={item.text}
          img={item.img}
          popup={item.popup}
        />
      );
    });
  };

  return (
    <HomePageContainer>
      <Header />
      <HomePageContent>
        <BannerBackgroundImage />
        {renderContent()}
      </HomePageContent>
    </HomePageContainer>
  );
};
