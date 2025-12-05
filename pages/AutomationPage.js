class AutomationPage {
    constructor(page) {
        this.page = page;
        this.createDropdown = page.locator('button:has-text("Create")');
        this.taskBotOption = page.locator('text=Task Bot');
        this.formOption = page.locator('text=Form');
    }

    async openTaskBot() {
        await this.createDropdown.click();
        await this.taskBotOption.click();
    }

    async openForm() {
        await this.createDropdown.click();
        await this.formOption.click();
    }
}

module.exports = AutomationPage;
