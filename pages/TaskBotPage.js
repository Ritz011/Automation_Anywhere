class TaskBotPage {
    constructor(page) {
        this.page = page;
        this.nameField = page.locator('#name');
        this.descriptionField = page.locator('#description');
        this.createBtn = page.locator('button:has-text("Create")');
        this.searchAction = page.locator('input[placeholder="Search actions"]');
        this.messageBoxItem = page.locator('text=Message Box');
        this.saveBtn = page.locator('text=Save');
    }

    async createTaskBot(name, desc) {
        await this.nameField.fill(name);
        await this.descriptionField.fill(desc);
        await this.createBtn.click();
    }

    async addMessageBox() {
        await this.searchAction.fill("Message Box");
        await this.messageBoxItem.dblclick(); 
    }

    async saveTask() {
        await this.saveBtn.click();
    }
}

module.exports = TaskBotPage;
