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

import java.util.Random;

import static org.junit.Assert.assertEquals;

public class US4StepDefs {
    private WebDriver driver;
    private int random;

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

    @Given("^I access the \"([^\"]*)\" dashboard - USfour$")
    public void iAccessTheDashboardUSfour(String arg0) throws Throwable {
        driver.get("http://35.240.44.156/needs");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("dashboard")),"Necessidades"));
    }

    @When("^I press the \"([^\"]*)\" button - USfour$")
    public void iPressTheButtonUSfour(String arg0) throws Throwable {
        WebElement webElement = null;
        if (arg0.equals("new need")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div[2]/div/a"));
        } else if (arg0.equals("create")) {
            webElement = driver.findElement(By.xpath("//button[@name='save']"));
        } else if (arg0.equals("edit")) {
            webElement = driver.findElement(By.xpath("//div[2]/div/div/a"));
        } else if (arg0.equals("save")) {
            webElement = driver.findElement(By.xpath("//button[@name='save']"));
        } else if (arg0.equals("delete")) {
            webElement = driver.findElement(By.xpath("//div[2]/button"));
        }

        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page - USfour$")
    public void iShouldBeRedirectedToThePageUSfour(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("new need")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Nova Necessidade"));
        } else if (arg0.equals("needs")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Necessidades"));
        }

    }

    @And("^the \"([^\"]*)\" text should be shown$")
    public void theTextShouldBeShown(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputDescription")),""));
    }

    @Given("^I access the \"([^\"]*)\" page - USfour$")
    public void iAccessThePageUSfour(String arg0) throws Throwable {
        if (arg0.equals("new need")) {
            driver.get("http://35.240.44.156/needs/create");
        } else if (arg0.equals("edit need")) {
            driver.get("http://35.240.44.156/needs/21/edit");
        } else if (arg0.equals("needs")) {
            driver.get("http://35.240.44.156/needs");
        }
    }

    @When("^I fill the \"([^\"]*)\" field with \"([^\"]*)\" - USfour$")
    public void iFillTheFieldWithUSfour(String arg0, String arg1) throws Throwable {
        WebElement field = driver.findElement(By.id("inputDescription"));
        if (arg1.equals("Cucumber") || arg1.equals("Alimentation")) {
            Random rand = new Random();
            this.random = rand.nextInt(9000000) + 1000000;
            field.clear();
            field.sendKeys(arg1 + this.random);
        } else {
            field.clear();
            field.sendKeys(arg1);
        }
    }

    @And("^the \"([^\"]*)\" need should be present in the \"([^\"]*)\" table$")
    public void theNeedShouldBePresentInTheTable(String arg0, String arg1) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0 + this.random);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='needs']/tbody/tr/td")), arg0 + this.random));
    }

    @When("^I press the \"([^\"]*)\" button of the \"([^\"]*)\" need$")
    public void iPressTheButtonOfTheNeed(String arg0, String arg1) throws Throwable {
        WebElement searchbox  = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg1);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='needs']/tbody/tr/td")), arg1));
        WebElement webElement = driver.findElement(By.xpath("//table[@id='needs']/tbody/tr/td[3]/div/div/a"));
        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of \"([^\"]*)\" need$")
    public void iShouldBeRedirectedToThePageOfNeed(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), arg1));
    }

    @And("^the field \"([^\"]*)\" should show \"([^\"]*)\" - USfour$")
    public void theFieldShouldShowUSfour(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("need")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h2")).get(0), "Necessidade: " + arg1));
        } else if (arg0.equals("created_by")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(1), "Criador: " + arg1));
        }
    }

    @Given("^I access the \"([^\"]*)\" page of the \"([^\"]*)\"$")
    public void iAccessThePageOfThe(String arg0, String arg1) throws Throwable {
        if (arg0.equals("details")) {
            driver.get("http://35.240.44.156/needs/27");
        } else if (arg0.equals("edit need")) {
            driver.get("http://35.240.44.156/needs/27/edit");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Necessidade"));
        }
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the need$")
    public void iShouldBeRedirectedToThePageOfTheNeed(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Necessidade"));
    }

    @And("^the \"([^\"]*)\" button should be present - USfour$")
    public void theButtonShouldBePresentUSfour(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Editar')]")));
        } else if (arg0.equals("delete")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[2]/button")));
        } else if (arg0.equals("back")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Voltar Atrás')]")));
        } else if (arg0.equals("save")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='save']")));
        } else if (arg0.equals("cancel")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Cancelar')]")));
        }
    }

    @And("^the editable field \"([^\"]*)\" should show \"([^\"]*)\" - USfour$")
    public void theEditableFieldShouldShowUSfour(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputDescription")), arg1));
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\" - USfour$")
    public void iShouldBeRedirectedToThePageOfTheUSfour(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Alimentation"));
    }

    @And("^the field \"([^\"]*)\" should show the new need - USfour$")
    public void theFieldShouldShowTheNewNeedUSfour(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Alimentation" + this.random));
    }


    @Given("^I access the \"([^\"]*)\" page of the \"([^\"]*)\" need$")
    public void iAccessThePageOfTheNeed(String arg0, String arg1) throws Throwable {
        driver.get("http://35.240.44.156/needs/create");
        WebElement field = driver.findElement(By.id("inputDescription"));
        field.clear();
        Random rand = new Random();
        this.random = rand.nextInt(9000000) + 1000000;
        field.sendKeys(arg1 + this.random);
        field = driver.findElement(By.xpath("//button[@name='save']"));
        field.click();
        field = driver.findElement(By.id("searchbox"));
        field.clear();
        field.sendKeys(arg1 + this.random);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='needs']/tbody/tr/td")), arg1 + this.random));
        field = driver.findElement(By.xpath("//td[3]/div/div/a"));
        field.click();
    }

    @And("^I press the \"([^\"]*)\" button from the modal$")
    public void iPressTheButtonFromTheModal(String arg0) throws Throwable {
        WebElement webElement = driver.findElement(By.xpath("//div[@id='deleteNeed']/div/div/div[3]/div/div[2]/form/div/button"));
        webElement.click();
    }

    @And("^the \"([^\"]*)\" need should not be present in the \"([^\"]*)\" table$")
    public void theNeedShouldNotBePresentInTheTable(String arg0, String arg1) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0 + this.random);
        assertEquals("Não foram encontrados resultados", driver.findElement(By.className("dataTables_empty")).getText());

    }

    @Then("^the \"([^\"]*)\" error message should be shown - USfour$")
    public void theErrorMessageShouldBeShownUSfour(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("alert")), arg0));
    }

    @When("^the \"([^\"]*)\" field is empty - USfour$")
    public void theFieldIsEmptyUSfour(String arg0) throws Throwable {
        WebElement webElement = driver.findElement(By.id("inputDescription"));
        webElement.clear();
    }

    @And("^should be present a \"([^\"]*)\" log at the beggining of the logs section - USfour$")
    public void shouldBePresentALogAtTheBegginingOfTheLogsSectionUSfour(String arg0) throws Throwable {
        String lastLog = driver.findElements(By.xpath("//table[@id='logs']/tbody/tr")).get(0).findElement(By.xpath(".//td")).getText();
        assertEquals(arg0, lastLog);
    }
}
