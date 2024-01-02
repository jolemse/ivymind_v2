import { promises as fs } from 'fs';
import { readdir } from 'node:fs/promises';
import path from 'path';

async function logging() {
  // Get the current working directory
  console.log('Logging function');
  const currentDir = process.cwd();
  console.log('currentDir');
  console.log(currentDir);
  // Read all contents of the current directory
  const files = await readdir(currentDir);
  console.log(files);
}

export async function getPostData(slug: string) {
  const fullPath = path.join(process.cwd(), slug);
  logging();
  const markdown = await fs.readFile(fullPath, 'utf-8');
  //const markdown = '# Hier ist gerade etwas schief gelaufen\n### Wir arbeiten daran, dass hier alles so funktioniert wie gewünscht.';
  return markdown;
}
