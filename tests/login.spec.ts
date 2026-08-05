import { LoginPage } from '../pages/LoginPages';
import { test, expect } from '@playwright/test';
import userData  from '../data/users.json';


test.describe('Próby logowania do Sauce Demo', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    for (const user of userData) {
        test(`${user.testName}`, async () => {
            await loginPage.login(user.username, user.password);
            if (user.expectedToPass) {
                await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
            } else {
                await expect(loginPage.page.locator('.error-message-container')).toBeVisible();
            }
        });
    }
});