import { Container, Center, Skeleton } from '@mantine/core';
import Link from 'next/link';
import { articles } from './data';


export default function HomePage() {
  return (
    <>
      <Container>
        <Center>
          <h1>Blog</h1>
        </Center>
        <Center>
          <h2>Finde Deine Inspiration - und noch viel mehr</h2>
        </Center>
        <>
          {articles.map((article) => (
            <div key={article.slug}>
              <Link href={`/blog/${article.slug}`}>
                  <h1>{article.title}</h1>
              </Link>
            </div>
          ))}
        </>
      </Container>
    </>
  );
}
