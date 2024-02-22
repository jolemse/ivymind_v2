'use client';

import { Blockquote, Container, Grid, Image, Center } from '@mantine/core';

export function Testimonial() {
  return (
    <Container>
      <Grid gutter={{ base: 20 }}>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Image radius="md" src="/img/Ueber_Uns/DSC06612_sq.jpg" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Center>
            <Blockquote
              color="rgba(255, 255, 255, 1)"
              cite="Verena Hoppe, Gründerin und Ideengeberin von Ivymind"
            >
              Ich teile die Bedürfnisse, mich selbst zu entwickeln und sehe die Möglichkeit, mit
              Ivymind unsere Welt zu gestalten.
            </Blockquote>
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Image radius="md" src="/img/Testimonials/anja_r.svg" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Center>
            <Blockquote
              color="rgba(255, 255, 255, 1)"
              cite='Anja R., Workshop "Mit Kraft und Energie ins neue Jahr starten - Ein Workshop um Ziele zu setzen"'
            >
              Ich habe den Workshop gebucht, weil ich neben der Psychotherapie noch einen anderen
              Weg ausprobieren wollte. Sowohl die Klangschalen-Meditation als auch die Yoga-Einheit
              haben einen entspannenden Rahmen gegeben für die vielen Impulse, die ich aus dem
              Coaching mitgenommen habe. Durch den Blick von außen und die gezielten Fragen bekam
              ich neue Ideen, neue Möglichkeiten aufgezeigt. Auch die Lebenserfahrungen der
              Referentinnen und ihre Lebens"um"wege hatten eine inspirierende Wirkung auf mich. Ich
              bin gefühlt viel leichter aus dem Raum gegangen als ich hereingekommen war. Und dieses
              Gefühl hält auch nach ein paar Tagen noch an. Ich würde den Workshop sofort meiner
              besten Freundin weiterempfehlen.
            </Blockquote>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
