import { Center, Container } from '@mantine/core';
import Link from 'next/link';

export default function Impressum() {
  return (
    <Container>
      <Center>
        <h1>Impressum</h1>
      </Center>
      <p>Angaben gemäß § 5 TMG</p>
      <h3>Ivymind GmbH</h3>
      <p>August-Klotz-Straße 21</p>
      <p>52349 Düren</p>
      <h3>Vertreten durch:</h3>
      <p>Verena Hoppe</p>
      <p>Jonas Lemmen</p>
      <h3>Kontakt:</h3>
      <p>
        E-Mail:{' '}
        <Link href="mailto:info@ivymind.de" rel="nofollow">
          info@ivymind.de
        </Link>
      </p>
      <p>Telefon: +49 1516 8464691</p>
      <h3>Registereintrag:</h3>
      <p>Eintragung im Registergericht: Amtsgericht Düren</p>
      <p>Registernummer: HRB 9229</p>
      <h3>Umsatzsteuer-ID:</h3>
      <p>DE357389305</p>
      <h3>Online-Streitbeilegungsplattform (OS-Plattform)</h3>
      <p>
        Die Streitbeilegungsplattform ist unter folgendem Link erreichbar:{' '}
        <Link href="www.ec.europa.eu/consumers/odr" rel="nofollow">
          www.ec.europa.eu/consumers/odr
        </Link>
      </p>
      <p>
        Hinweis gemäß §§36,37 VSBG: Die Ivymind GmbH ist grundsätzlich nicht bereit oder
        verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>
    </Container>
  );
}
