import { Container } from '@mantine/core';
import UeberUns from './UeberUns';
import OnlineportalAchtsamkeitSelbstliebe from './OnlineportalAchtsamkeitSelbstliebe';
import Unterstuetzer from './Unterstuetzer';

export default function HomePage() {
  return (
    <>
      <Container>
        <UeberUns />
        <OnlineportalAchtsamkeitSelbstliebe />
        <Unterstuetzer />
      </Container>
    </>
  );
}
