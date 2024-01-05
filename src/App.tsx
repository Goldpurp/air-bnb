import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import { Container, MainGrid } from "./App.styles";
import Cards from "./components/Cards";

export function App() {
  const cardList = Cards.map((card) => {
    return <MainSection {...card} key={card.id} />;
  });

  return (
    <Container>
      <Header />
      <HeroSection />
      <MainGrid>{cardList}</MainGrid>
      <Footer />
    </Container>
  );
}
