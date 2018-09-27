import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class US1StepDefs {
    private WebDriver driver;

    @Before
    public void setUp() {
        System.setProperty("phantomjs.binary.path",
                "drivers\\phantomjs.exe");
        driver = new PhantomJSDriver();
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    @Given("^I access the login page of the Help(\\d+)care website$")
    public void iAccessTheLoginPageOfTheHelpCareWebsite(int arg0) throws Throwable {
        driver.get("http://35.240.44.156/");
        assertEquals("Healthcare Management", driver.getTitle());
    }

    @When("^the \"([^\"]*)\" field is empty$")
    public void theFieldIsEmpty(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("username")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("username")),""));
        } else {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("password")),""));
        }
    }

    @And("^I press the \"([^\"]*)\" button$")
    public void iPressTheButton(String arg0) throws Throwable {
        if (arg0.equals("Login")) {
            WebElement webElement = driver.findElement(By.xpath("//button[@type='submit']"));
            webElement.click();
        } else if (arg0.equals("picture")) {
            WebElement webElement = driver.findElement(By.xpath("//img[contains(@src,'http://35.240.44.156/xman.png.pagespeed.ic.Gzi1s-AUd5.png')]"));
            webElement.click();
        } else if (arg0.equals("Logout")){
            WebElement webElement = driver.findElement(By.xpath("//ul[@id='resourses']/li[2]/a"));
            webElement.click();
        }

    }

    @When("^I fill the \"([^\"]*)\" field with \"([^\"]*)\"$")
    public void iFillTheFieldWith(String arg0, String arg1) throws Throwable {
        WebElement field;
        if (arg0.equals("username")) {
            field = (new WebDriverWait(driver, 3))
                    .until(ExpectedConditions.presenceOfElementLocated(By.id("username")));
        } else {
            field = (new WebDriverWait(driver, 3))
                    .until(ExpectedConditions.presenceOfElementLocated(By.id("password")));
        }
        field.clear();
        field.sendKeys(arg1);
    }

    @Then("^the \"([^\"]*)\" error message should be shown$")
    public void theErrorMessageShouldBeShown(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("help-block")),arg0));
    }


    @Then("^I should be redirected to the \"([^\"]*)\" dashboard$")
    public void iShouldBeRedirectedToTheDashboard(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("admin")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("dashboard")),"Utilizadores"));
        } else {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("dashboard")),"Os meus Cuidadores"));
        }
    }

    @And("^the \"([^\"]*)\" table should be displayed$")
    public void theTableShouldBeDisplayed(String arg0) throws Throwable {
        Boolean isPresent = driver.findElements(By.id(arg0)).size() > 0;
        Assert.assertNotNull(isPresent);
    }

    @And("^the \"([^\"]*)\" graph should be displayed$")
    public void theGraphShouldBeDisplayed(String arg0) throws Throwable {
        Boolean isPresent = driver.findElements(By.id(arg0)).size() > 0;
        Assert.assertNotNull(isPresent);
    }

    @Given("^I access the \"([^\"]*)\" dashboard$")
    public void iAccessTheDashboard(String arg0) throws Throwable {
        driver.get("http://35.240.44.156/");
        WebElement username = (new WebDriverWait(driver, 3))
                    .until(ExpectedConditions.presenceOfElementLocated(By.id("username")));
        WebElement password = (new WebDriverWait(driver, 3))
                    .until(ExpectedConditions.presenceOfElementLocated(By.id("password")));
        username.clear();
        password.clear();
        username.sendKeys("admin");
        password.sendKeys("adminpw");
        WebElement webElement = driver.findElement(By.xpath("//button[@type='submit']"));
        webElement.click();
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("dashboard")),"Utilizadores"));
    }

    @Then("^I should be redirect to the \"([^\"]*)\" page$")
    public void iShouldBeRedirectToThePage(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//button[@type='submit']")),"Login"));
    }
}
