'use client';

import { Container, Image, Grid, BackgroundImage, Box, AspectRatio } from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';
import classes from './Blickfang.module.css';

export default function RankeVorteile() {
  const mobile = useMediaQuery('(min-width: 768px)');
  return (
    <div className={classes.solidBackgroundRanke}>
      <Container style={{ overflow: 'visible' }}>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Grid>
              <Grid.Col span={{ base: 6, sm: 12 }}>
                <Box mx="auto">
                  <AspectRatio ratio={1 / 1}>
                    <BackgroundImage src="/img/Startseite/brauner_kreis.svg">
                      <div className={classes.conditionalSize} style={{ color: '#f0a893', textAlign: 'center' }}>
                        Finden Statt Suchen
                      </div>
                    </BackgroundImage>
                  </AspectRatio>
                </Box>
              </Grid.Col>
              <Grid.Col span={{ base: 6, sm: 12 }}>
                <Box mx="auto">
                  <AspectRatio ratio={1 / 1}>
                    <BackgroundImage src="/img/Startseite/brauner_kreis.svg">
                      <div className={classes.conditionalSize} style={{ color: '#f0a893', textAlign: 'center' }}>Kein Risiko</div>
                    </BackgroundImage>
                  </AspectRatio>
                </Box>
              </Grid.Col>
            </Grid>
          </Grid.Col>

          {mobile && (
            <>
              <Grid.Col span={{ base: 12, sm: 4 }} style={{ overflow: 'visible' }}>
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
            </>
          )}

          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Grid>
              <Grid.Col span={{ base: 6, sm: 12 }}>
                <Box mx="auto">
                  <AspectRatio ratio={1 / 1}>
                    <BackgroundImage src="/img/Startseite/brauner_kreis.svg">
                      <div className={classes.conditionalSize} style={{ color: '#f0a893', textAlign: 'center' }}>
                        Kostenloses Erstgespräch
                      </div>
                    </BackgroundImage>
                  </AspectRatio>
                </Box>
              </Grid.Col>
              <Grid.Col span={{ base: 6, sm: 12 }}>
                <Box mx="auto">
                  <AspectRatio ratio={1 / 1}>
                    <BackgroundImage src="/img/Startseite/brauner_kreis.svg">
                      <div className={classes.conditionalSize} style={{ color: '#f0a893', textAlign: 'center' }}>
                        Qualifizierte Anbieter:innen
                      </div>
                    </BackgroundImage>
                  </AspectRatio>
                </Box>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
