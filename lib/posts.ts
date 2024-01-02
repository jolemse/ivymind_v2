import fs from 'fs';
import path from 'path';

export async function getPostData(slug: string) {
    const part = `${process.cwd()}`;
    const fullPath = path.join(part, slug);
    const markdown = fs.readFileSync(fullPath, 'utf-8');
    return markdown;
}
