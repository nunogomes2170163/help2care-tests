import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertEquals;

public class US2StepDefs {
    private WebDriver driver;

    @Before
    public void setUp() {
        System.setProperty("phantomjs.binary.path",
                "drivers/phantomjs");
        driver = new PhantomJSDriver();
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    @Given("^I access the login page of the Help(\\d+)care website - US(\\d+)$")
    public void iAccessTheLoginPageOfTheHelpCareWebsiteUS(int arg0, int arg1) throws Throwable {
        driver.get("http://35.240.44.156/");
        assertEquals("Healthcare Management", driver.getTitle());
    }

    @Given("^I access the login page of the Help(\\d+)care website - UStwo$")
    public void iAccessTheLoginPageOfTheHelpCareWebsiteUStwo(int arg0) throws Throwable {
        driver.get("http://35.240.44.156/");
        assertEquals("Healthcare Management", driver.getTitle());
    }

    @When("^I press the \"([^\"]*)\" button - UStwo$")
    public void iPressTheButtonUStwo(String arg0) throws Throwable {
        WebElement webElement;
        if (arg0.equals("Esqueceu-se da sua password?")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Esqueceu-se da sua password?')]"));
            webElement.click();
        } else {
            webElement = driver.findElement(By.xpath("//button[@type='submit']"));
            webElement.click();
        }
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page - UStwo$")
    public void iShouldBeRedirectedToThePageUStwo(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("panel-heading")),"Reset Password"));
    }

    @And("^should be present the field to fill with an email$")
    public void shouldBePresentTheFieldToFillWithAnEmail() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("email")),""));
    }

    @And("^should be present the button \"([^\"]*)\"$")
    public void shouldBePresentTheButton(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//button[@type='submit']")),"Enviar o link de reset password"));
    }

    @Given("^I access the reset password page$")
    public void iAccessTheResetPasswordPage() throws Throwable {
        driver.get("http://35.240.44.156/password/reset");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("panel-heading")),"Reset Password"));
    }

    @When("^I fill the \"([^\"]*)\" field with \"([^\"]*)\" - UStwo$")
    public void iFillTheFieldWithUStwo(String arg0, String arg1) throws Throwable {
        WebElement field = (new WebDriverWait(driver, 3))
                .until(ExpectedConditions.presenceOfElementLocated(By.id(arg0)));
        field.clear();
        field.sendKeys(arg1);
    }

    @Then("^the \"([^\"]*)\" error message should be shown - UStwo$")
    public void theErrorMessageShouldBeShownUStwo(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("help-block")),arg0));
    }

    @Then("^the \"([^\"]*)\" message should be shown - UStwo$")
    public void theMessageShouldBeShownUStwo(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("alert")),arg0));
    }
}
