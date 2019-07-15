let wd = require('wd');
var chai = require('chai');
var should = chai.should();
let expect = chai.expect;

var kobitonServerConfig = {
    protocol: 'https',
    host: 'api.kobiton.com',
    auth: 'tramy1602:22fd3b37-c6a7-47ab-99fd-d67d1ae6ac72'
}

var desiredCaps = {
    // The generated session will be visible to you only. 
    sessionName: 'Automation test session',
    sessionDescription: '',
    deviceOrientation: 'portrait',
    noReset: true,
    fullReset: false,
    captureScreenshots: true,
    // The maximum size of application is 500MB
    // By default, HTTP requests from testing library are expired
    // in 2 minutes while the app copying and installation may
    // take up-to 30 minutes. Therefore, you need to extend the HTTP
    // request timeout duration in your testing library so that
    // it doesn't interrupt while the device is being initialized.
    app: 'kobiton-store:35901',

    deviceGroup: 'ORGANIZATION',
    // Specify UDID of a device you or your company owns
    udid: 'RS988bf0b0cdd'
}



main()

async function main() {

    wd.configureHttp({
        timeout: 20 * 60000, // 20 mins
        retries: 3,
        retryDelay: 1000
    })

    let driver = wd.promiseChainRemote(kobitonServerConfig)
    try {
        const caps = await driver.init(desiredCaps)
        console.log(caps)
    }
    catch (err) {
        if (err.data) {
            console.error(`init driver: ${err.data}`)
        }

        throw err
    }
  

    await driver.sleep(3000);
    await driver
        .waitForElementByXPath("//android.widget.ImageButton[@content-desc='Open drawer']")
        .click();
    // await driver
    //     .waitForElementByXPath("//android.widget.TextView[@resource-id='io.github.hidroh.materialistic:id/drawer_account']")
    //     .click();
    // await driver
    //     .waitForElementBßyId("io.github.hidroh.materialistic:id/edittext_username")
    //     .click()
    //     .sendKeys("KobitonTesting")
    // await driver
    //     .waitForElementById("io.github.hidroh.materialistic:id/edittext_password")
    //     .click()
    //     .sendKeys("12345678")
    //     //.waitForElementById("io.github.hidroh.materialistic:id/register_button")
    //     .waitForElementById("io.github.hidroh.materialistic:id/login_button")
    //     .click()
    await driver
        .waitForElementById("io.github.hidroh.materialistic:id/drawer")
        .flick(0,-300,100)
        .waitForElementById("io.github.hidroh.materialistic:id/drawer_settings")
        .click()
        .waitForElementByXPath("//android.widget.ImageView[@content-desc='More options']")
        .click()
        .waitForElementByXPath("//android.widget.TextView[@text='Reset all settings']")
        .click()
        .waitForElementById("android:id/button1")
        .click()
        .waitForElementById("io.github.hidroh.materialistic:id/drawer_display")
        .click()
        .waitForElementsByXPath("//android.widget.TextView[@resource-id='io.github.hidroh.materialistic:id/content']")
        .then((els) => {
            els[2].click()
        })
        .then(()=>{
            driver.waitForElementByXPath("//android.widget.TextView[@text='Text size']")
            .click()
        })
        .waitForElementByXPath("//android.widget.TextView[@text='Large']")
        .click()
        .waitForElementByXPath("//android.widget.TextView[@text='Font']")
        .click()
        .waitForElementByXPath("//android.widget.TextView[@text='Libre Baskerville']")
        .click()
        .waitForElementById("io.github.hidroh.materialistic:id/content_frame")
        .flick(0,-400,100)
        .back()
        .waitForElementById("io.github.hidroh.materialistic:id/menu_list")
        .click()
        .waitForElementByXPath("//android.widget.TextView[@text='Default open']")
        .click()
        .waitForElementByXPath("//android.widget.TextView[@text='Comments']")
        .click()
        .back()
        .waitForElementById("io.github.hidroh.materialistic:id/menu_comments")
        .click()
        .waitForElementByXPath("//android.widget.TextView[@text='Line spacing']")
        .click()
        .waitForElementByXPath("//android.widget.TextView[@text='Cozy']")
        .click()
        .back()
        .back()
        .waitForElementById("android:id/list")
        .flick(0,-1000,100)
        .sleep(5000)
        .flick(0,-1000,100)
        .sleep(5000)
        .flick(0,-1000,100)
        .sleep(5000)
        .flick(0,1000,100)
        .waitForElementById("io.github.hidroh.materialistic:id/swipe_layout")
        .waitForElementsByClassName("android.widget.FrameLayout")
        .then((els) => {
            els[2].click()
            .waitForElementById("io.github.hidroh.materialistic:id/content_frame")
            .sleep(3000)
            .flick(0,-1200,100)
        })
       
        .sleep(10000)
        .flick(0,-1200,100)
        .sleep(10000)
        .flick(0,-1200,100)
        .sleep(10000)
        .flick(0,-1200,100)
        .sleep(10000)
        .waitForElementByXPath("//android.widget.ImageButton[@content-desc='Navigate up']")
        .click()
        .waitForElementById("io.github.hidroh.materialistic:id/swipe_layout")
        .waitForElementsByClassName("android.widget.FrameLayout")
        .then((els) => {
            els[5].click()
        })
        .waitForElementById("io.github.hidroh.materialistic:id/content_frame")
        .flick(0,-1200,100)
        .sleep(10000)
        .flick(0,-1200,100)
        .sleep(10000)
        .flick(0,-1200,100)
        .sleep(10000)
        .flick(0,-1200,100)
        .sleep(10000)

        
        

        
        
        //let pageSource = await driver.source()
        //console.log(pageSource);
    // let searchElement = await driver
    //     .waitForElementByXPath("//android.widget.ImageView[@resource-id='io.github.hidroh.materialistic:id/search_button']")
    //     .click()
    //     .sendKeys('Hello')
    //     .keys(wd.SPECIAL_KEYS.Enter);

    
    // let element = await driver
    //     .waitForElementByXPath("//android.widget.TextView[@resource-id='io.github.hidroh.materialistic:id/title']")
    //     .click();
    // let element2 = await driver
    //     .waitForElementByXPath("//android.widget.TextView[@bounds='[148,848][571,924]']")
    //     .click();
        // let pageSource = await driver.source()
    // console.log(pageSource);
    //await driver.sleep(3000);
   



    // let element = await driver
    //     .waitForElementByXPath("//android.widget.TextView[@resource-id='io.github.hidroh.materialistic:id/title']")
    //     .getLocation();
    // console.log(element);
    // let element = await driver
    //     .waitForElementByXPath("//android.widget.TextView[@resource-id='io.github.hidroh.materialistic:id/title']")
    //     .flick(1000,0,100);


    // let action = new wd.TouchAction(driver);
    // action.press({ x: 400, y: 550 })
    //     .moveTo({ x: 1000, y: 550 })
    //     .release();
    // await action.perform();



    // elementByXPath("//android.widget.TextView[@text='Animation']");
    // click();
    // await driver
    //   .waitForElementByXPath("//android.widget.TextView[@content-desc='Accessibility']")
    //   .click()

    // await driver 
    //   .waitForElementByXPath("//android.widget.TextView[@content-desc='Custom View']")
    //   .click()

    // await driver 
    //   .back()
    // pageSource = await driver.source()
    // const fs = require('fs');
    // fs.writeFile("test2.xml", pageSource, function(err) {
    //     if(err) {
    //         return console.log(err);
    //     }
    //     console.log("The file was saved!");
    // }); 




    //await driver.source()

    // .waitForElementByClassName('mobile')
    // .click()

    // .waitForElementByClassName(' ')
    // .click()
    // .sleep(3000)
    // .keys(wd.SPECIAL_KEYS.Enter)



    if (driver != null) {
        try {
            await driver.quit()
        }
        catch (err) {
            console.error(`quit driver: ${err}`)
        }
    }
}