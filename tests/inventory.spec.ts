import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPages';
import { test, expect } from '@playwright/test';

test.describe('Testy strony z produktami', () => {
    let inventoryPage: InventoryPage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Add item to cart', async () => {
        await inventoryPage.addToCart();
        await expect(inventoryPage.shoppingCartButton).toBeVisible();
        await expect(inventoryPage.shoppingCartButton).toHaveText('1');
    });
});