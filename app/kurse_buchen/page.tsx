'use client';

import { Container, Center } from '@mantine/core';
import { KurseCarousel } from '@/components/Carousel/KurseCarousel';
import '@mantine/carousel/styles.css';

export default function KurseBuchen() {
  return (
    <Container>
      <Center><h2>Vorgestellter Inhalt</h2></Center>
      <KurseCarousel />
    </Container>
  );
}
