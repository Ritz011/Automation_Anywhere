class DashboardPage {
    constructor(page) {
        this.page = page;
        this.automationMenu = page.locator('text=Automation');
    }

    async navigateToAutomation() {
        await this.automationMenu.click();
    }
}

module.exports = DashboardPage;
