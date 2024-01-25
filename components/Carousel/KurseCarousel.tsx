'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem, AspectRatio } from '@mantine/core';
import Link from 'next/link';
import classes from './CardsCarousel.module.css';
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
    >
      {slides}
    </Carousel>
  );
}
