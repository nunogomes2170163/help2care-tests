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

import java.util.List;
import java.util.Random;

import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertEquals;

public class US5StepDefs {

    private WebDriver driver;
    private int random;
    private String materialType;
    private int newCompositeId;
    private String firstEntry;
    private String secondEntry;

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
        } else if (arg0.equals("new composite")) {
            driver.get("http://35.240.44.156/materials/create/composite");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Novo Material Composto"));
        } else if (arg0.equals("composite add materials")) {
            driver.get("http://35.240.44.156/materials/180/materials");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(0),"Outros Materiais"));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(1),"Materiais Associados ao Material Cucumber Composite"));
        } else if (arg0.equals("edit text")) {
            driver.get("http://35.240.44.156/materials/40/edit");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Editar Material"));
        } else if (arg0.equals("edit image")) {
            driver.get("http://35.240.44.156/materials/132/edit");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Editar Material"));
        } else if (arg0.equals("edit video")) {
            driver.get("http://35.240.44.156/materials/162/edit");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Editar Material"));
        } else if (arg0.equals("edit audioGuide")) {
            driver.get("http://35.240.44.156/materials/111/edit");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Editar Material"));
        } else if (arg0.equals("edit listItem")) {
            driver.get("http://35.240.44.156/materials/135/edit");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Editar Material"));
        } else if (arg0.equals("edit emergencyContact")) {
            driver.get("http://35.240.44.156/materials/129/edit");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Editar Material"));
        } else if (arg0.equals("edit annex")) {
            driver.get("http://35.240.44.156/materials/176/edit");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Editar Material"));
        } else if (arg0.equals("edit composite")) {
            driver.get("http://35.240.44.156/materials/178/edit");
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Editar Material"));
        }
    }

    @And("^I press the \"([^\"]*)\" button - USfive$")
    public void iPressTheButtonUSfive(String arg0) throws Throwable {
        WebElement webElement = null;
        if (arg0.equals("create") || arg0.equals("save") || arg0.equals("add materials")) {
            webElement = driver.findElement(By.xpath("//button[@name='save']"));
        } else if (arg0.equals("conclude")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Concluído')]"));
        } else if (arg0.equals("edit")) {
            webElement = driver.findElement(By.xpath("//a[contains(text(),'Editar')]"));
        }

        webElement.click();
    }


    @And("^the field \"([^\"]*)\" should show \"([^\"]*)\" - USfive$")
    public void theFieldShouldShowUSfive(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("material")) {
            assertEquals("Material: " + arg1 + this.random, driver.findElement(By.tagName("h2")).getText());
        } else if (arg0.equals("material composite")) {
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("h2"), arg1));
        } else if (arg0.equals("type")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(1), "Tipo: " + arg1));
        } else if (arg0.equals("description")) {
            wait.until(ExpectedConditions.textToBePresentInElement( driver.findElements(By.tagName("h4")).get(2), "Descrição: " + arg1));
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
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Editar')]")));
        } else if (arg0.equals("block")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Bloquear')]")));
        } else if (arg0.equals("back")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'Voltar Atrás')]")));
        } else if (arg0.equals("delete")) {
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[2]/div/button")));
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
        } else if (arg0.equals("add materials")) {
            String[] urlSplit = driver.getCurrentUrl().split("/");
            this.newCompositeId = Integer.parseInt(urlSplit[4]);
            assertEquals("http://35.240.44.156/materials/" + this.newCompositeId + "/materials", driver.getCurrentUrl());
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(0),"Outros Materiais"));
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(1),"Materiais Associados ao Material Cucumber Composite"));
        }
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the \"([^\"]*)\" material - USfive$")
    public void iShouldBeRedirectedToThePageOfTheMaterialUSfive(String arg0, String arg1) throws Throwable {
            WebDriverWait wait = new WebDriverWait(driver, 3);
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Material: Cucumber " + arg1 +  this.random));
    }

    @And("^the field \"([^\"]*)\" should show an image$")
    public void theFieldShouldShowAnImage(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.className("picture")));
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
            ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//div[@id='dashboard']/div/div/h4[3]/a")));
        } else if (arg0.equals("Ficherio")) {
            ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//div[@id='dashboard']/div/div/h4[3]/a")));
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
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("alert")),arg0));
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
        } else if (arg0.equals("name error")) {
            field = driver.findElement(By.id("inputName"));
        } else if (arg0.equals("description")) {
            field = driver.findElement(By.id("inputDescription"));
        } else if (arg0.equals("body")) {
            field = driver.findElement(By.id("inputBody"));
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
            field.clear();
            field.sendKeys(arg1);
            System.out.println("EFG: " + arg1);
        }
    }

    @When("^I press the \"([^\"]*)\" button of the \"([^\"]*)\" material - USfive$")
    public void iPressTheButtonOfTheMaterialUSfive(String arg0, String arg1) throws Throwable {
        WebElement searchbox  = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg1);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("Detalhes")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td[4]/div/div/a"));
            webElement.click();
        } else if (arg0.equals("Bloquear")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td[4]/div/div[2]/form/button"));
            webElement.click();
        } else if (arg0.equals("Desbloquear")){
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg1));
            WebElement webElement = driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td[4]/div/div[2]/form/button"));
            webElement.click();
        }
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of \"([^\"]*)\" material - USfive$")
    public void iShouldBeRedirectedToThePageOfMaterialUSfive(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Material: " + arg1));
    }

    @And("^the field from details \"([^\"]*)\" should show \"([^\"]*)\" - USfive$")
    public void theFieldFromDetailsShouldShowUSfive(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("material")) {
            assertEquals("Material: " + arg1, driver.findElement(By.tagName("h2")).getText());
        } else if (arg0.equals("type")) {
            wait.until(ExpectedConditions.textToBePresentInElement( driver.findElements(By.tagName("h4")).get(1), "Tipo: " + arg1));
        } else if (arg0.equals("description")) {
            if (this.materialType == "item") {
                wait.until(ExpectedConditions.textToBePresentInElement( driver.findElements(By.tagName("h4")).get(3), "Descrição: " + arg1));
            } else {
                wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(2), "Descrição: " + arg1));
            }
        } else if (arg0.equals("text")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h5")).get(0), arg1));
        } else if (arg0.equals("itemMarker")) {
            this.materialType = "item";
            wait.until(ExpectedConditions.textToBePresentInElement( driver.findElements(By.tagName("h4")).get(2), "Marcador do Item de Lista: " + arg1));
        } else if (arg0.equals("detail_description")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h5")).get(0), arg1));
        } else if (arg0.equals("number")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(3), "Número: " + arg1));
        } else if (arg0.equals("url")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(3), "URL: " + arg1));
        } else if (arg0.equals("file")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.tagName("h4")).get(3), "Ficheiro: " + arg1));
        }
    }

    @And("^the field from details \"([^\"]*)\" should show an image - USfive$")
    public void theFieldFromDetailsShouldShowAnImageUSfive(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//img[@src='http://35.240.44.156/materials/46/showContent']")));
    }

    @And("^the field \"([^\"]*)\" should show a video - USfive$")
    public void theFieldShouldShowAVideoUSfive(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.tagName("video")));
    }

    @And("^the field from details \"([^\"]*)\" should show a sound - USfive$")
    public void theFieldFromDetailsShouldShowASoundUSfive(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.tagName("audio")));
    }

    @And("^the \"([^\"]*)\" material is unblocked - USfive$")
    public void theMaterialIsUnblockedUSfive(String arg0) throws Throwable {
        checkIfBlockOrUnblockUSfive(false,arg0);
    }


    public void checkIfBlockOrUnblockUSfive(boolean isBlock, String user) {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(user);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), user));
        if (isBlock) {
            String optionText = driver.findElement(By.xpath("//button[@name='unblock']")).getText();
            assertEquals(optionText, "Desbloquear");
        } else {
            String optionText = driver.findElement(By.xpath("//button[@name='block']")).getText();
            assertEquals(optionText, "Bloquear");
        }
    }

    @And("^the \"([^\"]*)\" button should be present in the \"([^\"]*)\" material options$")
    public void theButtonShouldBePresentInTheMaterialOptions(String arg0, String arg1) throws Throwable {
        if (arg0.equals("Desbloquear")) {
            checkIfBlockOrUnblockUSfive(true, arg1);
        } else {
            checkIfBlockOrUnblockUSfive(false, arg1);
        }
    }

    @And("^the \"([^\"]*)\" material is blocked$")
    public void theMaterialIsBlocked(String arg0) throws Throwable {
        checkIfBlockOrUnblockUSfive(false,arg0);
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of the material - USfive$")
    public void iShouldBeRedirectedToThePageOfTheMaterialUSfive(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Material"));
    }

    @And("^the editable field \"([^\"]*)\" should show \"([^\"]*)\" - USfive$")
    public void theEditableFieldShouldShowUSfive(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("type")) {
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("materialType")),arg1));
        } else if (arg0.equals("name")) {
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputName")),arg1));
        } else if (arg0.equals("description")) {
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputDescription")),arg1));
        } else if (arg0.equals("body")) {
            wait.until(ExpectedConditions.textToBePresentInElementValue(driver.findElement(By.id("inputBody")),arg1));
        }
    }


    @Given("^I access the \"([^\"]*)\" page of the \"([^\"]*)\" \"([^\"]*)\" material - USfive$")
    public void iAccessThePageOfTheMaterialUSfive(String arg0, String arg1, String arg2) throws Throwable {
        if (arg0.equals("details") && arg1.equals("text")) {
            driver.get("http://35.240.44.156/materials/138");
        } else if (arg0.equals("edit") && arg1.equals("text")){
            driver.get("http://35.240.44.156/materials/138/edit");
        }
    }

    @And("^the \"([^\"]*)\" table should be present - USfive$")
    public void theTableShouldBePresentUSfive(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("other materials")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(0),"Outros Materiais"));
            assertTrue(driver.findElements(By.xpath("//table[@id='materials']/tbody/tr")).size() > 0);
        } else if (arg0.equals("material materials")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(1),"Materiais Associados ao Material Cucumber Composite"));
        } else if (arg0.equals("quiz questions filled")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElements(By.className("my-caregivers-legend")).get(1),"Questões Associadas ao Questionário"));
            assertTrue(driver.findElements(By.xpath("//table[@id='quizQuestions']/tbody/tr")).size() > 0);
        }
    }

    @And("^the other materials table have more than 2 entries$")
    public void theOtherMaterialsTableHaveMoreThanEntries() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")),"Outros Materiais"));
        assertTrue(driver.findElements(By.xpath("//table[@id='materials']/tbody/tr")).size() > 2);
    }

    @When("^I press the add button of the first row of the other materials table twice$")
    public void iPressTheAddButtonOfTheFirstRowOfTheOtherMaterialsTableTwice() throws Throwable {
        WebElement webElement = driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td[2]/form/button"));
        webElement.click();
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")),"Administrar comprimidos por sonda"));
        webElement = driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td[2]/form/button"));
        webElement.click();
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")),"Alimentação da pessoa dependente e sem disfagia"));
    }

    @Then("^the material materials table should have 2 entries$")
    public void theMaterialMaterialsTableShouldHaveEntries() throws Throwable {
        assertTrue(driver.findElements(By.xpath("//table[@id='materialMaterials']/tbody/tr")).size() == 2);
    }

    @And("^the \"([^\"]*)\" entry of the material materials table should contain the text \"([^\"]*)\"$")
    public void theEntryOfTheMaterialMaterialsTableShouldContainTheText(String arg0, String arg1) throws Throwable {
        if (arg0.equals("first")) {
            assertEquals(arg1, driver.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[2]")).getText());
        } else if (arg0.equals("second")) {
            assertEquals(arg1, driver.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[2]")).getText());
        }
    }

    @And("^the \"([^\"]*)\" entry of the material materials table should display \"([^\"]*)\" button$")
    public void theEntryOfTheMaterialMaterialsTableShouldDisplayButton(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("first")) {
            if (arg1.equals("down")) {
                wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[3]/div/div[2]/form/button")));
            } else if (arg1.equals("remove")) {
                wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[3]/div/div[3]/form/button")));
            }
        } else if (arg0.equals("second")) {
            if (arg1.equals("up")) {
                wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[3]/div/div/form/button")));
            } else if (arg1.equals("remove")) {
                wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[3]/div/div[3]/form/button")));
            }
        }
    }

    @And("^the material materials table have 2 entries$")
    public void theMaterialMaterialsTableHaveEntries() throws Throwable {
        assertTrue(driver.findElements(By.xpath("//table[@id='materialMaterials']/tbody/tr")).size() == 2);
    }

    @When("^I press the \"([^\"]*)\" button of the first entry of the material materials table$")
    public void iPressTheButtonOfTheFirstEntryOfTheMaterialMaterialsTable(String arg0) throws Throwable {
        if (arg0.equals("down")) {
            this.firstEntry = driver.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[2]")).getText();
            this.secondEntry = driver.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[2]")).getText();
            WebElement webElement = driver.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[3]/div/div[2]/form/button"));
            webElement.click();
        } else if (arg0.equals("remove")) {
            this.secondEntry = driver.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[2]")).getText();
            WebElement webElement = driver.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[3]/div/div[3]/form/button"));
            webElement.click();
        }
    }

    @Then("^the new \"([^\"]*)\" entry of the material materials table should be the \"([^\"]*)\" entry$")
    public void theNewEntryOfTheMaterialMaterialsTableShouldBeTheEntry(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("first") && arg1.equals("second")) {
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[2]"), this.secondEntry));
        } else if (arg0.equals("second") && arg1.equals("first")) {
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[2]"), this.firstEntry));
        }
    }

    @When("^I press the \"([^\"]*)\" button of the second entry of the material materials table$")
    public void iPressTheButtonOfTheSecondEntryOfTheMaterialMaterialsTable(String arg0) throws Throwable {
        this.firstEntry = driver.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[2]")).getText();
        this.secondEntry = driver.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[2]")).getText();
        WebElement webElement = driver.findElement(By.xpath("//table[@id='materialMaterials']/tbody/tr[2]/td[3]/div/div/form/button"));
        webElement.click();
    }

    @Then("^the material materials table should have 1 entry$")
    public void theMaterialMaterialsTableShouldHaveEntry() throws Throwable {
        assertTrue(driver.findElements(By.xpath("//table[@id='materialMaterials']/tbody/tr")).size() == 1);
    }

    @And("^the new first entry of the material materials table should contain the text of the previous second entry$")
    public void theNewFirstEntryOfTheMaterialMaterialsTableShouldContainTheTextOfThePreviousSecondEntry() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.xpath("//table[@id='materialMaterials']/tbody/tr/td[2]"), this.secondEntry));
    }

    @Then("^I should be redirected to the details page of the material$")
    public void iShouldBeRedirectedToTheDetailsPageOfTheMaterial() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        assertEquals("http://35.240.44.156/materials/180", driver.getCurrentUrl());
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("h2"), "Material: Cucumber Composite"));
    }

    @And("^a table with the title \"([^\"]*)\" should be displayed - USfive$")
    public void aTableWithTheTitleShouldBeDisplayedUSfive(String arg0) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("others-caregivers-legend")), arg0));
    }

    @And("^the materials associated table should have at least 1 entry$")
    public void theMaterialsAssociatedTableShouldHaveAtLeastEntry() throws Throwable {
        assertTrue(driver.findElements(By.xpath("//table[@id='materials']/tbody/tr")).size() >= 1);
    }

    @When("^I press the details button of the \"([^\"]*)\" material$")
    public void iPressTheDetailsButtonOfTheMaterial(String arg0) throws Throwable {
        WebElement searchbox = driver.findElement(By.id("searchbox"));
        searchbox.clear();
        searchbox.sendKeys(arg0);
        WebDriverWait wait = new WebDriverWait(driver, 3);
        wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.xpath("//table[@id='materials']/tbody/tr/td")), arg0));
        WebElement webElement = driver.findElement(By.xpath("//td[4]/div/div/a"));
        webElement.click();
    }

    @Then("^I should be redirected to the \"([^\"]*)\" page of \"([^\"]*)\" material$")
    public void iShouldBeRedirectedToThePageOfMaterial(String arg0, String arg1) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 3);
        if (arg0.equals("details")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("h2")), "Material: " + arg1));
        } else if (arg0.equals("edit")) {
            wait.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.className("my-caregivers-legend")), "Editar Material"));
            assertEquals(arg1, driver.findElement(By.id("inputName")).getAttribute("value"));
        }
    }

    @And("^the \"([^\"]*)\" material should be present in the materials associated table - USfive$")
    public void theMaterialShouldBePresentInTheMaterialsAssociatedTableUSfive(String arg0) throws Throwable {
        int count = 0;
        List<WebElement> webElements = driver.findElements(By.xpath("//table[@id='materials']/tbody/tr/td[2]"));
        for (WebElement webElement: webElements) {
            if (webElement.getText().equals(arg0)) {
                count++;
            }
        }
        assertTrue(count == 1);
    }

    @When("^the \"([^\"]*)\" field is empty - USfive$")
    public void theFieldIsEmptyUSfive(String arg0) throws Throwable {
        if (arg0.equals("name")) {
            WebElement webElement = driver.findElement(By.id("inputName"));
            webElement.clear();
        } else if (arg0.equals("description")) {
            WebElement webElement = driver.findElement(By.id("inputDescription"));
            webElement.clear();
        } else if (arg0.equals("body")) {
            WebElement webElement = driver.findElement(By.id("inputBody"));
            webElement.clear();
        } else if (arg0.equals("listItemMarker")) {
            WebElement webElement = driver.findElement(By.id("inputListItemMarker"));
            webElement.clear();
        } else if (arg0.equals("pathImage")) {
            WebElement webElement = driver.findElement(By.xpath("//input[@name='pathImage']"));
            webElement.clear();
        } else if (arg0.equals("pathVideo")) {
            WebElement webElement = driver.findElement(By.xpath("//input[@name='pathVideo']"));
            webElement.clear();
        } else if (arg0.equals("pathAudioGuide")) {
            WebElement webElement = driver.findElement(By.xpath("//input[@name='pathAudioGuide']"));
            webElement.clear();
        } else if (arg0.equals("number")) {
            WebElement webElement = driver.findElement(By.id("inputNumber"));
            webElement.clear();
        } else if (arg0.equals("pathAnnex")) {
            WebElement webElement = driver.findElement(By.xpath("//input[@name='pathAnnex']"));
            webElement.clear();
        } else if (arg0.equals("url")) {
            WebElement webElement = driver.findElement(By.id("inputURL"));
            webElement.clear();
        }
    }
}
