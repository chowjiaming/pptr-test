const puppeteer = require('puppeteer');
const pageURL = 'http://localhost:9500';

const optionsPDF = {
  path: 'public/report.pdf',
  printBackground: true,
  preferCSSPageSize: true,
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(pageURL, {
    waitUntil: 'networkidle0',
  });
  await page.emulateMediaType('print');
  console.log('Printing PDF...');
  await page.pdf(optionsPDF);
  await browser.close();
})();
