import fs from 'fs';
//import path from 'path';

export async function getPostData(slug: string) {
    //const fullPath = path.join(process.cwd(), slug);
    const markdown = fs.readFileSync(slug, 'utf-8');
    return markdown;
}
