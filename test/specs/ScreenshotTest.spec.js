import DynLoadPage from '../pageobjects/dynamic_loading.page.js'
//import menuHeader from '../pageobjects/dynamic_loading.page.js'
//import DLPLink from '../pageobjects/dynamic_loading.page.js'

describe('My application', () => {
    it('should open page', async () => {
        await DynLoadPage.open()    //currently returns /undefined due to ${path} ?
        await browser.pause(3000)
        //await expect(menuPage).toBeExisting()
        //await expect(menuHeader).toBeExisting()
        //await browser.pause(3000)
        //await expect(menuHeader).toHaveTextContaining(
        //    'Welcome to the-internet')
        //await expect(menuHeader).toHaveTextContaining(
        //    'Available Examples')
        

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage).toBeExisting()
        //await expect(SecurePage).toHaveTextContaining(
        //    'You logged into a secure area!')
    })
    it('should click the link to Dynamic Loading', async () => {

        await this.DLPLink.click();
        //await DLPLink.click();
    })
    xit('should take a screenshot and save it to a directory', async () => {
        //await page loaded
        //await expect to have text containing Dybnamicaally loaded page else;emets 
        await expect(menuHeader2).toHaveTextContaining(
            'Dynamically Loaded Page Elements');
        // xpath to that h2 header  //*[@id="content"]/div/h3
        await browser.saveScreenshot('../TA-200/savingScreenShots/screenshot1.png');
    })
    xit('and finally click "Start" await page, then take another screenshot', async () => {
        await this.btnStart.click();
        await browser.pause(5000);
        await expect(helloWorld).toHaveTextContaining(
            'Hello World');
        )
        await browser.saveScreenshot('../TA-200/savingScreenShots/screenshot2.png');
    })
})


