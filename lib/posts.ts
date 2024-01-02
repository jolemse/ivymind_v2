import { promises as fs } from 'fs';
import path from 'path';

async function logging() {
  // Get the current working directory
  const currentDir = process.cwd();
  // Read all contents of the current directory
  const files = await fs.readdir(currentDir);
  for (const file of files) {
    const filePath = path.join(currentDir, file);
    const stats = await fs.stat(filePath);
    // Check if the file is a directory and log it
    if (stats.isDirectory()) {
      console.log(file);
      // This logs the directory name
    }
  }
}

export async function getPostData(slug: string) {
  const fullPath = path.join(process.cwd(), slug);
  logging();
  const markdown = await fs.readFile(fullPath, 'utf-8');
  return markdown;
}
