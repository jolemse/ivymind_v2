import { Container } from '@mantine/core';
import UeberUns from './UeberUns';
import OnlineportalAchtsamkeitSelbstliebe from './OnlineportalAchtsamkeitSelbstliebe';
import Unterstuetzer from './Unterstuetzer';
import BlogArtikel from './blogartikel';

export default function HomePage() {
  return (
    <>
      <Container>
        <UeberUns />
        <OnlineportalAchtsamkeitSelbstliebe />
        <BlogArtikel />
        <Unterstuetzer />
      </Container>
    </>
  );
}
