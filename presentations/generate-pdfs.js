const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF(htmlFile, pdfFile) {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const filePath = path.resolve(__dirname, htmlFile);
  await page.goto('file://' + filePath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page.pdf({
    path: path.resolve(__dirname, pdfFile),
    width: '1920px',
    height: '1080px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  await browser.close();
  console.log(`Generated: ${pdfFile}`);
}

(async () => {
  await generatePDF('pitch-comercial.html', 'VR-Experience-Pitch-Comercial.pdf');
  await generatePDF('pitch-investidor.html', 'VR-Experience-Pitch-Investidor.pdf');
  await generatePDF('catalogo-servicos.html', 'VR-Experience-Catalogo-Servicos.pdf');
  console.log('All PDFs generated!');
})();
