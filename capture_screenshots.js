const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const projects = [
  {
    name: 'Illusora',
    url: 'https://illusora.com/',
    outPath: path.join(__dirname, 'content/featured/Illusora/cover.png')
  },
  {
    name: 'OMREStocks',
    url: 'https://omrestocks.com/',
    outPath: path.join(__dirname, 'content/featured/OMREStocks/cover.png')
  },
  {
    name: 'Greencart',
    url: 'https://greencart-frontend-sage.vercel.app/',
    outPath: path.join(__dirname, 'content/featured/Greencart/cover.png')
  },
  {
    name: 'AIBuddy',
    url: 'https://github.com/YashSharma2129', // Fallback to github profile since no specific URL
    outPath: path.join(__dirname, 'content/featured/AIBuddy/cover.png')
  }
];

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const project of projects) {
    try {
      console.log(`Taking screenshot for ${project.name} at ${project.url}...`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      // Wait until network is idle
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 60000 });
      
      // For GitHub pages, we might want to hide the header to make it look better
      if (project.url.includes('github.com')) {
         await page.evaluate(() => {
           const header = document.querySelector('header');
           if(header) header.style.display = 'none';
         });
      }

      await page.screenshot({ path: project.outPath });
      console.log(`Saved screenshot to ${project.outPath}`);
      await page.close();
    } catch (err) {
      console.error(`Failed to screenshot ${project.name}:`, err.message);
    }
  }

  await browser.close();
  console.log('Finished capturing screenshots.');
})();
