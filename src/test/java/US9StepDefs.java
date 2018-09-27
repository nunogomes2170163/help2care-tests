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

public class US9StepDefs {
    private WebDriver driver;
    private int random;
    private int randomEval;
    private long millsDetails;

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

    @Given("^I access the patients dashboard$")
    public void iAccessThePatientsDashboard() throws Throwable {
        driver.get("http://35.240.44.156/patients");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("dashboard")),"Utentes"));
    }

    @When("^I press the \"([^\"]*)\" button - USnine$")
    public void iPressTheButtonUSnine(String arg0) throws Throwable {
        WebElement webElement = null;
        if (arg0.equals("new patient")) {
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
        } else if (arg0.equals("needs")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div/div[2]/div/div[2]/div/div[2]/a"));
        } else if (arg0.equals("answerQuiz")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Responder a Questionário')]"));
        } else if (arg0.equals("newEvaluation")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Nova Avaliação')]"));
        } else if (arg0.equals("provideQuiz")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Disponibilizar Questionário')]"));
        }

        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page - USnine$")
    public void iShouldBeRedirectedToThePageUSnine(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("new patient")) {
            assertEquals("http://35.240.44.156/patients/create", driver.getCurrentUrl());
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Utente"));
        } else if (arg0.equals("patients")) {
            assertEquals("http://35.240.44.156/patients", driver.getCurrentUrl());
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Utentes"));
        } else if (arg0.equals("patient needs")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Necessidades de Alberto Seixas"));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")),"Outras Necessidades"));
        }
    }

    @And("^the \"([^\"]*)\" text should be shown - USnine$")
    public void theTextShouldBeShownUSnine(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), arg0));
    }

    @Given("^I access the \"([^\"]*)\" page - USnine$")
    public void iAccessThePageUSnine(String arg0) throws Throwable {
        if (arg0.equals("new patient")) {
            driver.get("http://35.240.44.156/patients/create");
        } else if (arg0.equals("edit patient")) {
            driver.get("http://35.240.44.156/patients/20/edit");
        } else if (arg0.equals("patients")) {
            driver.get("http://35.240.44.156/patients");
        } else if (arg0.equals("answer quiz")) {
            driver.get("http://35.240.44.156/patients/20/evaluations/answerQuiz");
        } else if (arg0.equals("new evaluation")) {
            driver.get("http://35.240.44.156/patients/20/evaluations/create/eval");
        } else if (arg0.equals("provide quiz")) {
            driver.get("http://35.240.44.156/patients/20/evaluations/create/quiz");
        } else if (arg0.equals("edit answer quiz")) {
            driver.get("http://35.240.44.156/evaluations/75/edit");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
        } else if (arg0.equals("edit evaluation")) {
            driver.get("http://35.240.44.156/evaluations/76/edit");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
        } else if (arg0.equals("edit provide quiz")) {
            driver.get("http://35.240.44.156/evaluations/77/edit");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
        }
    }

    @When("^I fill the \"([^\"]*)\" field with \"([^\"]*)\" - USnine$")
    public void iFillTheFieldWithUSnine(String arg0, String arg1) throws Throwable {
        if (arg0.equals("name")) {
            WebElement field = driver.findElement(By.id("inputName"));
            Random rand = new Random();
            this.random = rand.nextInt(9000000) + 1000000;
            field.clear();
            field.sendKeys(arg1 + this.random);
        } else if (arg0.equals("email")) {
            WebElement field = driver.findElement(By.id("inputEmail"));
            arg1 = new StringBuilder(arg1).insert(arg1.length() - 9, this.random).toString();
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("email error")) {
            WebElement field = driver.findElement(By.id("inputEmail"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("gender")) {
            Select select = new Select(driver.findElement(By.xpath("//select[@name='" + arg0 + "']")));
            select.selectByVisibleText(arg1);
        } else if (arg0.equals("birthDate")) {
            WebElement field = driver.findElement(By.id("inputBirthDate"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("location")) {
            WebElement field = driver.findElement(By.id("inputLocation"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("healthResource")) {
            WebElement field = driver.findElement(By.id("inputHealthResource"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("healthCenter")) {
            WebElement field = driver.findElement(By.id("inputHealthCenter"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("phoneContact")) {
            WebElement field = driver.findElement(By.id("inputPhoneContact"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("description")) {
            WebElement field = driver.findElement(By.id("inputDescription"));
            if (!(this.randomEval >= 1000000 && this.randomEval <= 10000000)) {
                Random rand = new Random();
                this.randomEval = rand.nextInt(9000000) + 1000000;
            }
            field.clear();
            field.sendKeys(arg1 + this.randomEval);
        } else if (arg0.equals("description error")) {
            WebElement field = driver.findElement(By.id("inputDescription"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("type")) {
            WebElement field = driver.findElement(By.id("inputType"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("quiz")) {
            Select select = new Select(driver.findElement(By.id("quiz")));
            select.selectByVisibleText(String.valueOf(arg1));
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(select.getFirstSelectedOption(), arg1));
        } else if (arg0.equals("model")) {
            WebElement field = driver.findElement(By.id("inputModel"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("path")) {
            WebElement field = driver.findElement(By.xpath("//input[@name='path']"));
            field.sendKeys("C:\\Users\\Nuno\\IdeaProjects\\help2care-server-tests\\testFiles\\test.pdf");
            // switch when pushing to test on jenkins
            //field.sendKeys(arg1);
        } else if (arg0.equals("name error")) {
            WebElement field = driver.findElement(By.id("inputName"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("type edit succ")) {
            WebElement field = driver.findElement(By.id("inputType"));
            field.clear();
            field.sendKeys(arg1 + this.randomEval);
        } else if (arg0.equals("model edit succ")) {
            WebElement field = driver.findElement(By.id("inputModel"));
            field.clear();
            field.sendKeys(arg1 + this.randomEval);
        }
    }

    @And("^the \"([^\"]*)\" patient should be present in the \"([^\"]*)\" table$")
    public void thePatientShouldBePresentInTheTable(String arg0, String arg1) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0 + this.random);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='"+ arg1 +"']/tbody/tr/td")), arg0 + this.random));
    }

    @When("^I press the details button of the \"([^\"]*)\" patient$")
    public void iPressTheButtonOfThePatient(String arg0) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='patients']/tbody/tr/td")), arg0));
        WebElement webElement = driver.findElement(By.xpath("//td[5]/div/div/a"));
        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\" patient$")
    public void iShouldBeRedirectedToThePageOfPatient(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Utente: " + arg1));
        } else if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Utente"));
            assertEquals(arg1, driver.findElement(By.id("inputName")).getAttribute("value"));
        } else if (arg0.equals("answer quiz")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Avaliação de Questionário para: " + arg1));
        } else if (arg0.equals("new evaluation")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Nova Avaliação"));
        } else if (arg0.equals("provide quiz")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Utente: " + arg1));
        }
    }

    @And("^the field \"([^\"]*)\" should show \"([^\"]*)\" - USnine$")
    public void theFieldShouldShowUSnine(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("name")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Utente: " + arg1));
        } else if (arg0.equals("email")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(0), "Email: " + arg1));
        } else if (arg0.equals("birthDate")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(1), "Data de Nascimento: " + arg1));
        } else if (arg0.equals("location")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(2), "Localização: " + arg1));
        } else if (arg0.equals("healthResource")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(3), "Recurso de saúde: " + arg1));
        } else if (arg0.equals("healthCenter")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(4), "Centro de saúde: " + arg1));
        } else if (arg0.equals("phoneContact")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(5), "Contacto telefónico: " + arg1));
        } else if (arg0.equals("gender")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(6), "Género: " + arg1));
        } else if (arg0.equals("caregiver")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(7), "Cuidador: " + arg1));
        } else if (arg0.equals("caregiverKinshipDegree")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(8), "Grau de parentesco do cuidador: " + arg1));
        } else if (arg0.equals("caregiverAlreadyTreatingPatient")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(9), "O cuidador já cuidava do utente: " + arg1));
        } else if (arg0.equals("patientAlreadyDependent")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(10), "O utente já se encontrava dependente: " + arg1));
        } else if (arg0.equals("name edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputName")), arg1));
        } else if (arg0.equals("email edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputEmail")), arg1));
        } else if (arg0.equals("birthDate edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputBirthDate")), arg1));
        } else if (arg0.equals("location edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputLocation")), arg1));
        } else if (arg0.equals("gender edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.xpath("//select[@name='gender']")), arg1));
        } else if (arg0.equals("name edit succ")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Utente: " + arg1 + this.random));
        } else if (arg0.equals("email edit succ")){
            arg1 = new StringBuilder(arg1).insert(arg1.length() - 9, this.random).toString();
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(0), "Email: " + arg1));
        } else if (arg0.equals("description")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Avaliação: " + arg1));
        } else if (arg0.equals("type")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(0), "Tipo de Avaliação: " + arg1));
        } else if (arg0.equals("model")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(1), "Modelo: " + arg1));
        } else if (arg0.equals("questioned")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(5), "Questionado: " + arg1));
        } else if (arg0.equals("file")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(2), "Ficheiro: " + arg1));
        } else if (arg0.equals("answerDate")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(5), "Data da resposta: " + arg1));
        } else if (arg0.equals("description edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputDescription")), arg1));
        } else if (arg0.equals("type edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputType")), arg1));
        } else if (arg0.equals("model edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputModel")), arg1));
        } else if (arg0.equals("description edit succ")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Avaliação: " + arg1 + this.randomEval));
        } else if (arg0.equals("type edit succ")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(0), "Tipo de Avaliação: " + arg1 + this.randomEval));
        } else if (arg0.equals("model edit succ")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(1), "Modelo: " + arg1 + this.randomEval));
        }
    }

    @And("^the \"([^\"]*)\" button should be present - USnine$")
    public void theButtonShouldBePresentUSnine(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Editar')]")));
        } else if (arg0.equals("back")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Voltar Atrás')]")));
        } else if (arg0.equals("save")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='save']")));
        } else if (arg0.equals("cancel")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Cancelar')]")));
        } else if (arg0.equals("needs")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='dashboard']/div/div[2]/div/div[2]/div/div[2]/a")));
        } else if (arg0.equals("answerQuiz")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Responder a Questionário')]")));
        } else if (arg0.equals("newEvaluation")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Nova Avaliação')]")));
        } else if (arg0.equals("provideQuiz")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Disponibilizar Questionário')]")));
        }
    }

    @Given("^I access the details page of the \"([^\"]*)\" patient$")
    public void iAccessTheDetailsPageOfThePatient(String arg0) throws Throwable {
        driver.get("http://35.240.44.156/patients/20");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")),"Utente: " + arg0));
        assertTrue(driver.findElements(By.tagName("h4")).size() == 14);
    }

    @And("^the field \"([^\"]*)\" should be empty - USnine$")
    public void theFieldShouldBeEmptyUSnine(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("healthResource")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputHealthResource")),""));
        } else if (arg0.equals("healthCenter")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputHealthCenter")),""));
        } else if (arg0.equals("phoneContact")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputPhoneContact")),""));
        }
    }

    @Given("^I access the \"([^\"]*)\" page of the \"([^\"]*)\" patient$")
    public void iAccessThePageOfThePatient(String arg0, String arg1) throws Throwable {
        if (arg0.equals("details")) {
            driver.get("http://35.240.44.156/patients/20");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Utente: " + arg1));
        } else if (arg0.equals("edit")) {
            driver.get("http://35.240.44.156/patients/3");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(13).getText().split(" ");
            Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
            this.millsDetails = date.getTime();
            WebElement webElement = driver.findElement(By.xpath("//div[2]/div/div/a"));
            webElement.click();
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Utente"));
            assertTrue(driver.findElement(By.id("inputName")).getAttribute("value").contains(arg1));
        } else if (arg0.equals("patient needs")) {
            driver.get("http://35.240.44.156/patients/20/needs");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Necessidades de " + arg1));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")), "Outras Necessidades"));
        }
    }

    @And("^the field \"([^\"]*)\" should different from the previous - USnine$")
    public void theFieldShouldDifferentFromThePreviousUSnine(String arg0) throws Throwable {
        if (arg0.equals("Data da última atualização")){
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(13).getText().split(" ");
            Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
            long millsNew = date.getTime();
            assertTrue(millsNew > this.millsDetails);
        } else if (arg0.equals("Data da última atualização Test Answer Quiz Patient") || arg0.equals("Data da última atualização Test Provide Quiz Patient")){
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(4).getText().split(" ");
            Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
            long millsNew = date.getTime();
            assertTrue(millsNew > this.millsDetails);
        } else if (arg0.equals("Data da última atualização Test New Evaluation Patient")){
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(5).getText().split(" ");
            Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
            long millsNew = date.getTime();
            assertTrue(millsNew > this.millsDetails);
        }
    }

    @And("^should be present a \"([^\"]*)\" log at the beggining of the logs section - USnine$")
    public void shouldBePresentALogAtTheBegginingOfTheLogsSectionUSnine(String arg0) throws Throwable {
        String lastLog = driver.findElements(By.xpath("//table[@id='logs']/tbody/tr")).get(0).findElement(By.xpath(".//td")).getText();
        assertEquals(arg0, lastLog);
    }

    @And("^the \"([^\"]*)\" table should be present - USnine$")
    public void theTableShouldBePresentUSnine(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("my needs")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Necessidades de Alberto Seixas"));
        } else if (arg0.equals("other needs")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")),"Outras Necessidades"));
            assertTrue(driver.findElements(By.xpath("//table[@id='notMyNeeds']/tbody/tr")).size() > 0);
        }
    }

    @And("^the my needs table have 1 entry$")
    public void theMyNeedsTableHaveEntry() throws Throwable {
        assertTrue(driver.findElements(By.xpath("//table[@id='myNeeds']/tbody/tr")).size() == 1);
    }

    @When("^I press \"([^\"]*)\" button of the \"([^\"]*)\" entry in the \"([^\"]*)\" table$")
    public void iPressButtonOfTheEntryInTheTable(String arg0, String arg1, String arg2) throws Throwable {
        if (arg0.equals("add") && arg1.equals("first") && arg2.equals("other needs")) {
            WebElement webElement = driver.findElement(By.xpath("//table[@id='notMyNeeds']/tbody/tr/td[3]/div/div[2]/form/button"));
            webElement.click();
        } else if (arg0.equals("diassociate") && arg1.equals("second") && arg2.equals("my needs")) {
            WebElement webElement = driver.findElement(By.xpath("//table[@id='myNeeds']/tbody/tr[2]/td[3]/div/div[2]/form/button"));
            webElement.click();
        }
    }

    @Then("^the my needs table should have 2 entries$")
    public void theMyNeedsTableShouldHaveEntries() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.numberOfElementsToBe(By.xpath("//table[@id='myNeeds']/tbody/tr"), 2));
    }

    @And("^each my needs table entry should have the diassociate button$")
    public void eachMyNeedsTableEntryShouldHaveTheDiassociateButton() throws Throwable {
        assertEquals(driver.findElements(By.xpath("//table[@id='myNeeds']/tbody/tr")).size(), driver.findElements(By.xpath("//button[@name='diassociate']")).size());
    }

    @And("^the my needs table have 2 entries$")
    public void theMyNeedsTableHaveEntries() throws Throwable {
        assertTrue(driver.findElements(By.xpath("//table[@id='myNeeds']/tbody/tr")).size() == 2);
    }

    @Then("^the my needs table should have 1 entry$")
    public void theMyNeedsTableShouldHaveEntry() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.numberOfElementsToBe(By.xpath("//table[@id='myNeeds']/tbody/tr"), 1));
    }

    @Given("^I access the \"([^\"]*)\" page on the details page of the \"([^\"]*)\" patient$")
    public void iAccessThePageOnTheDetailsPageOfThePatient(String arg0, String arg1) throws Throwable {
        if (arg0.equals("answer quiz")) {
            driver.get("http://35.240.44.156/patients/20/evaluations/answerQuiz");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Avaliação de Questionário para: " + arg1));
        } else if (arg0.equals("new evaluation")) {
            driver.get("http://35.240.44.156/patients/20/evaluations/create/eval");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Nova Avaliação"));
        } else if (arg0.equals("provide quiz")) {
            driver.get("http://35.240.44.156/patients/20/evaluations/create/quiz");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Utente: " + arg1));
        }
    }

    @And("^I answer all the questions of the selected quiz$")
    public void iAnswerAllTheQuestionsOfTheSelectedQuiz() throws Throwable {
        WebElement webElement = driver.findElement(By.xpath("//div[@id='questions']/div/input"));
        webElement.click();
        webElement = driver.findElement(By.xpath("//div[@id='questions']/div[2]/input"));
        webElement.click();
        webElement = driver.findElement(By.xpath("//div[@id='questions']/div[3]/input"));
        webElement.click();
        webElement = driver.findElement(By.xpath("//div[@id='questions']/div[4]/input"));
        webElement.click();
    }

    @And("^there should be an entry on the evaluations table that contains the text \"([^\"]*)\"$")
    public void thereShouldBeAnEntryOnTheEvaluationsTableThatContainsTheText(String arg0) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0 + this.randomEval);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='evaluations']/tbody/tr/td")), arg0 + this.randomEval));
    }

    @When("^I press the details button of the \"([^\"]*)\" evaluation$")
    public void iPressTheDetailsButtonOfTheEvaluation(String arg0) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='evaluations']/tbody/tr/td")), arg0));
        WebElement webElement = driver.findElement(By.xpath("//table[@id='evaluations']/tbody/tr/td[6]/div/div/a"));
        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\" evaluation$")
    public void iShouldBeRedirectedToTheDetailsPageOfEvaluation(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("h2"),"Avaliação: " + arg1));
        } else if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
            assertEquals(arg1, driver.findElement(By.id("inputDescription")).getAttribute("value"));
        }
    }

    @And("^the \"([^\"]*)\" section should be displayed$")
    public void theAnswersSectionShouldBeDisplayed(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")), arg0));
    }

    @And("^every entry on the answers section should have a pair question-answer$")
    public void everyEntryOnTheAnswersSectionShouldHaveAPairQuestionAnswer() throws Throwable {
        int size = driver.findElements(By.xpath("//table[@id='answers']/tbody/tr")).size();
        for (int i = 1; i <= size; i++) {
            assertTrue(driver.findElement(By.xpath("//table[@id='answers']/tbody/tr[" + i + "]/td")).getText().length() > 0);
            assertTrue(driver.findElement(By.xpath("//table[@id='answers']/tbody/tr[" + i + "]/td[2]")).getText().length() > 0);
        }
    }

    @And("^the field \"([^\"]*)\" must be clickable - USnine$")
    public void theFieldMustBeClickableUSnine(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//h4[3]/a"))));
    }

    @Given("^I access the \"([^\"]*)\" page of the \"([^\"]*)\" evaluation of the \"([^\"]*)\" patient$")
    public void iAccessThePageOfTheEvaluationOfThePatient(String arg0, String arg1, String arg2) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            driver.get("http://35.240.44.156/patients/20");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Utente: " + arg2));
            WebElement searchbox = driver.findElement(By.id("searchbox"));
            searchbox.clear();
            searchbox.sendKeys(arg1);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='evaluations']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//table[@id='evaluations']/tbody/tr/td[6]/div/div/a"));
            webElement.click();
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("h2"),"Avaliação: " + arg1));
        } else if (arg0.equals("edit")) {
            if (arg1.equals("Test Answer Quiz Patient")) {
                driver.get("http://35.240.44.156/evaluations/75");
                wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Avaliação: " + arg1));
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(4).getText().split(" ");
                Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
                this.millsDetails = date.getTime();
            } else if (arg1.equals("Test New Evaluation Patient")) {
                driver.get("http://35.240.44.156/evaluations/76");
                wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Avaliação: " + arg1));
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(5).getText().split(" ");
                Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
                this.millsDetails = date.getTime();
            } else if (arg1.equals("Test Provide Quiz Patient")) {
                driver.get("http://35.240.44.156/evaluations/77");
                wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Avaliação: " + arg1));
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(4).getText().split(" ");
                Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
                this.millsDetails = date.getTime();
            }
            WebElement webElement = driver.findElement(By.xpath("//div[2]/div/div/a"));
            webElement.click();
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputDescription")), arg1));
        }
    }

    @When("^the \"([^\"]*)\" field is empty - USnine$")
    public void theFieldIsEmptyUSnine(String arg0) throws Throwable {
        if (arg0.equals("name")) {
            WebElement webElement = driver.findElement(By.id("inputName"));
            webElement.clear();
        } else if (arg0.equals("email")) {
            WebElement webElement = driver.findElement(By.id("inputEmail"));
            webElement.clear();
        } else if (arg0.equals("gender")) {
            Select select = new Select(driver.findElement(By.xpath("//select[@name='" + arg0 + "']")));
            select.selectByVisibleText("Selecione uma opção");
        } else if (arg0.equals("birthDate")) {
            WebElement webElement = driver.findElement(By.id("inputBirthDate"));
            webElement.clear();
        } else if (arg0.equals("description")) {
            WebElement webElement = driver.findElement(By.id("inputDescription"));
            webElement.clear();
        } else if (arg0.equals("type")) {
            WebElement webElement = driver.findElement(By.id("inputType"));
            webElement.clear();
        } else if (arg0.equals("model")) {
            WebElement webElement = driver.findElement(By.id("inputModel"));
            webElement.clear();
        } else if (arg0.equals("path")) {
            WebElement webElement = driver.findElement(By.xpath("//input[@name='path']"));
            webElement.sendKeys("");
        }
    }

    @Then("^the \"([^\"]*)\" error message should be shown - USnine$")
    public void theErrorMessageShouldBeShownUSnine(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("alert")), arg0));
    }
}
