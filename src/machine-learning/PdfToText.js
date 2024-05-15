// import { initialize, enable } from '@electron/remote/main';
// import fs from 'fs';
// import pdf from 'pdf-parse';
// const path = require('path'); // Ensure path is required

// import { ipcMain } from 'electron'

// ipcMain.on("toMain", async(event, filePath) => {
//   console.log(filePath)
//   const pdfTextContent = await convertPdfIntoText(filePath)
//   console.log(pdfTextContent)
// });

// initialize()

// ipcMain.on('file-uploaded', async(event, filePath) => {
//   console.log('yes')
// }

// async function convertPdfIntoText(pdfPath) {
//   // Read the PDF file
//   const dataBuffer = fs.readFileSync(pdfPath);

//   // Parse the PDF
//   try {
//     const textContent = await pdf(dataBuffer)?.text || ''
//     console.log(textContent)
//   } catch (error) {
//     console.log(error)
//   }  
// }