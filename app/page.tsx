import { Container } from '@mantine/core';
import { CardsCarousel } from '../components/Carousel/CardsCarousel';
import '@mantine/carousel/styles.css';
import Unterstuetzer from './Unterstuetzer';

export default function HomePage() {
  return (
    <>
      <Container>
        <CardsCarousel />
        <Unterstuetzer />
      </Container>
    </>
  );
}
