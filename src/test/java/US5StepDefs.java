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
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Random;

import static org.junit.Assert.assertEquals;

public class US5StepDefs {

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

    @Given("^I access the \"([^\"]*)\" page - USfive$")
    public void iAccessThePageUSfive(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("materials")) {
            WebElement webElement = driver.findElement(By.xpath("//ul[@id='left-navbar']/li[3]/a"));
            webElement.click();
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Materiais"));
        } else if (arg0.equals("new text")) {
            driver.get("http://35.240.44.156/materials/create/text");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Texto"));
        } else if (arg0.equals("new image")) {
            driver.get("http://35.240.44.156/materials/create/image");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Nova Imagem"));
        } else if (arg0.equals("new video")) {
            driver.get("http://35.240.44.156/materials/create/video");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Video"));
        } else if (arg0.equals("new audioGuide")) {
            driver.get("http://35.240.44.156/materials/create/audioGuide");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Áudio-guia"));
        } else if (arg0.equals("new listItem")) {
            driver.get("http://35.240.44.156/materials/create/listItem");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Item de Lista"));
        } else if (arg0.equals("new emergencyContact")) {
            driver.get("http://35.240.44.156/materials/create/emergencyContact");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Contacto de Emergência"));
        } else if (arg0.equals("new annex")) {
            driver.get("http://35.240.44.156/materials/create/annex");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Anexo"));
        }

    }

    @And("^I press the \"([^\"]*)\" button - USfive$")
    public void iPressTheButtonUSfive(String arg0) throws Throwable {
        WebElement webElement = null;
        if (arg0.equals("create")) {
            webElement = driver.findElement(By.xpath("//button[@name='save']"));
        }

        webElement.click();
    }


    @And("^the field \"([^\"]*)\" should show \"([^\"]*)\" - USfive$")
    public void theFieldShouldShowUSfive(String arg0, String arg1) throws Throwable {
        if (arg0.equals("material")) {
            assertEquals("Material: " + arg1 + this.random, driver.findElement(By.tagName("h2")).getText());
        } else if (arg0.equals("type")) {
            ExpectedConditions.textToBePresentInElement( driver.findElement(By.tagName("h4")), "Tipo: " + arg1);
        } else if (arg0.equals("description")) {
            ExpectedConditions.textToBePresentInElement( driver.findElement(By.tagName("h4")), "Descrição: " + arg1);
        } else if (arg0.equals("text")) {
            assertEquals(arg1, driver.findElement(By.tagName("h5")).getText());
        } else if (arg0.equals("listItemMarker")) {
            ExpectedConditions.textToBePresentInElement( driver.findElement(By.tagName("h4")), "Marcador do Item de Lista: " + arg1);
        } else if (arg0.equals("listItemDetailedDescription")) {
            assertEquals(arg1, driver.findElement(By.tagName("h5")).getText());
        } else if (arg0.equals("number")) {
            ExpectedConditions.textToBePresentInElement( driver.findElement(By.tagName("h4")), "Número: " + arg1);
        } else if (arg0.equals("url")) {
            ExpectedConditions.textToBePresentInElement( driver.findElement(By.tagName("h4")), "URL: " + arg1);
        }
    }

    @And("^the \"([^\"]*)\" button should be present - USfive$")
    public void theButtonShouldBePresentUSfive(String arg0) throws Throwable {
        if (arg0.equals("edit")) {
            ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Editar')]"));
        } else if (arg0.equals("block")) {
            ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Bloquear')]"));
        } else if (arg0.equals("back")) {
            ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Voltar Atrás')]"));
        } else if (arg0.equals("delete")) {
            ExpectedConditions.presenceOfElementLocated(By.xpath("//div[2]/div/button"));
        }
    }

    @And("^the first entry of the \"([^\"]*)\" table should contain the text \"([^\"]*)\"$")
    public void theFirstEntryOfTheTableShouldContainTheText(String arg0, String arg1) throws Throwable {

    }

    @Then("^I should be redirected to the \"([^\"]*)\" page - USfive$")
    public void iShouldBeRedirectedToThePageUSfive(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")),"Material:"));
        }
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\" material - USfive$")
    public void iShouldBeRedirectedToThePageOfTheMaterialUSfive(String arg0, String arg1) throws Throwable {
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Material: Cucumber " + arg1 +  this.random));
    }

    @And("^the field \"([^\"]*)\" should show an image$")
    public void theFieldShouldShowAnImage(String arg0) throws Throwable {
        ExpectedConditions.presenceOfElementLocated(By.tagName("img"));
    }


    @And("^the field \"([^\"]*)\" should show a \"([^\"]*)\"$")
    public void theFieldShouldShowA(String arg0, String arg1) throws Throwable {
        if (arg1.equals("image")) {
            ExpectedConditions.presenceOfElementLocated(By.tagName("img"));
        } else if (arg0.equals("video")) {
            ExpectedConditions.presenceOfElementLocated(By.tagName("video"));
        } else if (arg0.equals("sound")) {
            ExpectedConditions.presenceOfElementLocated(By.tagName("audio"));
        }
    }

    @And("^the field \"([^\"]*)\" must be clickable$")
    public void theFieldMustBeClickable(String arg0) throws Throwable {
        if (arg0.equals("URL")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//div[@id='dashboard']/div/div/h4[3]/a")), "https://www.youtube.com/watch?v=FTQbiNvZqaY");
        } else if (arg0.equals("Ficherio")) {
            ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//div[@id='dashboard']/div/div/h4[3]/a")), "test.pdf");
        }
    }

    @And("^the \"([^\"]*)\" text should be shown - USfive$")
    public void theTextShouldBeShownUSfive(String arg0) throws Throwable {
        if (arg0.equals("new text")) {
            assertEquals("Novo Texto",driver.findElement(By.className("my-caregivers-legend")).getText());
        } else if (arg0.equals("new image")) {
            assertEquals("Nova Imagem",driver.findElement(By.className("my-caregivers-legend")).getText());
        } else if (arg0.equals("new video")) {
            assertEquals("Novo Video",driver.findElement(By.className("my-caregivers-legend")).getText());
        } else if (arg0.equals("new audioGuide")) {
            assertEquals("Novo Áudio-guia",driver.findElement(By.className("my-caregivers-legend")).getText());
        } else if (arg0.equals("new listItem")) {
            assertEquals("Novo Item de Lista",driver.findElement(By.className("my-caregivers-legend")).getText());
        } else if (arg0.equals("new emergencyContact")) {
            assertEquals("Novo Contacto de Emergência",driver.findElement(By.className("my-caregivers-legend")).getText());
        } else if (arg0.equals("new annex")) {
            assertEquals("Novo Anexo",driver.findElement(By.className("my-caregivers-legend")).getText());
        } else if (arg0.equals("new composite")) {
            assertEquals("Novo Material Composto",driver.findElement(By.className("my-caregivers-legend")).getText());
        }
    }

    @Then("^the \"([^\"]*)\" error message should be shown - USfive$")
    public void theErrorMessageShouldBeShownUSfive(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("help-block")),arg0));
    }

    @When("^I press the \"([^\"]*)\" material button -USfive$")
    public void iPressTheMaterialButtonUSfive(String arg0) throws Throwable {
        WebElement webElement = null;

        if (arg0.equals("new text")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Novo Texto')]"));
        } else if (arg0.equals("new image")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Nova Imagem')]"));
        } else if (arg0.equals("new video")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Novo Video')]"));
        } else if (arg0.equals("new audioGuide")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Novo Áudio-guia')]"));
        } else if (arg0.equals("new listItem")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Novo Item de Lista')]"));
        } else if (arg0.equals("new emergencyContact")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Novo Contacto de Emergência')]"));
        } else if (arg0.equals("new annex")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Novo Anexo')]"));
        } else if (arg0.equals("new composite")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Novo Composto')]"));
        }

        webElement.click();
    }

    @When("^I fill the \"([^\"]*)\" field with \"([^\"]*)\" - USfive$")
    public void iFillTheFieldWithUSfive(String arg0, String arg1) throws Throwable {
        WebElement field = null;
        Select select = null;
        Random rand = new Random();
        if (arg0.equals("name")) {
            this.random = rand.nextInt(9000000) + 1000000;
            arg1 = arg1 + this.random;
            field = driver.findElement(By.id("inputName"));
        } else if (arg0.equals("description")) {
            field = driver.findElement(By.id("inputDescription"));
        } else if (arg0.equals("body")) {
            field = driver.findElement(By.id("body"));
        } else if (arg0.equals("pathImage")) {
            field = driver.findElement(By.name("pathImage"));
        } else if (arg0.equals("pathVideo")) {
            field = driver.findElement(By.name("pathVideo"));
        } else if (arg0.equals("pathAudioGuide")) {
            field = driver.findElement(By.name("pathAudioGuide"));
        } else if (arg0.equals("listItemMarker")) {
            field = driver.findElement(By.name("listItemMarker"));
        } else  if (arg0.equals("listItemDetailedDescription")) {
            field = driver.findElement(By.name("listItemDetailedDescription"));
        } else if (arg0.equals("number")) {
            field = driver.findElement(By.id("inputNumber"));
        } else if (arg0.equals("selectType")) {
            select =  new Select(driver.findElement(By.name("selectType")));
        } else if (arg0.equals("url")) {
            select = null;
            field = driver.findElement(By.name("url"));
        } else if (arg0.equals("pathAnnex")) {
            field = driver.findElement(By.name("pathAnnex"));
        }

        if (select != null) {
            System.out.println("ABCD: " + arg1);
            select.selectByVisibleText(arg1);
            System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaa :" + select.getFirstSelectedOption().getText());
        }

        if (arg0.equals("pathImage")) {
            field.sendKeys("C:\\Users\\Joao Caroco\\Documents\\help2careservertests\\testFiles\\test.jpg");
        } else if (arg0.equals("pathVideo")){
            field.sendKeys("C:\\Users\\Joao Caroco\\Documents\\help2careservertests\\testFiles\\test.mp4");
        }else if (arg0.equals("pathAudioGuide")){
            field.sendKeys("C:\\Users\\Joao Caroco\\Documents\\help2careservertests\\testFiles\\test.mp3");
        } else if (arg0.equals("pathAnnex")){
            field.sendKeys("C:\\Users\\Joao Caroco\\Documents\\help2careservertests\\testFiles\\test.pdf");
        } else if (select == null) {
            //field.clear();
            field.sendKeys(arg1);
            System.out.println("EFG: " + arg1);
        }
    }
}
