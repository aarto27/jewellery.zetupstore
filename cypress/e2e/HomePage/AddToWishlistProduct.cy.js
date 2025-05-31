describe('AddToWishlistProduct', () => {
    it('AddToWishlistProduct', () => {
        cy.visit('https://jewellery.zetupstore.com/');
        cy.wait(2000);
        cy.get('.product-4').eq(0).trigger('mouseover').then(($el) => {
            cy.wrap($el)
              .find('.btn-wishlist')
              .click({ force: true });
          });
          cy.wait(2000);
          cy.get('.icon-heart-o').click();
          cy.get('.btn-remove').last().click();
          cy.wait(2000);
          cy.get('.breadcrumb-item').eq(0).click();
    })
})