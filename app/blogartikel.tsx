'use client';

import { Center, Container, Grid, Image, AspectRatio, Button } from '@mantine/core';
import Link from 'next/link';
import classes from './blog/page.module.css';
import { articles } from './data';

export default function BlogArtikel() {
  return (
    <Container>
      <Center>
        <h2>Lass Dich inspirieren</h2>
      </Center>
      <Grid gutter={{ base: 20 }}>
        {articles.map((article) => (
          <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={article.slug}>
            <Link href={`/blog/${article.slug}`} className={classes.noUnderline}>
              <AspectRatio ratio={1 / 1}>
                <Image src={article.bildquelle} radius="md" maw={550} />
              </AspectRatio>
              <h4 className={classes.headercolor}>{article.title}</h4>
              <p className={classes.p}>{article.subtitle}</p>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
      <Center>
        <Link href="/blog">
          <Button size="lg" radius="xl">
            Mehr Artikel
          </Button>
        </Link>
      </Center>
    </Container>
  );
}
