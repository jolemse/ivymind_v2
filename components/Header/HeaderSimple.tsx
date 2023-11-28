'use client';

//import { useState } from 'react';
import Link from 'next/link';
import { Container, Group, Burger, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/', label: 'Start' },
  { link: '/ueber_uns', label: 'Über Uns' },
  { link: '/blog', label: 'Blog' },
  { link: '/kurse_buchen', label: 'Kurse buchen' },
  { link: '/anbieter_in-werden', label: 'Anbieter:in werden' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  //const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      //data-active={active === link.link || undefined}
      //onClick={(event) => {
        //event.preventDefault();
        //setActive(link.link);
      //}}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link href="/"><Image src="/img/Logo/Logo-Schriftzug.png" h="48" /></Link>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
