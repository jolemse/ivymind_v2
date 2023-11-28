import { Container } from '@mantine/core';
import { CardsCarousel } from '../components/Carousel/CardsCarousel';
import { HeaderSimple } from '@/components/Header/HeaderSimple';

export default function HomePage() {
  return (
    <Container>
      <HeaderSimple />
      <CardsCarousel />
    </Container>
  );
}
