import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly shoppingCartButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.shoppingCartButton = page.locator('[data-test="shopping-cart-link"]');
    }

    async addToCart() {
        await this.addToCartButton.click();
    }
}