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

public class US8StepDefs {
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

    @Given("^I access the \"([^\"]*)\" dashboard - USeight$")
    public void iAccessThePatientsDashboard(String arg0) throws Throwable {
        if (arg0.equals("caregivers")) {
            driver.get("http://35.240.44.156/users");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("dashboard")),"Cuidadores"));
        } else if (arg0.equals("healthcare professional")) {
            driver.get("http://35.240.44.156");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Os meus Cuidadores"));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("others-caregivers-legend")).get(0),"Outros cuidadores que necessitam de Profissionais de Saúde"));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("others-caregivers-legend")).get(1),"Mensagens de ajuda"));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("others-caregivers-legend")).get(2),"Estatísticas Gerais de Utilização da Aplicação"));
        }
    }

    @When("^I press the \"([^\"]*)\" button - USeight$")
    public void iPressTheButtonUSeight(String arg0) throws Throwable {
        WebElement webElement = null;
        if (arg0.equals("new caregiver")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div[2]/div/a"));
        } else if (arg0.equals("create") || arg0.equals("save") || arg0.equals("send")) {
            webElement = driver.findElement(By.xpath("//button[@name='save']"));
        } else if (arg0.equals("edit")) {
            webElement = driver.findElement(By.xpath("//div[2]/div/div/a"));
        } else if (arg0.equals("block")) {
            webElement = driver.findElement(By.xpath("//button[@name='block']"));
        } else if (arg0.equals("unblock")) {
            webElement = driver.findElement(By.xpath("//button[@name='unblock']"));
        } else if (arg0.equals("materials")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div/div[2]/div/div[2]/div[2]/div[2]/a"));
        } else if (arg0.equals("patients")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div/div[2]/div/div[2]/div[2]/div/a"));
        } else if (arg0.equals("evaluations")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div/div[2]/div/div[2]/div[3]/div/a"));
        } else if (arg0.equals("associate")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div[7]/form/div/div[3]/button"));
        } else if (arg0.equals("associatePatient")) {
            webElement = driver.findElement(By.xpath("//button[@id='associateBtn']"));
        } else if (arg0.equals("answerQuiz")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Responder a Questionário')]"));
        } else if (arg0.equals("newEvaluation")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Nova Avaliação')]"));
        } else if (arg0.equals("provideQuiz")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Disponibilizar Questionário')]"));
        }

        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page - USeight$")
    public void iShouldBeRedirectedToThePageUSeight(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("new caregiver")) {
            assertEquals("http://35.240.44.156/users/create/caregiver", driver.getCurrentUrl());
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Cuidador"));
        } else if (arg0.equals("patients")) {
            assertEquals("http://35.240.44.156/users", driver.getCurrentUrl());
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Cuidadores"));
        } else if (arg0.equals("patient needs")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Necessidades de Alberto Seixas"));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")),"Outras Necessidades"));
        }
    }

    @And("^the caregiver is blocked$")
    public void theCaregiverIsBlocked() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='unblock']")));
    }

    @And("^the \"([^\"]*)\" text should be shown - USeight$")
    public void theTextShouldBeShownUSeight(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), arg0));
    }

    @Given("^I access the \"([^\"]*)\" page - USeight$")
    public void iAccessThePageUSeight(String arg0) throws Throwable {
        if (arg0.equals("new caregiver")) {
            driver.get("http://35.240.44.156/users/create/caregiver");
        } else if (arg0.equals("edit caregiver")) {
            driver.get("http://35.240.44.156/users/69/edit");
        } else if (arg0.equals("caregivers")) {
            driver.get("http://35.240.44.156/users");
        } else if (arg0.equals("answer quiz")) {
            driver.get("http://35.240.44.156/caregivers/15/evaluations/answerQuiz");
        } else if (arg0.equals("new evaluation")) {
            driver.get("http://35.240.44.156/caregivers/15/evaluations/create/eval");
        } else if (arg0.equals("provide quiz")) {
            driver.get("http://35.240.44.156/caregivers/15/evaluations/create/quiz");
        } else if (arg0.equals("edit answer quiz")) {
            driver.get("http://35.240.44.156/evaluations/84/edit");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
        } else if (arg0.equals("edit evaluation")) {
            driver.get("http://35.240.44.156/evaluations/85/edit");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
        } else if (arg0.equals("edit provide quiz")) {
            driver.get("http://35.240.44.156/evaluations/86/edit");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
        } else if (arg0.equals("provide quiz material")) {
            driver.get("http://35.240.44.156/caregivers/91/materials/87/evaluations/create");
        } else if (arg0.equals("edit provide quiz material")) {
            driver.get("http://35.240.44.156/evaluations/90/edit");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
        }
    }

    @When("^I fill the \"([^\"]*)\" field with \"([^\"]*)\" - USeight$")
    public void iFillTheFieldWithUSeight(String arg0, String arg1) throws Throwable {
        if (arg0.equals("username")) {
            WebElement field = driver.findElement(By.id("inputUsername"));
            Random rand = new Random();
            this.random = rand.nextInt(9000000) + 1000000;
            field.clear();
            field.sendKeys(arg1 + this.random);
        } else if (arg0.equals("username error")) {
            WebElement field = driver.findElement(By.id("inputUsername"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("name")) {
            WebElement field = driver.findElement(By.id("inputName"));
            if (this.random == 0) {
                Random rand = new Random();
                this.random = rand.nextInt(9000000) + 1000000;
            }
            field.clear();
            field.sendKeys(arg1 + this.random);
        } else if (arg0.equals("name error")) {
            WebElement field = driver.findElement(By.id("inputName"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("email")) {
            WebElement field = driver.findElement(By.id("inputEmail"));
            if (arg1.contains("hotmail")) {
                arg1 = new StringBuilder(arg1).insert(arg1.length() - 12, this.random).toString();
            } else {
                arg1 = new StringBuilder(arg1).insert(arg1.length() - 10, this.random).toString();
            }
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("email error")) {
            WebElement field = driver.findElement(By.id("inputEmail"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("gender")) {
            Select select = new Select(driver.findElement(By.xpath("//select[@id='" + arg0 + "']")));
            select.selectByVisibleText(arg1);
        } else if (arg0.equals("birthDate")) {
            WebElement field = driver.findElement(By.id("inputBirthDate"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("location")) {
            WebElement field = driver.findElement(By.id("inputLocation"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("experienceNumber")) {
            Select select = new Select(driver.findElement(By.xpath("//select[@id='" + arg0 + "']")));
            select.selectByVisibleText(arg1);
        } else if (arg0.equals("experiencePeriod")) {
            Select select = new Select(driver.findElement(By.xpath("//select[@id='" + arg0 + "']")));
            select.selectByVisibleText(arg1);
        } else if (arg0.equals("password")) {
            WebElement field = driver.findElement(By.id("inputPassword"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("passwordConfirmation")) {
            WebElement field = driver.findElement(By.id("inputPasswordConfirmation"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("message")) {
            WebElement field = driver.findElement(By.xpath("//textarea[@name='"+ arg0 +"']"));
            field.clear();
            field.sendKeys(arg1);
        } else if (arg0.equals("image")) {
            WebElement field = driver.findElement(By.id("upload"));
            field.sendKeys(arg1);
        } else if (arg0.equals("need")) {
            Select select = new Select(driver.findElement(By.xpath("//select[@name='" + arg0 + "']")));
            select.selectByVisibleText(arg1);
        } else if (arg0.equals("material")) {
            Select select = new Select(driver.findElement(By.xpath("//select[@name='" + arg0 + "']")));
            select.selectByVisibleText(arg1);
        } else if (arg0.equals("kinshipDegree")) {
            Select select = new Select(driver.findElement(By.xpath("//select[@id='inputKinshipDegree-28']")));
            select.selectByVisibleText(arg1);
        } else if (arg0.equals("previouslyCared")) {
            Select select = new Select(driver.findElement(By.xpath("//select[@id='inputPreviouslyCared-28']")));
            select.selectByVisibleText(arg1);
        } else if (arg0.equals("previouslyDependent")) {
            Select select = new Select(driver.findElement(By.xpath("//select[@id='inputPreviouslyDependent-28']")));
            select.selectByVisibleText(arg1);
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

    @And("^the \"([^\"]*)\" caregiver should be present in the \"([^\"]*)\" table$")
    public void theCaregiverShouldBePresentInTheTable(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg1.equals("caregivers")) {
            WebElement searchbox = driver.findElement(By.id("searchbox"));
            searchbox.clear();
            searchbox.sendKeys(arg0 + this.random);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='users']/tbody/tr/td")), arg0 + this.random));
        } else if (arg1.equals("my caregivers")) {
            driver.get("http://35.240.44.156");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Os meus Cuidadores"));
            WebElement searchbox = driver.findElement(By.id("searchbox"));
            searchbox.clear();
            searchbox.sendKeys(arg0 + this.random);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='caregivers']/tbody/tr/td")), arg0 + this.random));
        }
    }

    @When("^I press the details button of the \"([^\"]*)\" caregiver on the \"([^\"]*)\" table$")
    public void iPressTheDetailsButtonOfTheCaregiverOnTheTable(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='caregivers']/tbody/tr/td")), arg0));
        WebElement webElement = driver.findElement(By.xpath("//a[contains(text(),'Detalhes')]"));
        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\" caregiver$")
    public void iShouldBeRedirectedToThePageOfTheCaregiver(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("h2"),"Utilizador: " + arg1));
        } else if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Cuidador " + arg1));
        } else if (arg0.equals("caregiver materials")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Materiais de " + arg1));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")), "Associar Materiais"));
        } else if (arg0.equals("caregiver patients")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Utentes de " + arg1));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")), "Utentes Sem Cuidador"));
        } else if (arg0.equals("evaluations")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Avaliações de " + arg1));
        } else if (arg0.equals("answer quiz")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Avaliação de Questionário para: " + arg1));
        } else if (arg0.equals("new evaluation")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Nova Avaliação"));
        } else if (arg0.equals("provide quiz")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Cuidador: " + arg1));
        }
    }

    @And("^the field \"([^\"]*)\" should show \"([^\"]*)\" - USeight$")
    public void theFieldShouldShowUSeight(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("username")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Utilizador: " + arg1));
        } else if (arg0.equals("name")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(0), "Nome: " + arg1));
        } else if (arg0.equals("email")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(1), "Email: " + arg1));
        } else if (arg0.equals("role")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(2), "Função: " + arg1));
        } else if (arg0.equals("birthDate")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(3), "Data de Nascimento: " + arg1));
        } else if (arg0.equals("location")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(4), "Localização: " + arg1));
        } else if (arg0.equals("gender")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(5), "Género: " + arg1));
        } else if (arg0.equals("experienceTimeAsCaregiver")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(6), "Tempo de experiência como cuidador: " + arg1));
        } else if (arg0.equals("nHealthcareProfissionals")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(7), "Nº Profissionais de Saúde: " + arg1));
        } else if (arg0.equals("name edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputName")), arg1));
        } else if (arg0.equals("email edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputEmail")), arg1));
        } else if (arg0.equals("birthDate edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputBirthDate")), arg1));
        } else if (arg0.equals("location edit")){
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputLocation")), arg1));
        } else if (arg0.equals("gender edit")){
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.xpath("//select[@id='gender']"), arg1));
        } else if (arg0.equals("email edit succ")){
            arg1 = new StringBuilder(arg1).insert(arg1.length() - 12, this.random).toString();
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(1), "Email: " + arg1));
        } else if (arg0.equals("messageTitle")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h3")), arg1));
        } else if (arg0.equals("material")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h4")), "Material: " + arg1));
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

    @And("^the \"([^\"]*)\" button should be present - USeight$")
    public void theButtonShouldBePresentUSeight(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Editar')]")));
        } else if (arg0.equals("back")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Voltar Atrás')]")));
        } else if (arg0.equals("save")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='save']")));
        } else if (arg0.equals("cancel")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Cancelar')]")));
        } else if (arg0.equals("materials")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='dashboard']/div/div[2]/div/div[2]/div[2]/div[2]/a")));
        } else if (arg0.equals("patients")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='dashboard']/div/div[2]/div/div[2]/div[2]/div/a")));
        } else if (arg0.equals("evaluations")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Avaliações')]")));
        } else if (arg0.equals("block")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='block']")));
        } else if (arg0.equals("unblock")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='unblock']")));
        } else if (arg0.equals("associateMaterial")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='dashboard']/div[7]/form/div/div[3]/button")));
        } else if (arg0.equals("answerQuiz")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Responder a Questionário')]")));
        } else if (arg0.equals("newEvaluation")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Nova Avaliação')]")));
        } else if (arg0.equals("provideQuiz")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Disponibilizar Questionário')]")));
        }
    }

    @When("^I press the details button of the \"([^\"]*)\" caregiver$")
    public void iPressTheDetailsButtonOfTheCaregiver(String arg0) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='users']/tbody/tr/td")), arg0));
        WebElement webElement = driver.findElement(By.xpath("//td[3]/div/div/a"));
        webElement.click();
    }

    @Given("^I access the \"([^\"]*)\" page of the \"([^\"]*)\" caregiver$")
    public void iAccessThePageOfTheCaregiver(String arg0, String arg1) throws Throwable {
        if (arg0.equals("details")) {
            if (arg1.equals("caregiver")) {
                driver.get("http://35.240.44.156/users/15");
            } else if (arg1.equals("helena.carvalho")) {
                driver.get("http://35.240.44.156/users/91");
            }
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")),"Utilizador: " + arg1));
            if (arg1.equals("caregiver")) {
                assertTrue(driver.findElements(By.tagName("h4")).size() == 11);
            } else if (arg1.equals("helena.carvalho")) {
                assertTrue(driver.findElements(By.tagName("h4")).size() == 16);
            }
        } else if (arg0.equals("edit")) {
            driver.get("http://35.240.44.156/users/71");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(10).getText().split(" ");
            Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
            this.millsDetails = date.getTime();
            WebElement webElement = driver.findElement(By.xpath("//div[2]/div/div/a"));
            webElement.click();
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Cuidador " + arg1));
        } else if (arg0.equals("caregiver materials")) {
            if (arg1.equals("Caregiver")) {
                driver.get("http://35.240.44.156/caregivers/15/materials");
            } else if (arg1.equals("Helena Carvalho")) {
                driver.get("http://35.240.44.156/caregivers/91/materials");
            }
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Materiais de " + arg1));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")), "Associar Materiais"));
        } else if (arg0.equals("caregiver patients")) {
            driver.get("http://35.240.44.156/caregivers/91/patients");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Utentes de " + arg1));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")), "Utentes Sem Cuidador"));
        } else if (arg0.equals("evaluations")) {
            driver.get("http://35.240.44.156/caregivers/15/rate");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Avaliações de " + arg1));
        }
    }

    @And("^the field \"([^\"]*)\" should be empty - USeight$")
    public void theFieldShouldBeEmptyUSeight(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("password")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputPassword")),""));
        } else if (arg0.equals("passwordConfirmation")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputPasswordConfirmation")),""));
        }
    }

    @And("^the field \"([^\"]*)\" should different from the previous - USeight$")
    public void theFieldShouldDifferentFromThePreviousUSeight(String arg0) throws Throwable {
        if (arg0.equals("Data da última atualização")){
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(10).getText().split(" ");
            Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
            long millsNew = date.getTime();
            assertTrue(millsNew > this.millsDetails);
        } else if (arg0.equals("Data da última atualização Test Answer Quiz Patient") || arg0.equals("Data da última atualização Test Provide Quiz Patient") || arg0.equals("Data da última atualização Test Provide Quiz Material")) {
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

    @And("^should be present a \"([^\"]*)\" log at the beggining of the logs section - USeight$")
    public void shouldBePresentALogAtTheBegginingOfTheLogsSectionUSeight(String arg0) throws Throwable {
        String lastLog = driver.findElements(By.xpath("//table[@id='logs']/tbody/tr")).get(0).findElement(By.xpath(".//td")).getText();
        assertEquals(arg0, lastLog);
    }

    @And("^the \"([^\"]*)\" table have (\\d+) entries$")
    public void theTableHaveEntries(String arg0, int arg1) throws Throwable {
        if (arg0.equals("my caregivers")) {
            assertTrue(driver.findElements(By.xpath("//table[@id='caregivers']/tbody/tr")).size() == arg1);
        } else if (arg0.equals("my materials")) {
            assertTrue(driver.findElements(By.xpath("//table[@id='materials']/tbody/tr")).size() == arg1);
        } else if (arg0.equals("my patients")) {
            assertTrue(driver.findElements(By.xpath("//table[@id='myPatients']/tbody/tr")).size() == arg1);
        }
    }

    @When("^I press the \"([^\"]*)\" button of the \"([^\"]*)\" caregiver on the \"([^\"]*)\" table$")
    public void iPressTheButtonOfTheCaregiverOnTheTable(String arg0, String arg1, String arg2) throws Throwable {
        if (arg2.equals("my caregivers")) {
            WebElement searchbox = driver.findElement(By.id("searchbox"));
            searchbox.clear();
            searchbox.sendKeys(arg1);
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='caregivers']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//button[@name='diassociate']"));
            webElement.click();
        } else if (arg2.equals("other caregivers")) {
            WebElement searchbox = driver.findElement(By.id("searchboxO"));
            searchbox.clear();
            searchbox.sendKeys(arg1);
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='otherCaregivers']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//button[@name='associate']"));
            webElement.click();
        }
    }

    @Then("^the \"([^\"]*)\" table should have (\\d+) entries$")
    public void theTableShouldHaveEntries(String arg0, int arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("my caregivers")) {
            wait.until(ExpectedConditions.numberOfElementsToBe(By.xpath("//table[@id='caregivers']/tbody/tr"), arg1));
        } else if (arg0.equals("my materials")) {
            wait.until(ExpectedConditions.numberOfElementsToBe(By.xpath("//table[@id='materials']/tbody/tr"), arg1));
        } else if (arg0.equals("my patients")) {
            wait.until(ExpectedConditions.numberOfElementsToBe(By.xpath("//table[@id='myPatients']/tbody/tr"), arg1));
        }
    }

    @And("^the \"([^\"]*)\" caregiver should be on the \"([^\"]*)\" table$")
    public void theCaregiverShouldBeOnTheTable(String arg0, String arg1) throws Throwable {
        if (arg1.equals("my caregivers")) {
            WebElement searchbox = driver.findElement(By.id("searchbox"));
            searchbox.clear();
            searchbox.sendKeys(arg0);
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='caregivers']/tbody/tr/td")), arg0));
        } else if (arg1.equals("other caregivers")) {
            WebElement searchbox = driver.findElement(By.id("searchboxO"));
            searchbox.clear();
            searchbox.sendKeys(arg0);
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='otherCaregivers']/tbody/tr/td")), arg0));
        }
    }

    @And("^the \"([^\"]*)\" table should be present - USeight$")
    public void theTableShouldBePresentUSeight(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("my materials")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Materiais de Caregiver"));
            assertTrue(driver.findElements(By.xpath("//table[@id='materials']/tbody/tr")).size() > 0);
        } else if (arg0.equals("my patients")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Utentes de Caregiver"));
            assertTrue(driver.findElements(By.xpath("//table[@id='myPatients']/tbody/tr")).size() > 0);
        } else if (arg0.equals("other patients")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")),"Utentes Sem Cuidador"));
            assertTrue(driver.findElements(By.xpath("//table[@id='notMyPatients']/tbody/tr")).size() > 0);
        }
    }

    @And("^the associate materials section should be present$")
    public void theSectionShouldBePresent() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")),"Associar Materiais"));
    }

    @And("^the \"([^\"]*)\" select box should be present$")
    public void theSelectBoxShouldBePresent(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("need")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//select[@name='need']")));
        } else if (arg0.equals("material")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//select[@name='material']")));
        }
    }

    @And("^the \"([^\"]*)\" material should be on the \"([^\"]*)\" table$")
    public void theMaterialShouldBeOnTheTable(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg0));
    }

    @When("^I press the \"([^\"]*)\" button of the \"([^\"]*)\" material on the \"([^\"]*)\" table$")
    public void iPressTheButtonOfTheMaterialOnTheTable(String arg0, String arg1, String arg2) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg1);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg1));
        WebElement webElement = driver.findElement(By.xpath("//button[@name='" + arg0 + "']"));
        webElement.click();
    }

    @When("^I press the \"([^\"]*)\" button of the \"([^\"]*)\" patient on the \"([^\"]*)\" table$")
    public void iPressTheButtonOfThePatientOnTheTable(String arg0, String arg1, String arg2) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg2.equals("my patients")) {
            WebElement searchbox = driver.findElement(By.id("searchbox"));
            searchbox.clear();
            searchbox.sendKeys(arg1);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='myPatients']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//button[@name='" + arg0 + "']"));
            webElement.click();
        } else if (arg2.equals("other patients")) {
            WebElement searchbox = driver.findElement(By.id("searchboxO"));
            searchbox.clear();
            searchbox.sendKeys(arg1);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='notMyPatients']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//button[@name='" + arg0 + "']"));
            webElement.click();
            wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//select[@id='inputKinshipDegree-28']"))));
            wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//select[@id='inputPreviouslyCared-28']"))));
            wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//select[@id='inputPreviouslyDependent-28']"))));
        }
    }

    @And("^the \"([^\"]*)\" patient should be on the \"([^\"]*)\" table$")
    public void thePatientShouldBeOnTheTable(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg1.equals("my patients")) {
            WebElement searchbox = driver.findElement(By.id("searchbox"));
            searchbox.clear();
            searchbox.sendKeys(arg0);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='myPatients']/tbody/tr/td")), arg0));
        } else if (arg1.equals("other patients")) {
            WebElement searchbox = driver.findElement(By.id("searchboxO"));
            searchbox.clear();
            searchbox.sendKeys(arg0);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='notMyPatients']/tbody/tr/td")), arg0));
        }
    }

    @And("^the \"([^\"]*)\" table have at least 1 entry$")
    public void theTableHaveAtLeastEntry(String arg0) throws Throwable {
        assertTrue(driver.findElements(By.xpath("//table[@id='messages']/tbody/tr")).size() <= 1);
    }

    @When("^I press the check help request button of the \"([^\"]*)\" material on the help requests table$")
    public void iPressTheCheckHelpRequestButtonOfTheMaterialOnTheHelpRequestsTable(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        WebElement searchbox = driver.findElement(By.id("searchboxM"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='messages']/tbody/tr/td[2]")), arg0));
        WebElement webElement = driver.findElement(By.xpath("//a[contains(text(),'Ver pedido de ajuda')]"));
        webElement.click();
    }

    @Then("^I should be redirected to the answer help request page of the \"([^\"]*)\" material of the \"([^\"]*)\" caregiver$")
    public void iShouldBeRedirectedToTheAnswerHelpRequestPageOfTheMaterialOfTheCaregiver(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h3")), "Mensagem de ajuda do Cuidador: " + arg1));
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h4")), "Material: " + arg0));
    }

    @Given("^I access the \"([^\"]*)\" page of the \"([^\"]*)\" material$")
    public void iAccessThePageOfTheMaterial(String arg0, String arg1) throws Throwable {
        driver.get("http://35.240.44.156/helpRequests/32");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h3")), "Mensagem de ajuda do Cuidador: Caregiver"));
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h4")), "Material: " + arg1));
    }

    @Then("^the \"([^\"]*)\" text should be present in the last chat bubble$")
    public void theTextShouldBePresentInTheLastChatBubble(String arg0) throws Throwable {
        int leftMessagesSize = driver.findElements(By.className("left")).size();
        int rightMessagesSize = driver.findElements(By.className("right")).size();
        int allMessages = leftMessagesSize + rightMessagesSize;
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//div[@id='messages']/ul/li[" + (allMessages - 1) + "]/span/p")), arg0));
    }

    @And("^the \"([^\"]*)\" field should be clear$")
    public void theFieldShouldBeClear(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//textarea[@name='message']")),""));
    }

    @Then("^the image should be present in the last chat bubble$")
    public void theImageShouldBePresentInTheLastChatBubble() throws Throwable {
        int leftMessagesSize = driver.findElements(By.className("left")).size();
        int rightMessagesSize = driver.findElements(By.className("right")).size();
        int allMessages = leftMessagesSize + rightMessagesSize;
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='messages']/ul/li[" + (allMessages - 1) + "]/span/a/img")));
        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//div[@id='messages']/ul/li[" + (allMessages - 1) + "]/span/a/img"))));
    }

    @Then("^a table with the title \"([^\"]*)\" should be displayed - USeight$")
    public void aTableWithTheTitleShouldBeDisplayedUSeight(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.className("my-caregivers-legend"), arg0));
        assertTrue(driver.findElements(By.xpath("//table[@id='evaluations']/tbody/tr")).size() > 0);
    }

    @Given("^I access the \"([^\"]*)\" page on the evaluations page of the \"([^\"]*)\" caregiver$")
    public void iAccessThePageOnTheEvaluationsPageOfTheCaregiver(String arg0, String arg1) throws Throwable {
        if (arg0.equals("answer quiz")) {
            driver.get("http://35.240.44.156/caregivers/15/evaluations/answerQuiz");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Avaliação de Questionário para: " + arg1));
        } else if (arg0.equals("new evaluation")) {
            driver.get("http://35.240.44.156/caregivers/15/evaluations/create/eval");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Nova Avaliação"));
        } else if (arg0.equals("provide quiz")) {
            driver.get("http://35.240.44.156/caregivers/15/evaluations/create/quiz");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Cuidador: " + arg1));
        }
    }

    @And("^I answer all the questions of the selected quiz - USeight$")
    public void iAnswerAllTheQuestionsOfTheSelectedQuizUSeight() throws Throwable {
        WebElement webElement = driver.findElement(By.xpath("//div[@id='questions']/div/input"));
        webElement.click();
        webElement = driver.findElement(By.xpath("//div[@id='questions']/div[2]/input"));
        webElement.click();
        webElement = driver.findElement(By.xpath("//div[@id='questions']/div[3]/input"));
        webElement.click();
        webElement = driver.findElement(By.xpath("//div[@id='questions']/div[4]/input"));
        webElement.click();
    }

    @And("^there should be an entry on the evaluations table that contains the text \"([^\"]*)\" - USeight$")
    public void thereShouldBeAnEntryOnTheEvaluationsTableThatContainsTheTextUSeight(String arg0) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0 + this.randomEval);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='evaluations']/tbody/tr/td")), arg0 + this.randomEval));
    }

    @When("^I press the details button of the \"([^\"]*)\" evaluation - USeight$")
    public void iPressTheDetailsButtonOfTheEvaluationUSeight(String arg0) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='evaluations']/tbody/tr/td")), arg0));
        WebElement webElement = driver.findElement(By.xpath("//table[@id='evaluations']/tbody/tr/td[6]/div/div/a"));
        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of \"([^\"]*)\" evaluation - USeight$")
    public void iShouldBeRedirectedToThePageOfEvaluationUSeight(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("h2"),"Avaliação: " + arg1));
        } else if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
            assertEquals(arg1, driver.findElement(By.id("inputDescription")).getAttribute("value"));
        }
    }

    @And("^the \"([^\"]*)\" section should be displayed - USeight$")
    public void theSectionShouldBeDisplayedUSeight(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")), arg0));
    }

    @And("^every entry on the answers section should have a pair question-answer - USeight$")
    public void everyEntryOnTheAnswersSectionShouldHaveAPairQuestionAnswerUSeight() throws Throwable {
        int size = driver.findElements(By.xpath("//table[@id='answers']/tbody/tr")).size();
        for (int i = 1; i <= size; i++) {
            assertTrue(driver.findElement(By.xpath("//table[@id='answers']/tbody/tr[" + i + "]/td")).getText().length() > 0);
            assertTrue(driver.findElement(By.xpath("//table[@id='answers']/tbody/tr[" + i + "]/td[2]")).getText().length() > 0);
        }
    }

    @And("^the field \"([^\"]*)\" must be clickable - USeight$")
    public void theFieldMustBeClickableUSeight(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//h4[3]/a"))));
    }

    @Given("^I access the \"([^\"]*)\" page of the \"([^\"]*)\" evaluation of the \"([^\"]*)\" caregiver$")
    public void iAccessThePageOfTheEvaluationOfTheCaregiver(String arg0, String arg1, String arg2) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            driver.get("http://35.240.44.156/caregivers/15/rate");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Avaliações de " + arg2));
            WebElement searchbox = driver.findElement(By.id("searchbox"));
            searchbox.clear();
            searchbox.sendKeys(arg1);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='evaluations']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//table[@id='evaluations']/tbody/tr/td[6]/div/div/a"));
            webElement.click();
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("h2"),"Avaliação: " + arg1));
        } else if (arg0.equals("edit")) {
            if (arg1.equals("Test Answer Quiz Caregiver")) {
                driver.get("http://35.240.44.156/evaluations/87");
                wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Avaliação: " + arg1));
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(4).getText().split(" ");
                Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
                this.millsDetails = date.getTime();
            } else if (arg1.equals("Test New Evaluation Caregiver")) {
                driver.get("http://35.240.44.156/evaluations/88");
                wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Avaliação: " + arg1));
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(5).getText().split(" ");
                Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
                this.millsDetails = date.getTime();
            } else if (arg1.equals("Test Provide Quiz Caregiver")) {
                driver.get("http://35.240.44.156/evaluations/89");
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

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\" evaluation - USeight$")
    public void iShouldBeRedirectedToThePageOfTheEvaluationUSeight(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("h2"),"Avaliação: " + arg1));
        } else if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
            assertEquals(arg1, driver.findElement(By.id("inputDescription")).getAttribute("value"));
        }
    }

    @When("^I press the evaluations button on the \"([^\"]*)\" material on the materials table$")
    public void iPressTheEvaluationsButtonOnTheMaterialOnTheMaterialsTable(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg0));
        WebElement webElement = driver.findElement(By.xpath("//div[2]/a"));
        webElement.click();
    }

    @Then("^a table with a title that contains \"([^\"]*)\" should be displayed$")
    public void aTableWithATitleThatContainsShouldBeDisplayed(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.className("my-caregivers-legend"), arg0));
    }

    @Given("^I access the evaluations page of the \"([^\"]*)\" material of the \"([^\"]*)\" caregiver$")
    public void iAccessTheEvaluationsPageOfTheMaterialOfTheCaregiver(String arg0, String arg1) throws Throwable {
        driver.get("http://35.240.44.156/caregivers/91/materials/87/rate");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Avaliações do Material " + arg0));
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\" material$")
    public void iShouldBeRedirectedToThePageOfTheMaterial(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("provide quiz")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Material: " + arg1));
        } else if (arg0.equals("evaluations")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Avaliações do Material " + arg1));
        }
    }

    @Given("^I access the \"([^\"]*)\" page on the evaluations page on the \"([^\"]*)\" material of the \"([^\"]*)\" caregiver$")
    public void iAccessThePageOnTheEvaluationsPageOnTheMaterialOfTheCaregiver(String arg0, String arg1, String arg2) throws Throwable {
        if (arg0.equals("provide quiz")) {
            driver.get("http://35.240.44.156/caregivers/91/materials/87/evaluations/create");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Material: " + arg1));
        }
    }

    @Given("^I access the \"([^\"]*)\" page of the \"([^\"]*)\" evaluation of the \"([^\"]*)\" material of the \"([^\"]*)\" caregiver$")
    public void iAccessThePageOfTheEvaluationOfTheMaterialOfTheCaregiver(String arg0, String arg1, String arg2, String arg3) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            driver.get("http://35.240.44.156/evaluations/90");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Avaliação: " + arg1));
        } else if (arg0.equals("edit")) {
            driver.get("http://35.240.44.156/evaluations/91");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Avaliação: " + arg1));
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(4).getText().split(" ");
            Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
            this.millsDetails = date.getTime();
            WebElement webElement = driver.findElement(By.xpath("//div[2]/div/div/a"));
            webElement.click();
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Avaliação"));
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputDescription")), arg1));
        }
    }

    @When("^the \"([^\"]*)\" field is empty - USeight$")
    public void theFieldIsEmptyUSeight(String arg0) throws Throwable {
        if (arg0.equals("username")) {
            WebElement webElement = driver.findElement(By.id("inputUsername"));
            webElement.clear();
        } else if (arg0.equals("name")) {
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
        } else if (arg0.equals("location")) {
            WebElement webElement = driver.findElement(By.id("inputLocation"));
            webElement.clear();
        } else if (arg0.equals("experiencePeriod")) {
            Select select = new Select(driver.findElement(By.xpath("//select[@id='" + arg0 + "']")));
            select.selectByVisibleText("Selecione um período de tempo");
        } else if (arg0.equals("password")) {
            WebElement webElement = driver.findElement(By.id("inputPassword"));
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

    @Then("^the \"([^\"]*)\" error message should be shown - USeight$")
    public void theErrorMessageShouldBeShownUSeight(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("alert")), arg0));
    }


}
