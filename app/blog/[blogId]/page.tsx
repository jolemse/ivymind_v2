'use server';

import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import { Container, Image, AspectRatio } from '@mantine/core';
import { articles } from '../data';

import { getPostData } from '@/lib/posts';

export default async function Page({ params }: { params: { blogId: string } }) {
  const blog = articles.find((x) => x.slug === params.blogId);
  if (!blog) {
    return notFound();
  }
  //const blogPath = `app/blog/markdownFiles/${blog.slug}.md`;
  const blogPath = `/markdownFiles/${blog.slug}.md`;
  const markdown = await getPostData(blogPath);
  //const fullPath = `${process.cwd()}/${blogPath}`;
  //const fullPath = `http://localhost:3000/${blogPath}`;
  //const markdown = fs.readFileSync(fullPath, 'utf-8');
  //const markdownData = await fetch(fullPath);
  //const markdown = await markdownData;
  //console.log(markdown);

  return (
    <Container>
      <h1>{blog.title}</h1>
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
