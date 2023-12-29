import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import * as fs from 'fs';
import { Container, Image, AspectRatio } from '@mantine/core';
import { articles } from '../data';

export default function Page({ params }: { params: { blogId: string } }) {
  const blog = articles.find((x) => x.slug === params.blogId);
  if (!blog) {
    return notFound();
  }
  const fullPath = `app/blog/markdownFiles/${blog.slug}.md`;
  const markdown = fs.readFileSync(fullPath, 'utf-8');

  return (
    <Container>
      <AspectRatio ratio={16 / 9}>
        <Image src={blog.bildquelle} radius="md" />
      </AspectRatio>
      <Markdown
        components={{
          // open links in new tab
          a: (props) => <a {...props} target="_blank" rel="noopener noreferrer nofollow" />,
        }}
      >
        {markdown}
      </Markdown>
    </Container>
  );
}
