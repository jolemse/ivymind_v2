'use client';

import { Container, Image, Center } from '@mantine/core';
import Link from 'next/link';
import { CardsCarousel } from '../../components/Carousel/CardsCarousel';
import '@mantine/carousel/styles.css';

export default function KurseBuchen() {
  return (
    <Container>
      <Center><h2>Vorgestellter Inhalt</h2></Center>
      <Image src="/img/Featured_Kurse/Kraft_Energie_Neues_Jahr.png" radius="md" />
      <Link
        href="https://anny.co/b/book/mit-kraft-und-energie-ins-neue-jahr?from=organization&step=calendar"
        rel="noopener nofollow"
      >
        Buche hier
      </Link>
      <CardsCarousel />
    </Container>
  );
}
