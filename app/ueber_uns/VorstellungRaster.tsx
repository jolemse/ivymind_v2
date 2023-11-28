'use client';

import { Grid, Container, Image } from '@mantine/core';
import Link from 'next/link';

export function VorstellungRaster() {
  return (
    <Container my="md">
      <Grid>
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <Image src="/img/Ueber_Uns/DSC06612_sq.jpg" radius="md" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <h4>Verena Hoppe</h4>
          <p>
            Einerseits Verena, die sich mit den Zielen im Leben auseinander gesetzt hat
            und sich Fragen gestellt hat wie: Wie möchte ich mein Leben weiter gestalten?
            Was ist mir wichtig im Leben und wie kann ich mein Leben danach ausrichten?
            Das naheliegendste war im Internet nach Unterstützung für die Beantwortung
            dieser Fragen zu suchen. Von einem Achtsamkeitskurs über einen Kreativitätsworkshop
            und einem Kurs für Persönlichkeitsentwicklung. Verena wurde fündig, jedoch erst nach
            langer Suche. Daher kennt sie den Dschungel von verschiedenen Angeboten und die Frage,
            wie qualifiziert und passend der jeweilige Kurs denn überhaupt ist. Und genau daraus
            entwickelte sich die Idee nach einer passenden Plattform, die jeden bei der Suche nach
            Information und passenden Angeboten an die Hand nimmt, die Idee von Ivymind war geboren.
          </p>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <h4>Jonas Lemmen</h4>
          <p>
            Jonas ist begeisterter Programmierer und bot sich an, Sorge für die technische Basis von
            Ivymind zu tragen. Als angehender Master der Informatik mit Fokus auf Mensch-Maschine
            Interaktion sah er die technische Umsetzung der Website als Herausforderung und
            Möglichkeit sich persönlich und fachlich weiter zu entwickeln.<br /><br />
            Die Bilder wurden mit freundlicher Unterstützung von <Link href="https://www.achtsamkeit-fotografie.de/">Dagmar Welter</Link> zur Verfügung gestellt.
          </p>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <Image src="/img/Ueber_Uns/DSC06563_sq.jpg" radius="md" />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
