'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Center, Container, Image } from '@mantine/core';

export default function Unterstuetzer() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Container>
      <Center>
        <h3>Wir werden unterstützt von:</h3>
      </Center>
      <Carousel
        /*withIndicators*/
        height={180}
        loop
        plugins={[autoplay.current]}
        draggable={false}
        withControls={false}
        /*onMouseEnter={autoplay.current.stop}*/
        /*onMouseLeave={autoplay.current.reset}*/
      >
        <Carousel.Slide>
          <Center>
            <Image
              src="/img/Unsere_Unterstuetzer/Gründerstipendium1.png"
              h="180"
              w="auto"
              fit="contain"
              radius="md"
            />
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center>
            <Image
              src="/img/Unsere_Unterstuetzer/hub-badge_blue_de_wir sind dabei.png"
              h="180"
              w="auto"
              fit="contain"
              radius="md"
            />
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center>
            <Image
              src="/img/Unsere_Unterstuetzer/CO_Space_DN.png"
              h="180"
              w="auto"
              fit="contain"
              radius="md"
            />
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center>
            <Image
              src="/img/Unsere_Unterstuetzer/digitalHUB Incubator.png"
              h="180"
              w="auto"
              fit="contain"
              radius="md"
            />
          </Center>
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
}
