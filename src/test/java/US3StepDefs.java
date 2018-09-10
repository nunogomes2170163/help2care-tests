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
import org.openqa.selenium.support.ui.Select;

import java.util.Random;

import static org.junit.Assert.assertEquals;

public class US3StepDefs {
    private WebDriver driver;
    private int random;
    private String newName, newEmail, newJob, newFacility, newLocation;

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
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputLocation")),""));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("experienceNumber")),"0"));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("experiencePeriod")),"Selecione um período de tempo"));
        }
    }

    @Given("^I access the \"([^\"]*)\" page$")
    public void iAccessThePage(String arg0) throws Throwable {
        if (arg0.equals("new admin")) {
            driver.get("http://35.240.44.156/users/create/admin");
        } else if (arg0.equals("new healthcare professional")) {
            driver.get("http://35.240.44.156/users/create/healthcarepro");
        } else if (arg0.equals("new caregiver")) {
            driver.get("http://35.240.44.156/users/create/caregiver");
        } else if (arg0.equals("edit healthcare professional")) {
            driver.get("http://35.240.44.156/users/25/edit");
        } else if (arg0.equals("edit admin")) {
            driver.get("http://35.240.44.156/users/102/edit");
        } else if (arg0.equals("edit caregiver")) {
            driver.get("http://35.240.44.156/users/71/edit");
        }
    }

    @When("^I fill the \"([^\"]*)\" field with \"([^\"]*)\" - USthree$")
    public void iFillTheFieldWithUSthree(String arg0, String arg1) throws Throwable {
        WebElement field = null;
        Select select = null;
        Random rand = new Random();
        if (arg0.equals("username")) {
            if (!arg1.equals("non") && !arg1.equals("admin")) {
                this.random = rand.nextInt(9000000) + 1000000;
                arg1 = arg1 + this.random;
            }
            field = driver.findElement(By.id("inputUsername"));
        } else if (arg0.equals("name")) {
            if (!arg1.equals("non")) {
                arg1 = arg1 + this.random;
            }
            field = driver.findElement(By.id("inputName"));
        } else if (arg0.equals("email")) {
            if (!arg1.equals("non") && !arg1.equals("zecoroados@gmail.com")) {
                arg1 = new StringBuilder(arg1).insert(arg1.length() - 10, this.random).toString();
            }
            field = driver.findElement(By.id("inputEmail"));
        } else if (arg0.equals("password")) {
            field = driver.findElement(By.id("inputPassword"));
        } else if (arg0.equals("password_confirmation")) {
            field = driver.findElement(By.id("inputPasswordConfirmation"));
        } else if (arg0.equals("job")) {
            field = driver.findElement(By.id("inputJob"));
        } else if (arg0.equals("facility")) {
            field = driver.findElement(By.id("inputFacility"));
        } else if (arg0.equals("birthDate")) {
            field = driver.findElement(By.id("inputBirthDate"));
        } else if (arg0.equals("location")) {
            field = driver.findElement(By.id("inputLocation"));
        } else if (arg0.equals("gender")) {
            select =  new Select(driver.findElement(By.name("gender")));
        } else if (arg0.equals("experienceNumber")) {
            select =  new Select(driver.findElement(By.name("experienceNumber")));
        } else if (arg0.equals("experiencePeriod")) {
            select =  new Select(driver.findElement(By.name("experiencePeriod")));
        }

        if (select != null) {
            select.selectByVisibleText(String.valueOf(arg1));
        } else {
            field.clear();
            field.sendKeys(arg1);
        }
    }

    @And("^I press the \"([^\"]*)\" button - USthree$")
    public void iPressTheButtonUSthree(String arg0) throws Throwable {
        WebElement webElement = null;
        if (arg0.equals("Criar")) {
            webElement = driver.findElement(By.xpath("//button[@name='save']"));
        } else if (arg0.equals("Editar")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Editar')]"));
        } else  {
            webElement = driver.findElement(By.xpath("//button[@name='save']"));
        }
        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" dashboard - USthree$")
    public void iShouldBeRedirectedToTheDashboardUSthree(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Utilizadores"));
    }

    @And("^the \"([^\"]*)\" user should be present in the \"([^\"]*)\" table$")
    public void theUserShouldBePresentInTheTable(String arg0, String arg1) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0 + this.random);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='users']/tbody/tr/td")), arg0 + this.random));
    }

    @When("^I press the \"([^\"]*)\" button of the \"([^\"]*)\" user$")
    public void iPressTheButtonOfTheUser(String arg0, String arg1) throws Throwable {
        WebElement searchbox  = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg1);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("Detalhes")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='users']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//table[@id='users']/tbody/tr/td[4]/div/div/a"));
            webElement.click();
        } else if (arg0.equals("Bloquear")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='users']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//table[@id='users']/tbody/tr/td[4]/div/div[2]/form/button"));
            webElement.click();
        } else if (arg0.equals("Desbloquear")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='users']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//table[@id='users']/tbody/tr/td[4]/div/div[2]/form/button"));
            webElement.click();
        }

    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of \"([^\"]*)\" user$")
    public void iShouldBeRedirectedToThePageOfUser(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h4")), "Nome: " + arg1));
    }

    @And("^the field \"([^\"]*)\" should show \"([^\"]*)\"$")
    public void theFieldShouldShow(String arg0, String arg1) throws Throwable {
        if (arg0.equals("utilizador")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Utilizador: " + arg1);
        } else if (arg0.equals("nome")){
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Nome: " + arg1);
        } else if (arg0.equals("email")){
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Email: " + arg1);
        } else if (arg0.equals("função")){
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Função: " + arg1);
        } else if (arg0.equals("created_at")){
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Data da criação: " + arg1);
        } else if (arg0.equals("job")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Trabalho/Estatuto: " + arg1);
        } else if (arg0.equals("facility")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Local de Trabalho: " + arg1);
        } else if (arg0.equals("birthDate")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Data de Nascimento: " + arg1);
        } else if (arg0.equals("gender")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Género: " + arg1);
        } else if (arg0.equals("experienceTime")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Tempo de experiência como cuidador: " + arg1);
        } else if (arg0.equals("healthcareProsCount")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Nº Profissionais de Saúde: " + arg1);
        }  else if (arg0.equals("created_by")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Criador: " + arg1);
        }
    }

    @And("^the \"([^\"]*)\" button should be present$")
    public void theButtonShouldBePresent(String arg0) throws Throwable {
        if (arg0.equals("edit")) {
            ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Editar')]"));
        } else if (arg0.equals("block")) {
            ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Bloquear')]"));
        } else if (arg0.equals("back")) {
            ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Voltar Atrás')]"));
        } else if (arg0.equals("save")) {
            ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@name='save']"));
        } else if (arg0.equals("cancel")) {
            ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Cancelar')]"));
        }
    }

    @And("^the \"([^\"]*)\" button should be present in the \"([^\"]*)\" user options$")
    public void theButtonShouldBePresentInTheUserOptions(String arg0, String arg1) throws Throwable {
        if (arg0.equals("Desbloquear")) {
            checkIfBlockOrUnblock(true, arg1);
        } else {
            checkIfBlockOrUnblock(false, arg1);
        }
    }

    @And("^the \"([^\"]*)\" user is blocked$")
    public void theUserIsBlocked(String arg0) throws Throwable {
        checkIfBlockOrUnblock(true,arg0);
    }

    public void checkIfBlockOrUnblock(boolean isBlock, String user) {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(user);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='users']/tbody/tr/td")), user));
        if (isBlock) {
            String optionText = driver.findElement(By.xpath("//button[@name='unblock']")).getText();
            assertEquals(optionText, "Desbloquear");
        } else {
            String optionText = driver.findElement(By.xpath("//button[@name='block']")).getText();
            assertEquals(optionText, "Bloquear");
        }
    }

    @Given("^I access the \"([^\"]*)\" page of the Cucumber \"([^\"]*)\"$")
    public void iAccessThePageOfTheCucumber(String arg0, String arg1) throws Throwable {
        if (arg0.equals("details") && arg1.equals("admin")){
            driver.get("http://35.240.44.156/users/13");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Utilizador: admin"));
        } else if (arg0.equals("edit") && arg1.equals("admin")) {
            driver.get("http://35.240.44.156/users/104/edit");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Administrador cucumber"));
        } else if (arg0.equals("details") && arg1.equals("healthcare professional")) {
            driver.get("http://35.240.44.156/users/94");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Utilizador: alexandra.teixeira"));
        } else if (arg0.equals("edit") && arg1.equals("healthcare professional")) {
            driver.get("http://35.240.44.156/users/46/edit");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Profissional de Saúde ana.margarida.carvalho"));
        } else if (arg0.equals("details") && arg1.equals("caregiver")) {
            driver.get("http://35.240.44.156/users/81");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Utilizador: ana.roque.cuidador"));
        } else if (arg0.equals("edit") && arg1.equals("caregiver")) {
            driver.get("http://35.240.44.156/users/72/edit");
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Cuidador ana.margarida.carvalho.cuidador"));
        }
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\"$")
    public void iShouldBeRedirectedToThePageOfThe(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("edit") && arg1.equals("admin")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Administrador " + arg1));
        } else if (arg0.equals("edit") && arg1.equals("healthcare professional")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Profissional de Saúde " + arg1));
        } else if (arg0.equals("edit") && arg1.equals("caregiver")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Cuidador " + arg1));
        } else if (arg0.equals("details")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Utilizador: " + arg1));
        }
    }

    @And("^the field \"([^\"]*)\" should be empty$")
    public void theFieldShouldBeEmpty(String arg0) throws Throwable {
        if (arg0.equals("password")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputPassword")),"");
        } else if (arg0.equals("password_confirmation")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputPasswordConfirmation")),"");
        }
    }

    @When("^I edit the \"([^\"]*)\" field with \"([^\"]*)\" - USthree$")
    public void iEditTheFieldWithUSthree(String arg0, String arg1) throws Throwable {
        WebElement field = null;
        Select select = null;
        Random rand = new Random();
        this.random = rand.nextInt(9000000) + 1000000;
        if (arg0.equals("name")) {
            arg1 = arg1 + this.random;
            this.newName = arg1;
            field = driver.findElement(By.id("inputName"));
        } else if (arg0.equals("email")) {
            field = driver.findElement(By.id("inputEmail"));
            arg1 = new StringBuilder(arg1).insert(arg1.length()-10, this.random).toString();
            this.newEmail = arg1;
        } else if (arg0.equals("job")) {
            field = driver.findElement(By.id("inputJob"));
            arg1 = arg1 + this.random;
            this.newJob = arg1;
        } else if (arg0.equals("facility")) {
            field = driver.findElement(By.id("inputFacility"));
            arg1 = arg1 + this.random;
            this.newFacility = arg1;
        } else if (arg0.equals("location")) {
            field = driver.findElement(By.id("inputLocation"));
            arg1 = arg1 + this.random;
            this.newLocation = arg1;
        }

        if (select != null) {
            select.selectByVisibleText(String.valueOf(arg1));
        } else {
            field.clear();
            field.sendKeys(arg1);
        }
    }

    @And("^the field \"([^\"]*)\" should show the new \"([^\"]*)\"$")
    public void theFieldShouldShowTheNew(String arg0, String arg1) throws Throwable {
        if (arg0.equals("name")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Nome: " + this.newName);
        } else if (arg0.equals("email")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Email: " + this.newEmail);
        } else if (arg0.equals("job")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Trabalho/Estatuto: " + this.newJob);
        } else if (arg0.equals("facility")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Local de Trabalho: " + this.newFacility);
        } else if (arg0.equals("location")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Localização: " + this.newLocation);
        } else if (arg0.equals("gender")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Género: Feminino");
        } else if (arg0.equals("experienceTime")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Tempo de experiência como cuidador: 2 Mês/Meses");
        } else if (arg0.equals("birthDate")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "26-07-1991");
        }
    }

    @And("^should be present a log at the \"([^\"]*)\" section$")
    public void shouldBePresentALogAtTheSection(String arg0) throws Throwable {
        //REVERSE LOG ORDER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    @And("^the editable field \"([^\"]*)\" should show \"([^\"]*)\"$")
    public void theEditableFieldShouldShow(String arg0, String arg1) throws Throwable {
        if (arg0.equals("nome")){
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputName")), arg1);
        } else if (arg0.equals("email")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputEmail")), arg1);
        } else if (arg0.equals("job")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputJob")), arg1);
        } else if (arg0.equals("facility")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputFacility")), arg1);
        } else if (arg0.equals("birthDate")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputBirthDate")), arg1);
        } else if (arg0.equals("gender")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.name("gender")), arg1);
        } else if (arg0.equals("location")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.id("inputLocation")), arg1);
        } else if (arg0.equals("experienceNumber")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.name("experienceNumber")), arg1);
        } else if (arg0.equals("experiencePeriod")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.name("experiencePeriod")), arg1);
        }
    }

    @Then("^the \"([^\"]*)\" error message should be shown - USthree$")
    public void theErrorMessageShouldBeShownUSthree(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("alert")), arg0));
    }

    @When("^the \"([^\"]*)\" field is empty - USthree$")
    public void theFieldIsEmptyUSthree(String arg0) throws Throwable {
        WebElement webElement = null;
        Select select = null;
        if (arg0.equals("username")) {
            webElement = driver.findElement(By.id("inputUsername"));
        } else if (arg0.equals("name")) {
            webElement = driver.findElement(By.id("inputName"));
        } else if (arg0.equals("email")) {
            webElement = driver.findElement(By.id("inputEmail"));
        } else if (arg0.equals("gender")) {
            select =  new Select(driver.findElement(By.name("gender")));
            select.selectByVisibleText("Selecione uma opção");
        } else if (arg0.equals("birthDate")) {
            webElement = driver.findElement(By.id("inputBirthDate"));
        } else if (arg0.equals("job")) {
            webElement = driver.findElement(By.id("inputJob"));
        } else if (arg0.equals("facility")) {
            webElement = driver.findElement(By.id("inputFacility"));
        }  else if (arg0.equals("location")) {
            webElement = driver.findElement(By.id("inputLocation"));
        } else if (arg0.equals("experiencePeriod")) {
            select =  new Select(driver.findElement(By.name("experiencePeriod")));
            select.selectByVisibleText("Selecione um período de tempo");
        } else if (arg0.equals("password")) {
            webElement = driver.findElement(By.id("inputPassword"));
        } else if (arg0.equals("password_confirmation")) {
            webElement = driver.findElement(By.id("inputPasswordConfirmation"));
        }

        if (!arg0.equals("gender") && !arg0.equals("experiencePeriod")) {
            webElement.clear();
        }

    }


}
