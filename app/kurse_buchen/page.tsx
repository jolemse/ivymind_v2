'use client';

import { Container, Center } from '@mantine/core';
import { KurseCarousel } from '@/components/Carousel/KurseCarousel';
import '@mantine/carousel/styles.css';

export default function KurseBuchen() {
  return (
    <>
      <Container>
        <Center>
          <h2>Vorgestellter Inhalt</h2>
        </Center>
        <KurseCarousel />
        <div style={{ height: '20px' }} />
      </Container>
      {/* Anny Einbindung */}
      {/*
    <a-organization-page
        base-url="https://anny.co/b"
        dark-mode="false"
        organization="ivymind"
        placeholder-title="Ivymind"
        hide-resource-header="true"
        hide-organization-header="true"
        should-login="false"
        entity-id=""
      />
    */}
    </>
  );
}
