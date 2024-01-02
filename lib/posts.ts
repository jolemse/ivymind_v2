import { promises as fs } from 'fs';
import { readdir } from 'node:fs/promises';
import path from 'path';

async function logging() {
  // Get the current working directory
  const currentDir = process.cwd();
  console.log('currentDir');
  console.log(currentDir);
  // Read all contents of the current directory
  const files = await fs.readdir(currentDir);
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
  console.log("Logging should appear now");
  logging();
  //const markdown = await fs.readFile(fullPath, 'utf-8');
  const markdown = '# Hier ist gerade etwas schief gelaufen\n### Wir arbeiten daran, dass hier alles so funktioniert wie gewünscht.';
  return markdown;
}
