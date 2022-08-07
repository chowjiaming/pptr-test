const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:9500', {
    waitUntil: 'networkidle0',
  });
  await page.pdf({path: 'hn.pdf', format: 'a4'});

  await browser.close();
})();
