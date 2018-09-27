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
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertTrue;

public class US11StepDefs {
    private WebDriver driver1;
    private WebDriver driver2;
    private int random;
    private int randomEval;
    private long millsDetails;

    @Before
    public void setUp() {
        System.setProperty("phantomjs.binary.path",
                "drivers\\phantomjs.exe");
        driver1 = new PhantomJSDriver();
        driver2 = new PhantomJSDriver();

        driver1.get("http://35.240.44.156/");
        WebElement username1 = (new WebDriverWait(driver1, 3))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("username")));
        WebElement password1 = (new WebDriverWait(driver1, 3))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("password")));
        username1.clear();
        password1.clear();
        username1.sendKeys("healthcarePro");
        password1.sendKeys("propw");
        WebElement webElement1 = driver1.findElement(By.xpath("//button[@type='submit']"));
        webElement1.click();

        driver2.get("http://35.240.44.156/");
        WebElement username2 = (new WebDriverWait(driver2, 3))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("username")));
        WebElement password2 = (new WebDriverWait(driver2, 3))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("password")));
        username2.clear();
        password2.clear();
        username2.sendKeys("healthcarePro");
        password2.sendKeys("propw");
        WebElement webElement2 = driver2.findElement(By.xpath("//button[@type='submit']"));
        webElement2.click();
    }

    @After
    public void tearDown() {
        driver1.quit();
        driver2.quit();
    }

    @Given("^I access the healthcare profissional dashboard in two sessions$")
    public void iAccessThePatientsDashboard() throws Throwable {
        driver1.get("http://35.240.44.156");
        WebDriverWait wait1 = new WebDriverWait(driver1, 3);
        wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("my-caregivers-legend")),"Os meus Cuidadores"));

        driver2.get("http://35.240.44.156");
        WebDriverWait wait2 = new WebDriverWait(driver2, 3);
        wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("my-caregivers-legend")),"Os meus Cuidadores"));
    }

    @When("^I \"([^\"]*)\" the \"([^\"]*)\" caregiver in the session (\\d+)$")
    public void iAssociateTheCaregiverInTheSession(String arg0, String arg1, int arg2) throws Throwable {
        if (arg0.equals("associate")) {
            if (arg2 == 1) {
                WebElement searchbox = driver1.findElement(By.id("searchboxO"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver1, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.xpath("//table[@id='otherCaregivers']/tbody/tr/td")), arg1));
                WebElement webElement = driver1.findElement(By.xpath("//button[@name='associate']"));
                webElement.click();
            } else if (arg2 == 2) {
                WebElement searchbox = driver2.findElement(By.id("searchboxO"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver2, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.xpath("//table[@id='otherCaregivers']/tbody/tr/td")), arg1));
                WebElement webElement = driver2.findElement(By.xpath("//button[@name='associate']"));
                webElement.click();
            }
        } else if (arg0.equals("disassociate")) {
            if (arg2 == 1) {
                WebElement searchbox = driver1.findElement(By.id("searchbox"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver1, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.xpath("//table[@id='caregivers']/tbody/tr/td")), arg1));
                WebElement webElement = driver1.findElement(By.xpath("//button[@name='diassociate']"));
                webElement.click();
            } else if (arg2 == 2) {
                WebElement searchbox = driver2.findElement(By.id("searchbox"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver2, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.xpath("//table[@id='caregivers']/tbody/tr/td")), arg1));
                WebElement webElement = driver2.findElement(By.xpath("//button[@name='diassociate']"));
                webElement.click();
            }
        }
    }

    @Then("^the \"([^\"]*)\" error message should be shown on session (\\d+)$")
    public void theErrorMessageShouldBeShownOnSession(String arg0, int arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver2, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("alert-warning")), arg0));
    }

    @Given("^I access the \"([^\"]*)\" page in two different sessions$")
    public void iAccessThePageInTwoDifferentSessions(String arg0) throws Throwable {
        if (arg0.equals("caregiver patients association")) {
            driver1.get("http://35.240.44.156/caregivers/15/patients");
            WebDriverWait wait1 = new WebDriverWait(driver1, 3);
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("my-caregivers-legend")),"Utentes de Caregiver"));
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("others-caregivers-legend")),"Utentes Sem Cuidador"));

            driver2.get("http://35.240.44.156/caregivers/15/patients");
            WebDriverWait wait2 = new WebDriverWait(driver2, 3);
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("my-caregivers-legend")),"Utentes de Caregiver"));
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("others-caregivers-legend")),"Utentes Sem Cuidador"));
        } else if (arg0.equals("patient needs association")) {
            driver1.get("http://35.240.44.156/patients/15/needs");
            WebDriverWait wait1 = new WebDriverWait(driver1, 3);
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("my-caregivers-legend")),"Necessidades de Beatriz Martins"));
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("others-caregivers-legend")),"Outras Necessidades"));

            driver2.get("http://35.240.44.156/patients/15/needs");
            WebDriverWait wait2 = new WebDriverWait(driver2, 3);
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("my-caregivers-legend")),"Necessidades de Beatriz Martins"));
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("others-caregivers-legend")),"Outras Necessidades"));
        } else if (arg0.equals("caregiver materials association")) {
            driver1.get("http://35.240.44.156/caregivers/91/materials");
            WebDriverWait wait1 = new WebDriverWait(driver1, 3);
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("my-caregivers-legend")),"Materiais de Helena Carvalho"));
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("others-caregivers-legend")),"Associar Materiais"));

            driver2.get("http://35.240.44.156/caregivers/91/materials");
            WebDriverWait wait2 = new WebDriverWait(driver2, 3);
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("my-caregivers-legend")),"Materiais de Helena Carvalho"));
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("others-caregivers-legend")),"Associar Materiais"));
        } else if (arg0.equals("need materials association")) {
            driver1.get("http://35.240.44.156/needs/12/materials");
            WebDriverWait wait1 = new WebDriverWait(driver1, 3);
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("my-caregivers-legend")),"Materiais de Transferências"));

            driver2.get("http://35.240.44.156/needs/12/materials");
            WebDriverWait wait2 = new WebDriverWait(driver2, 3);
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("my-caregivers-legend")),"Materiais de Transferências"));
        } else if (arg0.equals("caregiver evaluations")) {
            driver1.get("http://35.240.44.156/caregivers/15/rate");
            WebDriverWait wait1 = new WebDriverWait(driver1, 3);
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("my-caregivers-legend")),"Avaliações de Caregiver"));
            WebElement provideQuizBtn1 = driver1.findElement(By.xpath("//a[contains(text(),'Disponibilizar Questionário')]"));
            provideQuizBtn1.click();
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Cuidador: Caregiver"));

            driver2.get("http://35.240.44.156/caregivers/15/rate");
            WebDriverWait wait2 = new WebDriverWait(driver2, 3);
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("my-caregivers-legend")),"Avaliações de Caregiver"));
            WebElement provideQuizBtn2 = driver2.findElement(By.xpath("//a[contains(text(),'Disponibilizar Questionário')]"));
            provideQuizBtn2.click();
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Cuidador: Caregiver"));
        } else if (arg0.equals("patient evaluations")) {
            driver1.get("http://35.240.44.156/patients/15");
            WebDriverWait wait1 = new WebDriverWait(driver1, 3);
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("others-caregivers-legend")),"Avaliações"));
            WebElement provideQuizBtn1 = driver1.findElement(By.xpath("//a[contains(text(),'Disponibilizar Questionário')]"));
            provideQuizBtn1.click();
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Utente: Beatriz Martins"));

            driver2.get("http://35.240.44.156/patients/15");
            WebDriverWait wait2 = new WebDriverWait(driver2, 3);
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("others-caregivers-legend")),"Avaliações"));
            WebElement provideQuizBtn2 = driver2.findElement(By.xpath("//a[contains(text(),'Disponibilizar Questionário')]"));
            provideQuizBtn2.click();
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Utente: Beatriz Martins"));
        } else if (arg0.equals("material evaluations")) {
            driver1.get("http://35.240.44.156/caregivers/15/materials/46/rate");
            WebDriverWait wait1 = new WebDriverWait(driver1, 3);
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("my-caregivers-legend")),"Avaliações do Material ELIMINAÇAO VESICAL - 2"));
            WebElement provideQuizBtn1 = driver1.findElement(By.xpath("//a[contains(text(),'Disponibilizar Questionário')]"));
            provideQuizBtn1.click();
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Material: ELIMINAÇAO VESICAL - 2"));

            driver2.get("http://35.240.44.156/caregivers/15/materials/46/rate");
            WebDriverWait wait2 = new WebDriverWait(driver2, 3);
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("my-caregivers-legend")),"Avaliações do Material ELIMINAÇAO VESICAL - 2"));
            WebElement provideQuizBtn2 = driver2.findElement(By.xpath("//a[contains(text(),'Disponibilizar Questionário')]"));
            provideQuizBtn2.click();
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("my-caregivers-legend")), "Disponibilizar Questionário para o Material: ELIMINAÇAO VESICAL - 2"));
        }
    }

    @When("^I \"([^\"]*)\" the \"([^\"]*)\" patient in the session (\\d+)$")
    public void iThePatientInTheSession(String arg0, String arg1, int arg2) throws Throwable {
        if (arg0.equals("associate")) {
            if (arg2 == 1) {
                WebElement searchbox = driver1.findElement(By.id("searchboxO"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver1, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.xpath("//table[@id='notMyPatients']/tbody/tr/td")), arg1));
                WebElement webElement = driver1.findElement(By.xpath("//button[@name='associate']"));
                webElement.click();
                wait.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("modal-title")), "Associar o utente Manuel Maria ao cuidador Caregiver"));
                Select select = new Select(driver1.findElement(By.xpath("//select[@id='inputKinshipDegree-31']")));
                select.selectByVisibleText("Nenhum");
                Select select1 = new Select(driver1.findElement(By.xpath("//select[@id='inputPreviouslyCared-31']")));
                select1.selectByVisibleText("Não");
                Select select2 = new Select(driver1.findElement(By.xpath("//select[@id='inputPreviouslyDependent-31']")));
                select2.selectByVisibleText("Não");
                WebElement webElement1 = driver1.findElement(By.xpath("//button[@id='associateBtn']"));
                webElement1.click();
            } else if (arg2 == 2) {
                WebElement searchbox = driver2.findElement(By.id("searchboxO"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver2, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.xpath("//table[@id='notMyPatients']/tbody/tr/td")), arg1));
                WebElement webElement = driver2.findElement(By.xpath("//button[@name='associate']"));
                webElement.click();
                wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("modal-title")), "Associar o utente Manuel Maria ao cuidador Caregiver"));
                Select select = new Select(driver2.findElement(By.xpath("//select[@id='inputKinshipDegree-31']")));
                select.selectByVisibleText("Nenhum");
                Select select1 = new Select(driver2.findElement(By.xpath("//select[@id='inputPreviouslyCared-31']")));
                select1.selectByVisibleText("Não");
                Select select2 = new Select(driver2.findElement(By.xpath("//select[@id='inputPreviouslyDependent-31']")));
                select2.selectByVisibleText("Não");
                WebElement webElement1 = driver2.findElement(By.xpath("//button[@id='associateBtn']"));
                webElement1.click();
            }
        } else if (arg0.equals("disassociate")) {
            if (arg2 == 1) {
                WebElement searchbox = driver1.findElement(By.id("searchbox"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver1, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.xpath("//table[@id='myPatients']/tbody/tr/td")), arg1));
                WebElement webElement = driver1.findElement(By.xpath("//button[@name='diassociate']"));
                webElement.click();
            } else if (arg2 == 2) {
                WebElement searchbox = driver2.findElement(By.id("searchbox"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver2, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.xpath("//table[@id='myPatients']/tbody/tr/td")), arg1));
                WebElement webElement = driver2.findElement(By.xpath("//button[@name='diassociate']"));
                webElement.click();
            }
        }
    }

    @When("^I \"([^\"]*)\" the \"([^\"]*)\" need in the session (\\d+)$")
    public void iTheNeedInTheSession(String arg0, String arg1, int arg2) throws Throwable {
        if (arg0.equals("associate")) {
            if (arg2 == 1) {
                WebElement searchbox = driver1.findElement(By.id("searchboxO"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver1, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.xpath("//table[@id='notMyNeeds']/tbody/tr/td")), arg1));
                WebElement webElement = driver1.findElement(By.xpath("//button[@name='associate']"));
                webElement.click();
            } else if (arg2 == 2) {
                WebElement searchbox = driver2.findElement(By.id("searchboxO"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver2, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.xpath("//table[@id='notMyNeeds']/tbody/tr/td")), arg1));
                WebElement webElement = driver2.findElement(By.xpath("//button[@name='associate']"));
                webElement.click();
            }
        } else if (arg0.equals("disassociate")) {
            if (arg2 == 1) {
                WebElement searchbox = driver1.findElement(By.id("searchbox"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver1, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.xpath("//table[@id='myNeeds']/tbody/tr/td")), arg1));
                WebElement webElement = driver1.findElement(By.xpath("//button[@name='diassociate']"));
                webElement.click();
            } else if (arg2 == 2) {
                WebElement searchbox = driver2.findElement(By.id("searchbox"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver2, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.xpath("//table[@id='myNeeds']/tbody/tr/td")), arg1));
                WebElement webElement = driver2.findElement(By.xpath("//button[@name='diassociate']"));
                webElement.click();
            }
        }
    }

    @When("^I disassociate the \"([^\"]*)\" material in the session (\\d+)$")
    public void iTheMaterialInTheSession(String arg0, int arg1) throws Throwable {
        if (arg1 == 1) {
            WebElement searchbox = driver1.findElement(By.id("searchbox"));
            searchbox.clear();
            searchbox.sendKeys(arg0);
            WebDriverWait wait = new WebDriverWait(driver1, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg0));
            WebElement webElement = driver1.findElement(By.xpath("//button[@name='diassociate']"));
            webElement.click();
        } else if (arg1 == 2) {
            WebElement searchbox = driver2.findElement(By.id("searchbox"));
            searchbox.clear();
            searchbox.sendKeys(arg0);
            WebDriverWait wait = new WebDriverWait(driver2, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg0));
            WebElement webElement = driver2.findElement(By.xpath("//button[@name='diassociate']"));
            webElement.click();
        }
    }

    @When("^I provide the \"([^\"]*)\" quiz to \"([^\"]*)\" in the session (\\d+)$")
    public void iProvideTheQuizToInTheSession(String arg0, String arg1, int arg2) throws Throwable {
        if (arg1.equals("caregiver")) {
            if (arg2 == 1) {
                WebElement description = driver1.findElement(By.id("inputDescription"));
                description.clear();
                description.sendKeys("Test duplicate entries");
                WebElement model = driver1.findElement(By.id("inputType"));
                model.clear();
                model.sendKeys("Através da app");
                Select quiz = new Select(driver1.findElement(By.id("quiz")));
                quiz.selectByVisibleText(arg0);
                WebElement saveBtn = driver1.findElement(By.name("save"));
                saveBtn.click();
            } else if (arg2 == 2) {
                WebElement description = driver2.findElement(By.id("inputDescription"));
                description.clear();
                description.sendKeys("Test duplicate entries");
                WebElement model = driver2.findElement(By.id("inputType"));
                model.clear();
                model.sendKeys("Através da app");
                Select quiz = new Select(driver2.findElement(By.id("quiz")));
                quiz.selectByVisibleText(arg0);
                WebElement saveBtn = driver2.findElement(By.name("save"));
                saveBtn.click();
            }
        } else if (arg1.equals("patient")) {
            if (arg2 == 1) {
                WebElement description = driver1.findElement(By.id("inputDescription"));
                description.clear();
                description.sendKeys("Test duplicate entries");
                WebElement model = driver1.findElement(By.id("inputType"));
                model.clear();
                model.sendKeys("Através da app");
                Select quiz = new Select(driver1.findElement(By.id("quiz")));
                quiz.selectByVisibleText(arg0);
                WebElement saveBtn = driver1.findElement(By.name("save"));
                saveBtn.click();
            } else if (arg2 == 2) {
                WebElement description = driver2.findElement(By.id("inputDescription"));
                description.clear();
                description.sendKeys("Test duplicate entries");
                WebElement model = driver2.findElement(By.id("inputType"));
                model.clear();
                model.sendKeys("Através da app");
                Select quiz = new Select(driver2.findElement(By.id("quiz")));
                quiz.selectByVisibleText(arg0);
                WebElement saveBtn = driver2.findElement(By.name("save"));
                saveBtn.click();
            }
        } else if (arg1.equals("material")) {
            if (arg2 == 1) {
                WebElement description = driver1.findElement(By.id("inputDescription"));
                description.clear();
                description.sendKeys("Test duplicate entries");
                WebElement model = driver1.findElement(By.id("inputType"));
                model.clear();
                model.sendKeys("Através da app");
                Select quiz = new Select(driver1.findElement(By.id("quiz")));
                quiz.selectByVisibleText(arg0);
                WebElement saveBtn = driver1.findElement(By.name("save"));
                saveBtn.click();
            } else if (arg2 == 2) {
                WebElement description = driver2.findElement(By.id("inputDescription"));
                description.clear();
                description.sendKeys("Test duplicate entries");
                WebElement model = driver2.findElement(By.id("inputType"));
                model.clear();
                model.sendKeys("Através da app");
                Select quiz = new Select(driver2.findElement(By.id("quiz")));
                quiz.selectByVisibleText(arg0);
                WebElement saveBtn = driver2.findElement(By.name("save"));
                saveBtn.click();
            }
        }
    }
}
