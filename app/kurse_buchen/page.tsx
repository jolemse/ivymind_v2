import { Container } from '@mantine/core';
import { CardsCarousel } from '../../components/Carousel/CardsCarousel';
import '@mantine/carousel/styles.css';

export default function HomePage() {
  return (
    <Container>
      Kurse buchen
      <CardsCarousel />
    </Container>
  );
}
