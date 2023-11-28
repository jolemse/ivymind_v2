import { Container, Center, Image } from '@mantine/core';
import { VorstellungRaster } from './VorstellungRaster';
import { Text } from './text';
import { Unternehmensgeschichte } from './Unternehmensgeschichte';

export default function HomePage() {
  return (
    <>
      <Container>
        <Center><h1>Das Team</h1></Center>
        <Center><h2>Die Gesichter hinter Ivymind</h2></Center>
        <Image src="/img/Ueber_Uns/DSC06635.jpg" radius="md" />
        <Text />
        <VorstellungRaster />
        <Unternehmensgeschichte />
      </Container>
    </>
  );
}
