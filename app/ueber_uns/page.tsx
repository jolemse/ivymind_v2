import { Container, Center, Image } from '@mantine/core';
import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { VorstellungRaster } from './VorstellungRaster';
import { Text } from './text';
import { Unternehmensgeschichte } from './Unternehmensgeschichte';
import { Footer } from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Container>
        <Center><h1>Das Team</h1></Center>
        <Center><h2>Die Gesichter hinter Ivymind</h2></Center>
        <Image src="/img/Ueber_Uns/DSC06635.jpg" radius="md" />
        <Text />
        <VorstellungRaster />
        <Unternehmensgeschichte />
      </Container>
      <Footer />
    </>
  );
}
