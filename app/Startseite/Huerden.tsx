'use client';

import {
  Button,
  Container,
  SimpleGrid,
  Stack,
  Center,
  //Image,
  rem,
  ActionIcon,
  Grid,
} from '@mantine/core';
import { IconRotate, IconCloudBolt, IconHealthRecognition } from '@tabler/icons-react';
import Link from 'next/link';

export default function Huerden() {
  return (
    <Container style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Stack>
          <h2 style={{ marginTop: '0' }}>
            Die Hürden einen Coach zu finden, dem man vertrauen kann, sind sehr hoch, erst recht
            übers Internet.
          </h2>
          <p>
            Wenn Du nicht zufällig einen Coach in Deinem Bekanntenkreis hast, dann weißt du oftmals
            nicht, dass sie Dir bei der Bewältigung von Herausforderungen helfen können.
            <br />
            Das kann zu Verunsicherung und Überforderung führen. Wie soll man sich im
            undurchsichtigen Web zurechtfinden?
          </p>
        </Stack>
        {/*<h4>Was passiert, wenn das Problem nicht angegangen wird.</h4>*/}
        <Grid>
          <Grid.Col span={2}>
            <ActionIcon size="lg" color="green" variant="transparent" style={{ width: '100%' }}>
              <IconRotate
                style={{ width: rem(48), height: rem(48), margin: 'auto' }}
                stroke={1.5}
              />
            </ActionIcon>
          </Grid.Col>
          <Grid.Col span={10} style={{ display: 'flex', alignItems: 'center' }}>
            <b>Feststecken in alten Routinen</b>
          </Grid.Col>

          <Grid.Col span={2}>
            <ActionIcon size="lg" color="green" variant="transparent" style={{ width: '100%' }}>
              <IconCloudBolt
                style={{ width: rem(48), height: rem(48), margin: 'auto' }}
                stroke={1.5}
              />
            </ActionIcon>
          </Grid.Col>
          <Grid.Col span={10} style={{ display: 'flex', alignItems: 'center' }}>
            <b>Anhaltende Frustration</b>
          </Grid.Col>

          <Grid.Col span={2}>
            <ActionIcon
              size="lg"
              color="green"
              variant="transparent"
              style={{ width: '100%', height: '100%' }}
            >
              <IconHealthRecognition
                style={{ width: rem(48), height: rem(48), margin: 'auto' }}
                stroke={1.5}
              />
            </ActionIcon>
          </Grid.Col>
          <Grid.Col span={10} style={{ display: 'flex', alignItems: 'center' }}>
            <b>Gesundheit leidet unter dauerndem Stress</b>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      <Center>
        <Link href="https://anny.co/b/ivymind" rel="noopener nofollow" target="_blank">
          <Button size="md">Alle Angebote einsehen</Button>
        </Link>
      </Center>
    </Container>
  );
}
