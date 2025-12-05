class FormPage {
    constructor(page) {
        this.page = page;
        this.nameField = page.locator('#name');
        this.descField = page.locator('#description');
        this.createBtn = page.locator('button:has-text("Create")');

        this.textboxElement = page.locator('text=Textbox');
        this.fileSelectElement = page.locator('text=Select File');

        this.canvas = page.locator('#canvas');

        this.textBoxOnCanvas = page.locator('input[type="text"]');
        this.fileUploadOnCanvas = page.locator('input[type="file"]');

        this.saveBtn = page.locator('text=Save');
    }

    async createForm(name, desc) {
        await this.nameField.fill(name);
        await this.descField.fill(desc);
        await this.createBtn.click();
    }

    async dragAndDropFields() {
        await this.textboxElement.dragTo(this.canvas);
        await this.fileSelectElement.dragTo(this.canvas);
    }

    async fillTextBox(text) {
        await this.textBoxOnCanvas.fill(text);
    }

    async uploadFile(path) {
        await this.fileUploadOnCanvas.setInputFiles(path);
    }

    async saveForm() {
        await this.saveBtn.click();
    }
}

module.exports = FormPage;
