const puppeteer = require('puppeteer');

const loginPage = 'https://www.upwork.com/ab/account-security/login';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36')
  await page.goto(loginPage);
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();