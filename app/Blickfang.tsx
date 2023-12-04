'use client';

import { AspectRatio, Button, Container, Image } from '@mantine/core';
import classes from './Blickfang.module.css';

export default function Blickfang() {
  return (
    <AspectRatio ratio={16 / 9} style={{ maxHeight: '768px' }}>
      <div className={classes.gradient}>
        <Container style={{ position: 'relative', width: '100%' }}>
          <Image
            src="/img/Logo/Logo-Schriftzug.png"
            alt="Ivyimnd Logo und Schriftzug"
            style={{
              width: '300px',
              position: 'relative',
            }}
          />
          <h1>
            Finde Deinen eigenen Weg im Leben mit Zufriedenheit und Erfüllung und schlage ihn mit
            vollem Bewusstsein ein.
          </h1>
          <h2>
            Hier steht ein erklärender Untertitel, dessen genaue Formulierung final noch nicht
            feststeht.
          </h2>
          <Button>KURS BUCHEN</Button>
          <Button>BURS ANBIETEN</Button>
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
