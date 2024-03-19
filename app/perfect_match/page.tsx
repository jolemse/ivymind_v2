'use client';

import Link from 'next/link';

import { Widget } from '@typeform/embed-react';

import { Container, Center, Button } from '@mantine/core';

export default function KurseBuchen() {
  return (
    <>
      <Container>
        <Center>
          <h2>Finde Dein perfektes Match</h2>
        </Center>
        <p>
          Was suchst Du? Und was ist Dir wichtig? Finde mit drei kleinen Fragen zu Deinem Kurs oder
          Coach.
        </p>
        <p>
          Wenn du eine Übersicht über alle Coaches und Kurse bekommen möchtest, dann klicke hier:
        </p>
        <Center>
          <Link href="https://anny.co/b/ivymind" rel="noopener nofollow" target="_blank">
            <Button size="md">Alle Angebote einsehen</Button>
          </Link>
        </Center>

        <div style={{ height: '20px' }} />
      </Container>
      <Widget id="MUHrT9x3" style={{ width: '100%', height: '540px', border: 'none' }} />
    </>
  );
}
