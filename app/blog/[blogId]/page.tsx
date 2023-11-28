import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import * as fs from "fs";
import { Container } from '@mantine/core';
import { articles } from '../data';

export default function Page({ params }: { params: { blogId: string } }) {
    const blog = articles.find(x => x.slug === params.blogId);
    if (!blog) {
        notFound();
    }
    const fullPath = `app/blog/markdownFiles/${blog.slug}.md`;
    const markdown = fs.readFileSync(fullPath, "utf-8");

    //console.log(fileContents);
    return (
        <Container>
            <Markdown>{markdown}</Markdown>
        </Container>
    );
}
