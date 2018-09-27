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
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertTrue;

public class US6StepDefs {
    private WebDriver driver;
    private int random;
    private long millsDetails;

    @Before
    public void setUp() {
        System.setProperty("phantomjs.binary.path",
                "drivers/phantomjs");
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

    @Given("^I access the questions dashboard$")
    public void iAccessTheQuestionsDashboard() throws Throwable {
        driver.get("http://35.240.44.156/questions");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("dashboard")),"Questões"));
    }

    @When("^I press the \"([^\"]*)\" button - USsix$")
    public void iPressTheButtonUSsix(String arg0) throws Throwable {
        WebElement webElement = null;
        if (arg0.equals("new question")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div[2]/div/a"));
        } else if (arg0.equals("create")) {
            webElement = driver.findElement(By.xpath("//button[@name='save']"));
        } else if (arg0.equals("edit")) {
            webElement = driver.findElement(By.xpath("//div[2]/div/div/a"));
        } else if (arg0.equals("save")) {
            webElement = driver.findElement(By.xpath("//button[@name='save']"));
        } else if (arg0.equals("block")) {
            webElement = driver.findElement(By.xpath("//button[@name='block']"));
        } else if (arg0.equals("unblock")) {
            webElement = driver.findElement(By.xpath("//button[@name='unblock']"));
        }

        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page - USsix$")
    public void iShouldBeRedirectedToThePageUSsix(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("new question")) {
            assertEquals("http://35.240.44.156/questions/create", driver.getCurrentUrl());
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Nova Questão"));
        } else if (arg0.equals("questions")) {
            assertEquals("http://35.240.44.156/questions", driver.getCurrentUrl());
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Questões"));
        }
    }

    @And("^the \"([^\"]*)\" text should be shown - USsix$")
    public void theTextShouldBeShownUSsix(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), arg0));
    }

    @Given("^I access the \"([^\"]*)\" page - USsix$")
    public void iAccessThePageUSsix(String arg0) throws Throwable {
        if (arg0.equals("new question")) {
            driver.get("http://35.240.44.156/questions/create");
        } else if (arg0.equals("edit question")) {
            driver.get("http://35.240.44.156/questions/122/edit");
        } else if (arg0.equals("questions")) {
            driver.get("http://35.240.44.156/questions");
        }
    }

    @When("^I fill the \"([^\"]*)\" field with \"([^\"]*)\" - USsix$")
    public void iFillTheFieldWithUSsix(String arg0, String arg1) throws Throwable {
        if (arg0.equals("question")) {
            WebElement field = driver.findElement(By.id("inputQuestion"));
            Random rand = new Random();
            this.random = rand.nextInt(9000000) + 1000000;
            field.clear();
            field.sendKeys(arg1 + this.random);
        } else if (arg0.equals("question error")) {
            WebElement field = driver.findElement(By.id("inputQuestion"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("selectType")) {
            Select select = new Select(driver.findElement(By.id(arg0)));
            select.selectByValue(arg1);
        } else if (arg0.equals("values")) {
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='inputOptions']/input")));
            WebElement field = driver.findElement(By.xpath("//div[@id='inputOptions']/input"));
            field.clear();
            field.sendKeys(arg1);
        }
    }

    @And("^the \"([^\"]*)\" question should be present in the \"([^\"]*)\" table$")
    public void theQuestionShouldBePresentInTheTable(String arg0, String arg1) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0 + this.random);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='"+ arg1 +"']/tbody/tr/td")), arg0 + this.random));
    }

    @When("^I press the details button of the \"([^\"]*)\" question$")
    public void iPressTheButtonOfTheQuestion(String arg0) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='questions']/tbody/tr/td")), arg0));
        WebElement webElement = driver.findElement(By.xpath("//td[3]/div/div/a"));
        webElement.click();
    }

    @And("^the field \"([^\"]*)\" should show \"([^\"]*)\" - USsix$")
    public void theFieldShouldShowUSsix(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("question")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Questão: " + arg1));
        } else if (arg0.equals("answerType")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h4")), "Tipo de Resposta: " + arg1));
        }
    }

    @And("^the \"([^\"]*)\" answer should be in the answer options section as option (\\d+)$")
    public void theAnswerShouldBeInTheAnswerOptionsSectionAsOption(String arg0, int arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h5")).get(arg1 - 1), arg0));
    }

    @And("^the \"([^\"]*)\" button should be present - USsix$")
    public void theButtonShouldBePresentUSsix(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Editar')]")));
        } else if (arg0.equals("back")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Voltar Atrás')]")));
        } else if (arg0.equals("save")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='save']")));
        } else if (arg0.equals("cancel")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Cancelar')]")));
        } else if (arg0.equals("block")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='block']")));
        } else if (arg0.equals("unblock")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='unblock']")));
        }
    }

    @Given("^I access the details page of the \"([^\"]*)\" question$")
    public void iAccessThePageOfTheQuestion(String arg0) throws Throwable {
        driver.get("http://35.240.44.156/questions/139");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")),"Questão: " + arg0));
        assertTrue(driver.findElements(By.tagName("h4")).size() == 4);
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\" question$")
    public void iShouldBeRedirectedToThePageOfTheQuestion(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Questão: " + arg1));
        } else if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Questão"));
            assertEquals(arg1, driver.findElement(By.id("inputQuestion")).getAttribute("value"));
        }
    }

    @And("^the question is blocked$")
    public void theQuestionIsBlocked() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='unblock']")));
    }

    @Given("^I access the edit page of a \"([^\"]*)\" question$")
    public void iAccessThePageOfAQuestion(String arg0) throws Throwable {
        if (arg0.equals("text")) {
            driver.get("http://35.240.44.156/questions/174");
        } else if (arg0.equals("options")) {
            driver.get("http://35.240.44.156/questions/119");
        }
        WebDriverWait wait = new WebDriverWait(driver, 3);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(3).getText().split(" ");
        Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
        this.millsDetails = date.getTime();
        WebElement webElement = driver.findElement(By.xpath("//div[2]/div/div/a"));
        webElement.click();
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Questão"));
    }

    @And("^the field \"([^\"]*)\" should different from the previous$")
    public void theFieldShouldDifferentFromThePrevious(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(3).getText().split(" ");
        Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
        long millsNew = date.getTime();
        assertTrue(millsNew > this.millsDetails);
    }

    @And("^should be present a \"([^\"]*)\" log at the beggining of the logs section - USsix$")
    public void shouldBePresentALogAtTheBegginingOfTheLogsSectionUSsix(String arg0) throws Throwable {
        String lastLog = driver.findElements(By.xpath("//table[@id='logs']/tbody/tr")).get(0).findElement(By.xpath(".//td")).getText();
        assertEquals(arg0, lastLog);
    }

    @When("^the \"([^\"]*)\" field is empty - USsix$")
    public void theFieldIsEmptyUSsix(String arg0) throws Throwable {
        if (arg0.equals("question")) {
            WebElement webElement = driver.findElement(By.id("inputQuestion"));
            webElement.clear();
        } else if (arg0.equals("values")) {
            WebElement webElement = driver.findElement(By.xpath("//div[@id='inputOptions']/input"));
            webElement.clear();
        }
    }

    @Then("^the \"(.*)\" error message should be shown - USsix$")
    public void theErrorMessageShouldBeShownUSsix(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("alert")), arg0));
    }

    @And("^I fill the \"([^\"]*)\" field with \"([^\"]*)\" \"([^\"]*)\" - USsix$")
    public void iFillTheFieldWithUSsix(String arg0, String arg1, String arg2) throws Throwable {
        if (arg0.equals("selectType") && arg1.equals("radio") && arg2.equals("new question")) {
            Select select = new Select(driver.findElement(By.id(arg0)));
            select.selectByValue(arg1);
        }
    }
}
