'use client';

import { Center, Container, Grid, ActionIcon, rem } from '@mantine/core';
import { IconHandClick, IconBow, IconCloud } from '@tabler/icons-react';

export default function OnlineportalAchtsamkeitSelbstliebe() {
  return (
    <Container style={{ paddingTop: '24px' }}>
      <Center>
        <h2>Deine Online-Plattform für neue Wege</h2>
      </Center>
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Center>
            <ActionIcon size="100" variant="transparent" color="green">
              <IconCloud style={{ width: rem(128), height: rem(128) }} stroke={1.5} />
            </ActionIcon>
          </Center>
          <h3>Entschleunigung einbauen</h3>
          <p>
            Die Grundlage für beruflichen und persönlichen Erfolg ist die Selbstfürsorge. Suche die
            Ruhe in Deinem Alltag, um Dich auf das Wesentliche fokussieren zu können.
          </p>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Center>
            <ActionIcon size="100" variant="transparent" color="green">
              <IconHandClick style={{ width: rem(128), height: rem(128) }} stroke={1.5} />
            </ActionIcon>
          </Center>
          <h3>Selbstwert stärken</h3>
          <p>
            Du bist mehr als Dein Beruf. Du bist mehr als Deine Ausbildung. Finde Deinen inneren
            Kompass und was alles in Dir steckt.
          </p>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Center>
            <ActionIcon size="100" variant="transparent" color="green">
              <IconBow style={{ width: rem(128), height: rem(128) }} stroke={1.5} />
            </ActionIcon>
          </Center>
          <h3>Ziele umsetzen</h3>
          <p>
            Was ist es wonach Du suchst? Möchtest Du etwas ganz Neues wagen? Starte mit den ersten
            Schritten in die Umsetzung Deiner Visionen.
          </p>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
