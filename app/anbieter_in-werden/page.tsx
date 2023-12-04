'use client';

import { SimpleGrid, Container, Stack, Center, Image } from '@mantine/core';
import Link from 'next/link';

export default function AnbieterInWerden() {
  return (
    <Container>
      <Center>
        <h1>Warum bei Ivymind als Anbieter:in registrieren?</h1>
      </Center>
      <Center>
        <h3>
          Wir kümmern uns um <span style={{ color: 'green' }}>Deinen digitalen Auftritt</span>
        </h3>
      </Center>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Stack>
          <div>
            <Image
              src="/img/Anbieter_in-werden/006-loyal-customer.png"
              h="300"
              radius="md"
              fit="contain"
            />
            <p>Wir vermitteln Dich an Kund:innen und diese wiederum an Dich.</p>
          </div>
          <div>
            <Image
              src="/img/Anbieter_in-werden/022-online-meeting-1.png"
              h="300"
              radius="md"
              fit="contain"
            />
            <p>Wir unterstützen Dich bei der Erstellung Deines Profils auf unserer Plattform.</p>
          </div>
        </Stack>
        <Stack>
          <div>
            <Image
              src="/img/Anbieter_in-werden/018-crowd-of-users.png"
              h="200"
              radius="md"
              fit="contain"
            />
            <p>Durch uns erhältst Du mehr Reichweite und Bekanntheit.</p>
          </div>
          <div>
            <Image
              src="/img/Anbieter_in-werden/009-secure-payment.png"
              h="200"
              radius="md"
              fit="contain"
            />
            <p>
              Wir übernehmen für Dich den Buchungsprozess und gewährleisten Deinen Zahlungseingang.
            </p>
          </div>
          <div>
            <Image
              src="/img/Anbieter_in-werden/035-blogging.png"
              h="200"
              radius="md"
              fit="contain"
            />
            <p>
              Durch Deine - freiwilligen - eigenen Beiträge in unserem Blogbereich kannst Du aktiv
              Dein Wissen und Deine Person hervorbringen und Deine Reichweite erweitern.
            </p>
          </div>
        </Stack>
      </SimpleGrid>
      <p>
        Wir haben Dein Interesse geweckt? Dann melde Dich bei uns per Mail unter{' '}
        <Link href="mailto:info@ivymind.de">info@ivymind.de</Link>.
      </p>
    </Container>
  );
}
