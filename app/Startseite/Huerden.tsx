'use client';

import { Button, Container, SimpleGrid, Stack, Center } from '@mantine/core';
import Link from 'next/link';

export default function Huerden() {
  return (
    <Container>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Stack>
          <h2>
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
        <Stack>
          <h4>Was passiert, wenn das Problem nicht angegangen wird.</h4>
          <p>Gesundheit leidet unter dauerndem Stress</p>
          <p>Frustration</p>
          <p>Überforderung und Hilflosigkeit</p>
        </Stack>
      </SimpleGrid>
      <Center>
        <Link href="kurse_buchen">
          <Button>Kurse buchen</Button>
        </Link>
      </Center>
    </Container>
  );
}
