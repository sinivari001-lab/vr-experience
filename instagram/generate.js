const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });

  for (let i = 1; i <= 3; i++) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 1 });
    const filePath = path.resolve(__dirname, `post${i}.html`);
    await page.goto('file:///' + filePath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 15000 });
    await page.screenshot({ path: path.resolve(__dirname, `post${i}.png`), type: 'png' });
    await page.close();
    console.log(`post${i}.png created`);
  }

  await browser.close();
  console.log('Done!');
})();
