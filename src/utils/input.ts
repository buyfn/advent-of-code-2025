import fs from 'fs';

export const readInput = () => {
  const filePath = process.argv[2];
  
  if (!filePath) {
    throw new Error('no input file provided');
  }

  return readFile(filePath);
}

export const readFile = (path: string) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    return data;
  } catch (error) {
    console.error(error);
  }
}
