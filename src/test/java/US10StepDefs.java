import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.TestCase;
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

public class US10StepDefs {
    private WebDriver driver;

    @Before
    public void setUp() {
        System.setProperty("phantomjs.binary.path",
                "drivers\\phantomjs.exe");
        driver = new PhantomJSDriver();

        driver.get("http://35.240.44.156/");
        WebElement username = (new WebDriverWait(driver, 3))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("username")));
        WebElement password = (new WebDriverWait(driver, 3))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("password")));
        username.clear();
        password.clear();
        username.sendKeys("healthcarePro");
        password.sendKeys("propw");
        WebElement webElement = driver.findElement(By.xpath("//button[@type='submit']"));
        webElement.click();
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    @Given("^I access the \"([^\"]*)\" page - USten$")
    public void iAccessThePageUSten(String arg0) throws Throwable {
        if (arg0.equals("needs")) {
            driver.get("http://35.240.44.156/needs");
        }
    }

    @When("^I press the \"([^\"]*)\" button of the \"([^\"]*)\" need - USten$")
    public void iPressTheButtonOfTheNeedUSten(String arg0, String arg1) throws Throwable {
        WebElement searchbox  = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg1);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='needs']/tbody/tr/td")), arg1));
        WebElement webElement = driver.findElement(By.xpath("//td[3]/div/div/a"));
        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of \"([^\"]*)\" need - USten$")
    public void iShouldBeRedirectedToThePageOfNeedUSten(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), arg1));
    }

    @And("^the field \"([^\"]*)\" should show \"([^\"]*)\" - USten$")
    public void theFieldShouldShowUSten(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("need")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Necessidade: " + arg1));
        } else if (arg0.equals("creator")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(1), "Criador: " + arg1));
        }
    }

    @And("^the \"([^\"]*)\" button should be present - USten$")
    public void theButtonShouldBePresentUSten(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("materials")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[2]/div/div/a")));
        } else if (arg0.equals("back")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Voltar Atrás')]")));
        }
    }

    @Given("^I access the \"([^\"]*)\" page of the \"([^\"]*)\" need - USten$")
    public void iAccessThePageOfTheNeedUSten(String arg0, String arg1) throws Throwable {
        driver.get("http://35.240.44.156/needs/7");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")),"Necessidade: " + arg1));
    }

    @When("^I press the \"([^\"]*)\" button - USten$")
    public void iPressTheButtonUSten(String arg0) throws Throwable {
        WebElement webElement = null;
        if (arg0.equals("materials")) {
            webElement = driver.findElement(By.xpath("//div[2]/div/div/a"));
        }
        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\" need$")
    public void iShouldBeRedirectedToThePageOfTheNeed(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Materiais de " + arg1));
            assertTrue(driver.findElements(By.xpath("//table[@id='materials']/tbody/tr")).size() > 0);
        }
    }

    @And("^a table with the title \"([^\"]*)\" should be displayed - USten$")
    public void aTableWithTheTitleShouldBeDisplayedUSten(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.className("my-caregivers-legend"), arg0));
        assertTrue(driver.findElements(By.xpath("//table[@id='materials']/tbody/tr")).size() > 0);
    }

    @And("^the \"([^\"]*)\" material should be present on the table$")
    public void theMaterialShouldBePresentOnTheTable(String arg0) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg0));
    }
}
