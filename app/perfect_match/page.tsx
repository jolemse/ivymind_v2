'use client';

import { Widget } from '@typeform/embed-react';

import { Container, Center } from '@mantine/core';

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

        <div style={{ height: '20px' }} />
      </Container>
      <Widget id="MUHrT9x3" style={{ width: '100%', height: '540px', border: 'none' }} />
    </>
  );
}
