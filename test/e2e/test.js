const fs = require('fs')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot });

const timeout = process.env.SLOWMO ? 30000 : 30000;
jest.setTimeout(30000);

describe('viz reg test', () => {
    test('random node graph', async () => {
        
        // const title = await page.title();
        // expect(title).toBe('E2E Puppeteer Testing');

        await page.goto('http://localhost:5000/')
        // await page.setViewport({ width: 1053, height: 809 })
        await page.waitFor(1000);
        await page.click("#acceptAgreement")
        await page.waitFor(1000);
        await page.click("span.oi")
        await page.waitFor(1000);
        await page.click("#experimental-tab")
        await page.waitFor(1000);
        await page.click("#generate-sequences")
        await page.waitFor(500);
        await page.click("#launch")
        await page.waitFor(2500);

        global.__basedir = __dirname;
        // const image = fs.readFileSync('./__image_snapshots__/Exp.png')
        // expect(image).toMatchImageSnapshot();
        const screen = await page.screenshot();
        expect(screen).toMatchImageSnapshot();
        
    }, timeout);
});