'use client';

import { Container, Image, Grid } from '@mantine/core';
//import classes from './Blickfang.module.css';

export default function SoGehts() {
  return (
    <div>
      {/*className={classes.solidBackground}*/}
      <Container>
        <h2>Den richtigen Kurs oder Coach finden</h2>
        <Image src="/img/Startseite/Ivymind_Prozess.svg" style={{ width: '90%', margin: 'auto' }} />
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <h4>1. Suchen</h4>
            <p>
              Suche in unserem Buchungstool nach Deinen Themen und filtere nach den entsprechenden
              Begriffen.
            </p>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <h4>2. Finden</h4>
            <p>
              Schau Dir die Profile der Coaches oder Veranstaltungen an und schaue auch im
              Blogbereich nach mehr Infos dazu.
            </p>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <h4>3. Buchen</h4>
            <p>
              Buche ein Kennenlerngespräch mit einem Coach oder buche die Veranstaltung, die Dich
              interessiert.
            </p>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
