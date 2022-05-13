import { By, Key, Builder } from "selenium-webdriver";
import "geckodriver";
async function example() {
  var searchString = "Automation testing with Selenium and JavaScript";

  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("firefox").build();

  //To fetch http://google.com from the browser with our code.
  await driver.get("http://google.com");
  // await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);
}
example();
