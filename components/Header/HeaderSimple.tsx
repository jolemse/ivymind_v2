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
        <Link href="/" style={{ zIndex: '2000' }}>
          <Image src="/img/Logo/Logo-Schriftzug.png" h="48" />
        </Link>

        <Group gap={5} visibleFrom="sm">
          {items}
          <Link href="https://anny.co/b/ivymind" rel="noopener nofollow" target="_blank">
            <Button>Finde deinen Coach</Button>
          </Link>
        </Group>

        {/*Burger Menu */}
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" style={{ zIndex: '2000' }} />
        {opened && (
          <div className={classes.burgerBackground}>
            <Container
              style={{
                position: 'absolute',
                top: '56px',
                right: '0px',
              }}
            >
              <div style={{ width: '90vw' }}>
                {items}
              </div>
              <Link href="https://anny.co/b/ivymind" rel="noopener nofollow" target="_blank">
                <Button w="100%" style={{ marginTop: '16px' }}>Finde deinen Coach</Button>
              </Link>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
}
