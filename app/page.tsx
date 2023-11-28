import { Container } from '@mantine/core';
import { CardsCarousel } from '../components/Carousel/CardsCarousel';
import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { Footer } from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Container>
        <CardsCarousel />
      </Container>
      <Footer />
    </>
  );
}
