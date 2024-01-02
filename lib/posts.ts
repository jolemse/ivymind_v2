import { promises as fs } from 'fs';
import path from 'path';

export async function getPostData(slug: string) {
    const fullPath = path.join(process.cwd(), slug);
    const markdown = await fs.readFile(fullPath, 'utf-8');
    return markdown;
}
