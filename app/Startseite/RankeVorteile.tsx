'use client';

import { Center, Container, Image } from '@mantine/core';
import classes from './Blickfang.module.css';

export default function RankeVorteile() {
  return (
    <div className={classes.solidBackgroundRanke}>
      <Container>
        <Center>
          <Image src="/img/Startseite/Ivymind_Ranke.svg" w="60%" style={{ transform: 'translateY(-1rem)' }} />
        </Center>
        <ul>
          <li>Finden Statt Suchen</li>
          <li>Kostenloses Erstgespräch</li>
          <li>Kein Risiko</li>
          <li>Qualifizierte Anbieter:innen</li>
        </ul>
      </Container>
    </div>
  );
}
