import * as fs from "fs";
import * as pdfParse from "pdf-parse";

export const countPages = async (file) => {
  const dataBuffer = fs.readFileSync(file.path);
  const data = await pdfParse(dataBuffer);

  const totalPages = data.numpages;
  console.log(`Number of pages: ${totalPages}`);
};
