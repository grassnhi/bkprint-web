import pdfjs from "pdfjs-dist";

export const getNumberOfPages = async (fileArrayBuffer) => {
  const loadingTask = pdfjs.getDocument(fileArrayBuffer);
  const pdf = await loadingTask.promise;
  const pages = pdf.numPages;
  return pages;
};
