

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */



class DynLoadPage extends Page {        
    /**
     * define selectors using getter methods
     */

    //don't need menuPage, as already page.js, right?
    //get menuPage h2 from page.js via xpath //*[@id="content"]/h2
    //get DLPLink fullpath to dynamicloadingpage site  li child 14?
    //full xpath  /html/body/div[2]/div/ul/li[14]/a
    //export so it can be clicked in spec
    //get btnStart  xpath to start button //*[@id="start"]/button
    //get menuHeader //Xpath MenuHeader  //*[@id="content"]/h2
    
    //get menuHeader () {

        //return $('//*[@id="content"]/h1');
        //return $('/html/body/div[2]/div/h1');
        //return $('//*[@id="content"]/h2');
        //return $('/html/body/div[2]/div/h2');
    //}

    get menuHeader2 () {
        return $('//*[@id="content"]/div/h3');
        }

    get helloWorld () {     //id is finish
        //return $('/html/body/div[2]/div/div/div[1]/h4');
        return $('#finish');
    }

    get DLPLink () {
        return $('/html/body/div[2]/div/ul/li[14]/a');

    }

    //get inputUsername () {
    //    return $('#username');
    //}

    //get inputPassword () {
    //    return $('#password');
    //}

    //get btnSubmit () {
    //    return $('button[type="submit"]');
    //}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //async login (username, password) {
    //    await this.inputUsername.setValue(username);
    //    await this.inputPassword.setValue(password);
    //    await this.btnSubmit.click();
    //}

    /**
     * overwrite specific options to adapt it to page object
     */
    //open () {
    //    return super.open('login');
    //}

    open () {
        return super.open('');
    }
}

export default new DynLoadPage();
//export  new DLPLink();
//export {DynLoadPage(), DLPLink()};