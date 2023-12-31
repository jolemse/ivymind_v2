'use client';

import { Center, Container, Grid, ActionIcon, rem } from '@mantine/core';
import { IconHandClick, IconBow, IconCloud } from '@tabler/icons-react';

export default function OnlineportalAchtsamkeitSelbstliebe() {
  return (
    <Container style={{ paddingTop: '24px' }}>
      <Center>
        <h2>
          Dein Onlineportal für Achtsamkeit und Selbstliebe
        </h2>
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
            Kennst du das? Der Alltag hat sich verselbstständigt und besteht nur noch aus Routinen.
            Suche die Ruhe in deinem Alltag, um Dich auf das Wesentliche fokussieren zu können.
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
            Gibt es alte Glaubenssätze, die Dich runterziehen? Starte neu und gib der Kraft und den
            Stärken, die in Dir stecken, Raum.
          </p>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Center>
            <ActionIcon size="100" variant="transparent" color="green">
                <IconBow style={{ width: rem(128), height: rem(128) }} stroke={1.5} />
            </ActionIcon>
          </Center>
          <h3>Ziele formulieren und erreichen</h3>
          <p>
            Was möchtest du in Deinem Leben erreichen? Möchtest Du etwas ganz Neues wagen? Setze Dir
            neue Ziele und starte Deinen Weg in die Umsetzung Deiner Wünsche.
          </p>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
