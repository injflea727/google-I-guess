import { default as start } from './start.js';
import { connect } from 'puppeteer-core';

(async () => {
  const browser = await connect({
    browserWSEndpoint: 'wss://injflea727.github.io/google-I-guess/'
  });
  const page = await browser.newPage();

  await start({ page, browser });

  return browser.close();
})()
.then(() => console.log('Script complete!'))
.catch((err) => console.error('Error running script' + err));
