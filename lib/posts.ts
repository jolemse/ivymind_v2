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
  console.log('Reading /var');
  const files = await fs.readdir('/var');
  console.log(files);
  try {
    const files2 = await readdir(currentDir);
    for (const file2 of files2)
      console.log(file2);
  } catch (err) {
    console.error(err);
  } 
}

export async function getPostData(slug: string) {
  const fullPath = path.join(process.cwd(), slug);
  logging();
  const markdown = await fs.readFile(fullPath, 'utf-8');
  //const markdown = '# Hier ist gerade etwas schief gelaufen\n### Wir arbeiten daran, dass hier alles so funktioniert wie gewünscht.';
  return markdown;
}
