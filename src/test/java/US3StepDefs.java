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

public class US3StepDefs {
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
        username.sendKeys("admin");
        password.sendKeys("adminpw");
        WebElement webElement = driver.findElement(By.xpath("//button[@type='submit']"));
        webElement.click();
    }

    @After
    public void tearDown() {
        driver.quit();
    }


    @Given("^I access the \"([^\"]*)\" dashboard - USthree$")
    public void iAccessTheDashboardUSthree(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("dashboard")),"Utilizadores"));
    }

    @When("^I press the \"([^\"]*)\" button -UStrhee$")
    public void iPressTheButtonUStrhee(String arg0) throws Throwable {
        WebElement webElement = null;
        if (arg0.equals("new admin")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div[2]/div/a"));
        } else if (arg0.equals("new healthcare professional")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div[2]/div[2]/a"));
        } else if (arg0.equals("new caregiver")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div[2]/div[3]/a"));
        }
        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page$")
    public void iShouldBeRedirectedToThePage(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("new admin")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Administrador"));
        } else if (arg0.equals("new healthcare professional")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Profissional de Saúde"));
        } else if (arg0.equals("new caregiver")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Cuidador"));
        }
    }

    @And("^the \"([^\"]*)\" form should be shown$")
    public void theFormShouldBeShown(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputUsername")),""));
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputName")),""));
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputEmail")),""));
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputPassword")),""));
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputPasswordConfirmation")),""));
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("btn")),"Criar"));
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//a[contains(text(),'Cancelar')]")),"Cancelar"));
        if (arg0.equals("healthcare professional")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputJob")),""));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputFacility")),""));
        } else if (arg0.equals("caregiver")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("gender")),"Selecione uma opção"));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputBirthDate")),""));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("experienceNumber")),"0"));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("experiencePeriod")),"Selecione um período de tempo"));
        }
    }

}
