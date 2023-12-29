//Mantine Imports
import { Container, Center } from '@mantine/core';
//Component Imports
import Blickfang from './Startseite/Blickfang';
import UeberUns from './Startseite/UeberUns';
import OnlineportalAchtsamkeitSelbstliebe from './Startseite/OnlineportalAchtsamkeitSelbstliebe';
import SoGehts from './Startseite/SoGehts';
import RankeVorteile from './Startseite/RankeVorteile';
import Huerden from './Startseite/Huerden';
import UnsereKompetenz from './Startseite/UnsereKompetenz';
import { Testimonial } from './Startseite/Testimonial';
import Kuration from './Startseite/Kuration';
import { KurseCarousel } from '@/components/Carousel/KurseCarousel';
import BlogArtikel from './Startseite/blogartikel';
import Unterstuetzer from './Startseite/Unterstuetzer';

import classes from './Startseite/Blickfang.module.css';

export default function HomePage() {
  return (
    <>
      {/* How to write comments in HTML*/}
      <Blickfang />
      <UeberUns />
      <OnlineportalAchtsamkeitSelbstliebe />
      <SoGehts />
      <RankeVorteile />
      <Huerden />
      <div className={classes.solidBackground}>
        <UnsereKompetenz />
        <Testimonial />
      </div>
      <Kuration />
      <Container>
        <Center>
          <h2>Vorgestellter Inhalt</h2>
        </Center>
        <KurseCarousel />
      </Container>
      <BlogArtikel />
      <Unterstuetzer />
    </>
  );
}
