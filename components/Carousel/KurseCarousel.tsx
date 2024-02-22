'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem, AspectRatio } from '@mantine/core';
import Link from 'next/link';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import classes from './CardsCarousel.module.css';
import { title } from 'process';

//import '@mantine/carousel/styles.css';

interface CardProps {
  image: string;
  //image_alt: string;
  title: string;
  category: string;
  link: string;
  buttonText: string;
}

function Card({ image, title, category, link, buttonText }: CardProps) {
  return (
    <AspectRatio ratio={16 / 9}>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
          }}
        >
          <div
            className={classes.link}
            style={{ marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <Link href={link} rel="noopener nofollow" target="_blank">
              <Button className={classes.buttonText}>{buttonText}</Button>
            </Link>
          </div>
        </div>
      </Paper>
    </AspectRatio>
  );
}

const data = [
  {
    image:
      '/img/Featured_Kurse/Ameland_2.png',
    image_alt: 'Bild von Ameland mit einem Weg zu einem Leuchtturm',
    title: 'Finde Deine Vision ... auf Ameland',
    category: '',
    link: 'https://anny.co/b/book/sabine-grosser-bildungsurlaub-nordsee-ynlfqdsyj8?from=organization&step=calendar',
    buttonText: 'Jetzt buchen',
  },
  {
    image: '/img/Featured_Kurse/Zarmina_Penner.png',
    image_alt: 'Meine Aufgabe ist es, Dich zu Dir selbst zu bringen, damit Du meine Hilfe nicht mehr brauchst.',
    title: '',
    category: '',
    link: 'https://anny.co/b/book/quick-check-zarmina-penner?from=organization&step=calendar',
    buttonText: 'Jetzt buchen',
  },
  {
    image:
      'https://images.unsplash.com/photo-1530900651397-b5b696532c39?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_alt: 'Das vollständige Angebot von Ivymind entdecken',
    title: 'Entdecke unser vollständiges Angebot',
    category: '',
    link: 'https://anny.co/b/ivymind',
    buttonText: 'Alle Angebote einsehen',
  },
];

export function KurseCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '100%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 1}
      nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
      previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
    >
      {slides}
    </Carousel>
  );
}
