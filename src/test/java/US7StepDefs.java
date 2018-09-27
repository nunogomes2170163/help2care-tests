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
import org.openqa.selenium.support.events.WebDriverEventListener;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertTrue;

public class US7StepDefs {
    private WebDriver driver;
    private int newQuizId;
    private int random;
    private String firstEntry;
    private String secondEntry;
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

    @Given("^I access the quizs dashboard$")
    public void iAccessTheQuestionsDashboard() throws Throwable {
        driver.get("http://35.240.44.156/quizs");
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("dashboard")),"Questionários"));
    }

    @When("^I press the \"([^\"]*)\" button - USseven$")
    public void iPressTheButtonUSseven(String arg0) throws Throwable {
        WebElement webElement = null;
        if (arg0.equals("new quiz")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div[2]/div/a"));
        } else if (arg0.equals("create")) {
            webElement = driver.findElement(By.xpath("//button[@name='save']"));
        } else if (arg0.equals("conclude")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/p/a"));
        } else if (arg0.equals("edit")) {
            webElement = driver.findElement(By.xpath("//div[2]/div/div/a"));
        } else if (arg0.equals("save")) {
            webElement = driver.findElement(By.xpath("//button[@name='save']"));
        } else if (arg0.equals("block")) {
            webElement = driver.findElement(By.xpath("//button[@name='block']"));
        } else if (arg0.equals("unblock")) {
            webElement = driver.findElement(By.xpath("//button[@name='unblock']"));
        } else if (arg0.equals("questions")) {
            webElement = driver.findElement(By.xpath("//div[@id='dashboard']/div/div[2]/div/div[2]/div[2]/div/a"));
        }

        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page - USseven$")
    public void iShouldBeRedirectedToThePageUSseven(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("new question")) {
            assertEquals("http://35.240.44.156/quizs/create", driver.getCurrentUrl());
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Questionário"));
        } else if (arg0.equals("questions associate")) {
            String[] urlSplit = driver.getCurrentUrl().split("/");
            this.newQuizId = Integer.parseInt(urlSplit[4]);
            assertEquals("http://35.240.44.156/quizs/" + this.newQuizId + "/questions", driver.getCurrentUrl());
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(0),"Outras Questões"));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(1),"Questões Associadas ao Questionário"));
        }
    }

    @And("^the \"([^\"]*)\" text should be shown - USseven$")
    public void theTextShouldBeShownUSseven(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), arg0));
    }

    @Given("^I access the \"([^\"]*)\" page - USseven$")
    public void iAccessThePageUSseven(String arg0) throws Throwable {
        if (arg0.equals("new quiz")) {
            driver.get("http://35.240.44.156/quizs/create");
        } else if (arg0.equals("edit quiz")) {
            driver.get("http://35.240.44.156/quizs/26/edit");
        } else if (arg0.equals("quizs")) {
            driver.get("http://35.240.44.156/quizs");
        } else if (arg0.equals("questions associate")) {
            driver.get("http://35.240.44.156/quizs/30/questions");
        }
    }

    @When("^I fill the \"([^\"]*)\" field with \"([^\"]*)\" - USseven$")
    public void iFillTheFieldWithUSseven(String arg0, String arg1) throws Throwable {
        if (arg0.equals("name")) {
            WebElement field = driver.findElement(By.id("inputName"));
            Random rand = new Random();
            this.random = rand.nextInt(9000000) + 1000000;
            field.clear();
            field.sendKeys(arg1 + this.random);
        } else if (arg0.equals("name error")) {
            WebElement field = driver.findElement(By.id("inputName"));
            field.clear();
            field.sendKeys(arg1);
        }
    }

    @And("^the \"([^\"]*)\" table should be present$")
    public void theTableShouldBePresent(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("other questions")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(0),"Outras Questões"));
            assertTrue(driver.findElements(By.xpath("//table[@id='questions']/tbody/tr")).size() > 0);
        } else if (arg0.equals("quiz questions")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(1),"Questões Associadas ao Questionário"));
        } else if (arg0.equals("quiz questions filled")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(1),"Questões Associadas ao Questionário"));
            assertTrue(driver.findElements(By.xpath("//table[@id='quizQuestions']/tbody/tr")).size() > 0);
        }
    }

    @And("^the other questions table have more than 2 entries$")
    public void theTableHaveMoreThanEntries() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Outras Questões"));
        assertTrue(driver.findElements(By.xpath("//table[@id='questions']/tbody/tr")).size() > 2);
    }

    @When("^I press add button of the first row of the other questions table twice$")
    public void iPressAddButtonOfTheFirstRowOfTheOtherQuestionsTableTwice() throws Throwable {
        WebElement webElement = driver.findElement(By.xpath("//table[@id='questions']/tbody/tr/td[2]/form/button"));
        webElement.click();
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='questions']/tbody/tr/td")),"(Apoiar no andar) - Sinto-me capaz de identificar a integridade dos equipamentos auxiliares da marcha?"));
        webElement = driver.findElement(By.xpath("//table[@id='questions']/tbody/tr/td[2]/form/button"));
        webElement.click();
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='questions']/tbody/tr/td")),"(Apoiar no andar) - Sinto-me capaz de identificar o calçado adequado?"));
    }

    @Then("^the quiz questions table should have 2 entries$")
    public void theQuizQuestionsTableShouldHaveEntries() throws Throwable {
        assertTrue(driver.findElements(By.xpath("//table[@id='quizQuestions']/tbody/tr")).size() == 2);
    }

    @And("^the \"([^\"]*)\" entry of the quiz questions table should contain the text \"([^\"]*)\"$")
    public void theEntryOfTheQuizQuestionsTableShouldContainTheText(String arg0, String arg1) throws Throwable {
        if (arg0.equals("first")) {
            assertEquals(arg1, driver.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[2]")).getText());
        } else if (arg0.equals("second")) {
            assertEquals(arg1, driver.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[2]")).getText());
        }
    }

    @And("^the \"([^\"]*)\" entry of the quiz questions table should display \"([^\"]*)\" button$")
    public void theEntryOfTheQuizQuestionsTableShouldDisplayButton(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("first")) {
            if (arg1.equals("down")) {
                wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[3]/div/div[2]/form/div/button")));
            } else if (arg1.equals("remove")) {
                wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[3]/div/div[3]/form/div/button")));
            }
        } else if (arg0.equals("second")) {
            if (arg1.equals("up")) {
                wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[3]/div/div/form/div/button")));
            } else if (arg1.equals("remove")) {
                wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[3]/div/div[3]/form/div/button")));
            }
        }
    }

    @And("^the quiz questions table have 2 entries$")
    public void theQuizQuestionsTableHaveEntries() throws Throwable {
        assertTrue(driver.findElements(By.xpath("//table[@id='quizQuestions']/tbody/tr")).size() == 2);
    }

    @When("^I press the \"([^\"]*)\" button of the first entry of the quiz questions table$")
    public void iPressTheButtonOfTheFirstEntryOfTheQuizQuestionsTable(String arg0) throws Throwable {
        if (arg0.equals("down")) {
            this.firstEntry = driver.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[2]")).getText();
            this.secondEntry = driver.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[2]")).getText();
            WebElement webElement = driver.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[3]/div/div[2]/form/div/button"));
            webElement.click();
        } else if (arg0.equals("remove")) {
            this.secondEntry = driver.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[2]")).getText();
            WebElement webElement = driver.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[3]/div/div[3]/form/div/button"));
            webElement.click();
        }
    }

    @Then("^the new \"([^\"]*)\" entry of the quiz questions table should be the \"([^\"]*)\" entry$")
    public void theNewEntryOfTheQuizQuestionsTableShouldBeTheEntry(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("first") && arg1.equals("second")) {
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[2]"), this.secondEntry));
        } else if (arg0.equals("second") && arg1.equals("first")) {
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[2]"), this.firstEntry));
        }
    }

    @When("^I press the \"([^\"]*)\" button of the second entry of the quiz questions table$")
    public void iPressTheButtonOfTheSecondEntryOfTheQuizQuestionsTable(String arg0) throws Throwable {
        this.firstEntry = driver.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[2]")).getText();
        this.secondEntry = driver.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[2]")).getText();
        WebElement webElement = driver.findElement(By.xpath("//table[@id='quizQuestions']/tbody/tr[2]/td[3]/div/div/form/div/button"));
        webElement.click();
    }

    @Then("^the quiz questions table should have 1 entry$")
    public void theQuizQuestionsTableShouldHaveEntry() throws Throwable {
        assertTrue(driver.findElements(By.xpath("//table[@id='quizQuestions']/tbody/tr")).size() == 1);
    }

    @And("^the new first entry of the quiz questions table should contain the text of the previous second entry$")
    public void theNewFirstEntryOfTheQuizQuestionsTableShouldContainTheTextOfThePreviousSecondEntry() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.xpath("//table[@id='quizQuestions']/tbody/tr/td[2]"), this.secondEntry));
    }

    @Then("^I should be redirected to the details page of the quiz$")
    public void iShouldBeRedirectedToThePageOfTheQuiz() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        assertEquals("http://35.240.44.156/quizs/30", driver.getCurrentUrl());
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("h2"), "Questionário"));
    }

    @And("^the field \"([^\"]*)\" should show \"([^\"]*)\" - USseven$")
    public void theFieldShouldShowUSseven(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("quiz")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Questionário: " + arg1));
        }
    }

    @And("^a table with the title \"([^\"]*)\" should be displayed$")
    public void aTableWithTheTitleShouldBeDisplayed(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")), arg0));
    }

    @And("^the questions associated table should have at least 1 entry$")
    public void theQuestionsAssociatedTableShouldHaveAtLeastEntry() throws Throwable {
        assertTrue(driver.findElements(By.xpath("//table[@id='questionsAssociated']/tbody/tr")).size() >= 1);
    }

    @And("^the \"([^\"]*)\" button should be present - USseven$")
    public void theButtonShouldBePresentUSseven(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Editar')]")));
        } else if (arg0.equals("questions")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='dashboard']/div/div[2]/div/div[2]/div[2]/div/a")));
        } else if (arg0.equals("back")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Voltar Atrás')]")));
        } else if (arg0.equals("save")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='save']")));
        } else if (arg0.equals("conclude")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Concluído')]")));
        } else if (arg0.equals("cancel")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Cancelar')]")));
        } else if (arg0.equals("block")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='block']")));
        } else if (arg0.equals("unblock")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='unblock']")));
        }
    }

    @When("^I press the details button of the \"([^\"]*)\" quiz$")
    public void iPressTheDetailsButtonOfTheQuiz(String arg0) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='quizs']/tbody/tr/td")), arg0));
        WebElement webElement = driver.findElement(By.xpath("//td[3]/div/div/a"));
        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\" quiz$")
    public void iShouldBeRedirectedToThePageOfQuiz(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Questionário: " + arg1));
        } else if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Questionário"));
            assertEquals(arg1, driver.findElement(By.id("inputName")).getAttribute("value"));
        }
    }

    @And("^the \"([^\"]*)\" question should be present in the questions associated table - USseven$")
    public void theQuestionShouldBePresentInTheQuestionsAssociatedTableUSseven(String arg0) throws Throwable {
        int count = 0;
        List<WebElement> webElements = driver.findElements(By.xpath("//table[@id='questionsAssociated']/tbody/tr/td[2]"));
        for (WebElement webElement: webElements) {
            if (webElement.getText().equals(arg0)) {
                count++;
            }
        }
        assertTrue(count == 1);
    }

    @Given("^I access the \"([^\"]*)\" page of the \"([^\"]*)\" quiz$")
    public void iAccessThePageOfTheQuiz(String arg0, String arg1) throws Throwable {
        if (arg0.equals("details")) {
            driver.get("http://35.240.44.156/quizs/20");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")),"Questionário: " + arg1));
            assertTrue(driver.findElements(By.tagName("h4")).size() == 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")), "Questões Associadas"));
        } else if (arg0.equals("edit")) {
            driver.get("http://35.240.44.156/quizs/16");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")),"Questionário: " + arg1));
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(2).getText().split(" ");
            Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
            this.millsDetails = date.getTime();
            WebElement webElement = driver.findElement(By.xpath("//div[2]/div/div/a"));
            webElement.click();
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Questionário"));
        }
    }

    @And("^the field \"([^\"]*)\" should different from the previous - USseven$")
    public void theFieldShouldDifferentFromThePreviousUSseven(String arg0) throws Throwable {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String[] lastUpdateString = driver.findElements(By.tagName("h4")).get(2).getText().split(" ");
        Date date = sdf.parse(lastUpdateString[4] + " " + lastUpdateString[5]);
        long millsNew = date.getTime();
        assertTrue(millsNew > this.millsDetails);
    }

    @And("^should be present a \"([^\"]*)\" log at the beggining of the logs section - USseven$")
    public void shouldBePresentALogAtTheBegginingOfTheLogsSectionUSseven(String arg0) throws Throwable {
        String lastLog = driver.findElements(By.xpath("//table[@id='logs']/tbody/tr")).get(0).findElement(By.xpath(".//td")).getText();
        assertEquals(arg0, lastLog);
    }

    @Then("^I should be redirected to the quiz questions page of the quiz$")
    public void iShouldBeRedirectedToTheQuizQuestionsPageOfTheQuiz() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        assertEquals("http://35.240.44.156/quizs/20/questions", driver.getCurrentUrl());
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(0),"Outras Questões"));
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(1),"Questões Associadas ao Questionário Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se"));
    }

    @And("^the quiz is blocked$")
    public void theQuizIsBlocked() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='unblock']")));
    }

    @When("^the \"([^\"]*)\" field is empty - USseven$")
    public void theFieldIsEmptyUSseven(String arg0) throws Throwable {
        if (arg0.equals("name")) {
            WebElement webElement = driver.findElement(By.id("inputName"));
            webElement.clear();
        }
    }

    @Then("^the \"([^\"]*)\" error message should be shown - USseven$")
    public void theErrorMessageShouldBeShownUSseven(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("alert")), arg0));
    }
}
