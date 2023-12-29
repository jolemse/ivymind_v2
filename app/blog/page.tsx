'use client';

import { Container, Center, Grid, Image, AspectRatio } from '@mantine/core';
import Link from 'next/link';
import classes from './page.module.css';
import { articles } from './data';

export default function HomePage() {
  return (
    <Container>
      <Center>
        <h1>Blog</h1>
      </Center>
      <Center>
        <h2>Finde Deine Inspiration - und noch viel mehr</h2>
      </Center>
      <Grid gutter={{ base: 20 }}>
        {articles.map((article) => (
          <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={article.slug}>
            <Link href={`/blog/${article.slug}`} className={classes.noUnderline}>
              <AspectRatio ratio={16 / 9}>
                {/*fit="contain" w="auto" style={{ margin: 'auto' }}*/}
                <Image src={article.bildquelle} radius="md" maw={550} />
              </AspectRatio>
              <h4 className={classes.headercolor}>{article.title}</h4>
              <p className={classes.p}>{article.subtitle}</p>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
