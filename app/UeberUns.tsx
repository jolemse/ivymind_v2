'use client';

import { Button, Center, Container, Grid, Image } from '@mantine/core';
import Link from 'next/link';

export default function UeberUns() {
  return (
    <Container>
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, sm: 12, md: 6 }}>
          <h2>Über Uns</h2>
          <p>
            Ivymind ist ein Onlineportal für Coachings, Kurse und Seminare, die sich alle um
            Achtsamkeit und Selbstliebe drehen. Es ist der Startpunkt für Menschen, die nach
            Möglichkeit suchen, zu wachsen, sich zu entfalten und ihre Ziele in die Hand zu nehmen.
            Hinter Ivymind stecken Verena Hoppe und Jonas Lemmen. Sie haben sich über einen
            Gründungswettbewerb kennen gelernt und haben schnell festgestellt, dass sich die eigenen
            Ziele zueinander ergänzen.
          </p>
          <Link href="/ueber_uns">
            <Button size="md" radius="xl">
              MEHR ERFAHREN
            </Button>
          </Link>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
          <Center>
            <Image src="/img/Ueber_Uns/DSC06612_sq.jpg" h="400" w="210" radius="md" />
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
          <Center>
            <Image src="/img/Ueber_Uns/DSC06563_sq.jpg" h="400" w="210" radius="md" />
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
