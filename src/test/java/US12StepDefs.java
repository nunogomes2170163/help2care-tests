import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
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
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertEquals;

public class US12StepDefs {
    private WebDriver driver1;
    private WebDriver driver2;

    @Before
    public void setUp() {
        System.setProperty("phantomjs.binary.path",
                "drivers/phantomjs");
        driver1 = new PhantomJSDriver();
        driver2 = new PhantomJSDriver();

        driver1.get("http://35.240.44.156/");
        WebElement username1 = (new WebDriverWait(driver1, 3))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("username")));
        WebElement password1 = (new WebDriverWait(driver1, 3))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("password")));
        username1.clear();
        password1.clear();
        username1.sendKeys("admin");
        password1.sendKeys("adminpw");
        WebElement webElement1 = driver1.findElement(By.xpath("//button[@type='submit']"));
        webElement1.click();

        driver2.get("http://35.240.44.156/");
        WebElement username2 = (new WebDriverWait(driver2, 3))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("username")));
        WebElement password2 = (new WebDriverWait(driver2, 3))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("password")));
        username2.clear();
        password2.clear();
        username2.sendKeys("admin");
        password2.sendKeys("adminpw");
        WebElement webElement2 = driver2.findElement(By.xpath("//button[@type='submit']"));
        webElement2.click();
    }

    @After
    public void tearDown() {
        driver1.quit();
        driver2.quit();
    }

    @Given("^I access the materials association page of the \"([^\"]*)\" composite material in two different sessions$")
    public void iAccessThePatientsDashboard(String arg0) throws Throwable {
        driver1.get("http://35.240.44.156/materials/56/materials");
        WebDriverWait wait1 = new WebDriverWait(driver1, 3);
        wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElements(By.className("my-caregivers-legend")).get(0),"Outros Materiais"));
        wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElements(By.className("my-caregivers-legend")).get(1),"Materiais Associados ao Material " + arg0));

        driver2.get("http://35.240.44.156/materials/56/materials");
        WebDriverWait wait2 = new WebDriverWait(driver2, 3);
        wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElements(By.className("my-caregivers-legend")).get(0),"Outros Materiais"));
        wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElements(By.className("my-caregivers-legend")).get(1),"Materiais Associados ao Material " + arg0));
    }

    @When("^I move \"([^\"]*)\" the \"([^\"]*)\" material in the session (\\d+)$")
    public void iMoveTheMaterialInTheSession(String arg0, String arg1, int arg2) throws Throwable {
        if (arg0.equals("up")) {
            if (arg2 == 1) {
                assertEquals(arg1, driver1.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[2]")).getText());
                WebElement upBtn = driver1.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[3]/div/div/form/button"));
                upBtn.click();
            } else if (arg2 == 2) {
                assertEquals(arg1, driver2.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[2]")).getText());
                WebElement upBtn = driver2.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[3]/div/div/form/button"));
                upBtn.click();
            }
        } else if (arg0.equals("down")) {
            if (arg2 == 1) {
                assertEquals(arg1, driver1.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[2]")).getText());
                WebElement downBtn = driver1.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[3]/div/div/form/button"));
                downBtn.click();
            } else if (arg2 == 2) {
                assertEquals(arg1, driver2.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[2]")).getText());
                WebElement downBtn = driver2.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[3]/div/div/form/button"));
                downBtn.click();
            }
        }
    }

    @Then("^the \"([^\"]*)\" error message should be shown on session (\\d+)$")
    public void theErrorMessageShouldBeShownOnSession(String arg0, int arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver2, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("alert-warning")), arg0));
    }

    @When("^I \"([^\"]*)\" the \"([^\"]*)\" material in the session (\\d+)$")
    public void iTheMaterialInTheSession(String arg0, String arg1, int arg2) throws Throwable {
        if (arg0.equals("add")) {
            if (arg2 == 1) {
                WebElement searchbox = driver1.findElement(By.id("searchbox"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver1, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg1));
                WebElement webElement = driver1.findElement(By.xpath("//button[@name='add']"));
                webElement.click();
            } else if (arg2 == 2) {
                WebElement searchbox = driver2.findElement(By.id("searchbox"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver2, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg1));
                WebElement webElement = driver2.findElement(By.xpath("//button[@name='add']"));
                webElement.click();
            }
        } else if (arg0.equals("remove")) {
            if (arg2 == 1) {
                assertEquals(arg1, driver1.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[12]/td[2]")).getText());
                WebElement removeBtn = driver1.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[12]/td[3]/div/div[3]/form/button"));
                removeBtn.click();
            } else if (arg2 == 2) {
                assertEquals(arg1, driver2.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[12]/td[2]")).getText());
                WebElement removeBtn = driver2.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[12]/td[3]/div/div[3]/form/button"));
                removeBtn.click();
            }
        }
    }

    @Given("^I access the questions association page of the \"([^\"]*)\" quiz in two different sessions$")
    public void iAccessTheQuestionsAssociationPageOfTheQuizInTwoDifferentSessions(String arg0) throws Throwable {
        driver1.get("http://35.240.44.156/quizs/18/questions");
        WebDriverWait wait1 = new WebDriverWait(driver1, 3);
        wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElements(By.className("my-caregivers-legend")).get(0),"Outras Questões"));
        wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElements(By.className("my-caregivers-legend")).get(1),"Questões Associadas ao Questionário " + arg0));

        driver2.get("http://35.240.44.156/quizs/18/questions");
        WebDriverWait wait2 = new WebDriverWait(driver2, 3);
        wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElements(By.className("my-caregivers-legend")).get(0),"Outras Questões"));
        wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElements(By.className("my-caregivers-legend")).get(1),"Questões Associadas ao Questionário " + arg0));
    }

    @When("^I move \"([^\"]*)\" the \"([^\"]*)\" question in the session (\\d+)$")
    public void iMoveTheQuestionInTheSession(String arg0, String arg1, int arg2) throws Throwable {
        if (arg0.equals("up")) {
            if (arg2 == 1) {
                assertEquals(arg1, driver1.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[2]")).getText());
                WebElement upBtn = driver1.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[3]/div/div/form/div/button"));
                upBtn.click();
            } else if (arg2 == 2) {
                assertEquals(arg1, driver2.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[2]")).getText());
                WebElement upBtn = driver2.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[3]/div/div/form/div/button"));
                upBtn.click();
            }
        } else if (arg0.equals("down")) {
            if (arg2 == 1) {
                assertEquals(arg1, driver1.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[2]")).getText());
                WebElement downBtn = driver1.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[3]/div/div/form/div/button"));
                downBtn.click();
            } else if (arg2 == 2) {
                assertEquals(arg1, driver2.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[2]")).getText());
                WebElement downBtn = driver2.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[3]/div/div/form/div/button"));
                downBtn.click();
            }
        }
    }

    @When("^I \"([^\"]*)\" the \"([^\"]*)\" question in the session (\\d+)$")
    public void iTheQuestionInTheSession(String arg0, String arg1, int arg2) throws Throwable {
        if (arg0.equals("add")) {
            if (arg2 == 1) {
                WebElement searchbox = driver1.findElement(By.id("searchbox"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver1, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.xpath("//table[@id='questions']/tbody/tr/td")), arg1));
                WebElement webElement = driver1.findElement(By.xpath("//button[@name='add']"));
                webElement.click();
            } else if (arg2 == 2) {
                WebElement searchbox = driver2.findElement(By.id("searchbox"));
                searchbox.clear();
                searchbox.sendKeys(arg1);
                WebDriverWait wait = new WebDriverWait(driver2, 3);
                wait.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.xpath("//table[@id='questions']/tbody/tr/td")), arg1));
                WebElement webElement = driver2.findElement(By.xpath("//button[@name='add']"));
                webElement.click();
            }
        } else if (arg0.equals("remove")) {
            if (arg2 == 1) {
                assertEquals(arg1, driver1.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[4]/td[2]")).getText());
                WebElement removeBtn = driver1.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[4]/td[3]/div/div[3]/form/div/button"));
                removeBtn.click();
            } else if (arg2 == 2) {
                assertEquals(arg1, driver2.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[4]/td[2]")).getText());
                WebElement removeBtn = driver2.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[4]/td[3]/div/div[3]/form/div/button"));
                removeBtn.click();
            }
        }
    }

    @Given("^I access the details page of the \"([^\"]*)\" \"([^\"]*)\" in two different sessions$")
    public void iAccessTheDetailsPageOfTheInTwoDifferentSessions(String arg0, String arg1) throws Throwable {
        if (arg1.equals("material")) {
            driver1.get("http://35.240.44.156/materials/91");
            WebDriverWait wait1 = new WebDriverWait(driver1, 3);
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.tagName("h2")),"Material: " + arg0));

            driver2.get("http://35.240.44.156/materials/91");
            WebDriverWait wait2 = new WebDriverWait(driver2, 3);
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.tagName("h2")),"Material: " + arg0));
        } else if (arg1.equals("need")) {
            driver1.get("http://35.240.44.156/needs/19");
            WebDriverWait wait1 = new WebDriverWait(driver1, 3);
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.tagName("h2")),"Necessidade: " + arg0));

            driver2.get("http://35.240.44.156/needs/19");
            WebDriverWait wait2 = new WebDriverWait(driver2, 3);
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.tagName("h2")),"Necessidade: " + arg0));
        }
    }

    @When("^I delete the \"([^\"]*)\" material in the session (\\d+)$")
    public void iDeleteTheMaterialInTheSession(String arg0, int arg1) throws Throwable {
        if (arg1 == 1) {
            assertEquals("Material: " + arg0, driver1.findElement(By.tagName("h2")).getText());
            WebElement deleteBtn = driver1.findElement(By.xpath("//button[@name='delete']"));
            deleteBtn.click();
            WebDriverWait wait1 = new WebDriverWait(driver1, 3);
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("modal-title")),"Confirmação"));
            WebElement deleteModalBtn = driver1.findElement(By.xpath("//button[@name='deleteModal']"));
            deleteModalBtn.click();
        } else if (arg1 == 2) {
            assertEquals("Material: " + arg0, driver2.findElement(By.tagName("h2")).getText());
            WebElement deleteBtn = driver2.findElement(By.xpath("//button[@name='delete']"));
            deleteBtn.click();
            WebDriverWait wait2 = new WebDriverWait(driver2, 3);
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("modal-title")),"Confirmação"));
            WebElement deleteModalBtn = driver2.findElement(By.xpath("//button[@name='deleteModal']"));
            deleteModalBtn.click();
        }
    }

    @When("^I delete the \"([^\"]*)\" need in the session (\\d+)$")
    public void iDeleteTheNeedInTheSession(String arg0, int arg1) throws Throwable {
        if (arg1 == 1) {
            assertEquals("Necessidade: " + arg0, driver1.findElement(By.tagName("h2")).getText());
            WebElement deleteBtn = driver1.findElement(By.xpath("//button[@name='delete']"));
            deleteBtn.click();
            WebDriverWait wait1 = new WebDriverWait(driver1, 3);
            wait1.until(ExpectedConditions.textToBePresentInElement(driver1.findElement(By.className("modal-title")),"Confirmação"));
            WebElement deleteModalBtn = driver1.findElement(By.xpath("//button[@name='deleteModal']"));
            deleteModalBtn.click();
        } else if (arg1 == 2) {
            assertEquals("Necessidade: " + arg0, driver2.findElement(By.tagName("h2")).getText());
            WebElement deleteBtn = driver2.findElement(By.xpath("//button[@name='delete']"));
            deleteBtn.click();
            WebDriverWait wait2 = new WebDriverWait(driver2, 3);
            wait2.until(ExpectedConditions.textToBePresentInElement(driver2.findElement(By.className("modal-title")),"Confirmação"));
            WebElement deleteModalBtn = driver2.findElement(By.xpath("//button[@name='deleteModal']"));
            deleteModalBtn.click();
        }
    }
}
