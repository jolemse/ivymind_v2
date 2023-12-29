'use client';

//import { useState } from 'react';
import Link from 'next/link';
import { Container, Group, Burger, Image, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/', label: 'Start' },
  { link: '/ueber_uns', label: 'Über Uns' },
  { link: '/blog', label: 'Blog' },
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
        <Link href="/">
          <Image src="/img/Logo/Logo-Schriftzug.png" h="48" />
        </Link>

        <Group gap={5} visibleFrom="sm">
          {items}
          <Link href="https://anny.co/b/ivymind" rel="noopener nofollow" target="_blank">
            <Button>Finde deinen Coach</Button>
          </Link>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        {opened && (
          <div
            style={{
              position: 'fixed',
              top: '56px',
              left: 0,
              width: '100%',
              height: '100%',
              background: 'var(--mantine-color-body)',
              zIndex: 1000,
            }}
          >
            <Container
              style={{
                position: 'absolute',
                top: '80px',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div style={{ marginTop: '24px' }}>
                {items}
              </div>
              <Link href="https://anny.co/b/ivymind" rel="noopener nofollow" target="_blank">
                <Button w="100%">Finde deinen Coach</Button>
              </Link>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
}
