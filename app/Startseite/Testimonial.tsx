'use client';

import { Blockquote, Container, Grid, Image, Center } from '@mantine/core';

export function Testimonial() {
  return (
    <Container>
      <Grid gutter={{ base: 20 }}>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Image radius="md" src="/img/Ueber_Uns/DSC06612_sq.jpg" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Center>
            <Blockquote
              color="rgba(255, 255, 255, 1)"
              cite="Verena Hoppe, Gründerin und Ideengeberin von Ivymind"
            >
              Ich teile die Bedürfnisse, mich selbst zu entwickeln und sehe die Möglichkeit, mit
              Ivymind unsere Welt zu gestalten.
            </Blockquote>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
