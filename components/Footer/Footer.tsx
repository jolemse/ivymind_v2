'use client';

import Link from 'next/link';
import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import { IconBrandInstagram, IconBrandWhatsapp, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import classes from './Footer.module.css';

const data = [
  {
    title: 'Finde Deinen Kurs',
    links: [
      { label: 'Kurse buchen', link: 'https://anny.co/b/ivymind' },
    ],
  },
  {
    title: 'Lerne Mehr',
    links: [
      { label: 'Blog', link: '/blog' },
      { label: 'Über Uns', link: '/ueber_uns' },
    ],
  },
  {
    title: 'Werde Teil von Ivymind',
    links: [
      { label: 'Anbieter:in werden', link: '/anbieter_in-werden' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum', link: '/impressum' },
      { label: 'Datenschutz', link: '/datenschutz' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}//link
        component="a"
        href={link.link}
        //onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text fw={700} className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <Image src="/img/Logo/Logo-Schriftzug.png" h="60" w="180" />
          <Text size="xs" c="dimmed" className={classes.description}>
            Finde Deinen Coach. Finde Deinen Kurs. Finde Dich.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2023 Ivymind GmbH. Alle Rechte Vorbehalten.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="green" variant="subtle">
            <Link href="mailto:info@ivymind.de" rel="nofollow"><IconMail style={{ width: rem(28), height: rem(28) }} stroke={1.5} /></Link>
          </ActionIcon>
          <ActionIcon size="lg" color="green" variant="subtle">
            <Link href="https://www.linkedin.com/company/ivymind-gmbh?_l=de_DE" rel="nofollow"><IconBrandLinkedin style={{ width: rem(28), height: rem(28) }} stroke={1.5} /></Link>
          </ActionIcon>
          <ActionIcon size="lg" color="green" variant="subtle">
            <Link href="https://www.instagram.com/ivymind.de/"><IconBrandInstagram style={{ width: rem(28), height: rem(28) }} stroke={1.5} /></Link>
          </ActionIcon>
          <ActionIcon size="lg" color="green" variant="subtle">
            <Link href="https://wa.me/4915168464691" rel="nofollow" color="green"><IconBrandWhatsapp style={{ width: rem(28), height: rem(28) }} stroke={1.5} /></Link>
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
