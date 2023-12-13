import Blickfang from './Startseite/Blickfang';
import UeberUns from './Startseite/UeberUns';
import OnlineportalAchtsamkeitSelbstliebe from './Startseite/OnlineportalAchtsamkeitSelbstliebe';
import SoGehts from './Startseite/SoGehts';
import RankeVorteile from './Startseite/RankeVorteile';
import Huerden from './Startseite/Huerden';
import Kuration from './Startseite/Kuration';
import BlogArtikel from './Startseite/blogartikel';
import Unterstuetzer from './Startseite/Unterstuetzer';
import UnsereKompetenz from './Startseite/UnsereKompetenz';
import { Testimonial } from './Startseite/Testimonial';

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
      <BlogArtikel />
      <Unterstuetzer />
    </>
  );
}
