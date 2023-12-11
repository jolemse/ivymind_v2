'use client';

import { Container, Image, Grid, BackgroundImage, Box, AspectRatio } from '@mantine/core';

import classes from './Blickfang.module.css';

export default function RankeVorteile() {
  return (
    <div className={classes.solidBackgroundRanke}>
      <Container>
        <Grid style={{ overflow: 'visible' }}>
          <Grid.Col span={{ base: 4 }}>
            <Box mx="auto">
              <AspectRatio ratio={1 / 1}>
                <BackgroundImage src="/img/Startseite/brauner_kreis.svg">
                  <div style={{ color: '#f0a893', textAlign: 'center' }}>Finden Statt Suchen</div>
                </BackgroundImage>
              </AspectRatio>
            </Box>
            <Box mx="auto">
              <AspectRatio ratio={1 / 1}>
                <BackgroundImage src="/img/Startseite/brauner_kreis.svg">
                  <div style={{ color: '#f0a893', textAlign: 'center' }}>Kein Risiko</div>
                </BackgroundImage>
              </AspectRatio>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 4 }} style={{ overflow: 'visible' }}>
            <div style={{ height: '100%' }}>
              <Image
                src="/img/Startseite/Ivymind_Ranke.svg"
                fit="contain"
                style={{
                  transform: 'translateY(-18%) translateX(-5%)',
                  overflow: 'visible',
                  height: '150%',
                  width: '150%',
                }}
              />
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 4 }}>
            <Box mx="auto">
              <AspectRatio ratio={1 / 1}>
                <BackgroundImage src="/img/Startseite/brauner_kreis.svg">
                  <div style={{ color: '#f0a893', textAlign: 'center' }}>
                    Kostenloses Erstgespräch
                  </div>
                </BackgroundImage>
              </AspectRatio>
            </Box>
            <Box mx="auto">
              <AspectRatio ratio={1 / 1}>
                <BackgroundImage src="/img/Startseite/brauner_kreis.svg">
                  <div style={{ color: '#f0a893', textAlign: 'center' }}>
                    Qualifizierte Anbieter:innen
                  </div>
                </BackgroundImage>
              </AspectRatio>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
