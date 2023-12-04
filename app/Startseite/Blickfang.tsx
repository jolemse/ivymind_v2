'use client';

import { AspectRatio, Button, Container, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import classes from './Blickfang.module.css';

export default function Blickfang() {
  const mobile = useMediaQuery('(min-width: 48em)');
  const wide = 21 / 9;
  const square = 1 / 1;
  return (
    <AspectRatio ratio={mobile ? wide : square} style={{ maxHeight: '600px' }}>
      <div className={classes.gradient}>
        <Container style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div style={{ width: '60%' }}>
            <h1>
              Finde Deinen eigenen Weg im Leben mit Zufriedenheit und Erfüllung und schlage ihn mit
              vollem Bewusstsein ein.
            </h1>
            <p>
              Ivymind ist eine Plattform für Achtsamkeit und Selbstliebe, die Dich mit einem
              qualifizierten Coach in Verbindung bringt, um Deine Herausforderungen im Leben zu
              meistern.
            </p>
            <Link href="/kurse_buchen">
              <Button>Finde deinen Coach</Button>
            </Link>
          </div>
          <div className={classes.bottom}>
            <Image
              src="/img/Startseite/landingpage.png"
              alt="Image 1"
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: '45%',
                transform: 'translateX(5%)',
                zIndex: 1,
              }}
            />
            <Image
              src="/img/Startseite/Slant.svg"
              alt="Image 2"
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 5,
              }}
            />
          </div>
        </Container>
      </div>
    </AspectRatio>
  );
}
