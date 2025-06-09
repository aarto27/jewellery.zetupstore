describe('Product', () => {
    it('Product', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.wait(2000);
      cy.get('.border-bottom-0').eq(3).click();
      cy.wait(2000);
      cy.get('.border-bottom-0').eq(4).click();
      cy.wait(2000);
      cy.get('.border-bottom-0').eq(5).click();
      cy.wait(2000);
      cy.get('.product-4').eq(0).trigger('mouseover').then(($el) => {
        cy.wrap($el)
          .find('.btn-wishlist')
          .click({ force: true });
      });
      cy.wait(2000);
      cy.get('.product-4').eq(1).trigger('mouseover').then(($el) => {
        cy.wrap($el)
          .find('.btn-wishlist')
          .click({ force: true });
      });
      cy.wait(2000);
      cy.get('.product-4').eq(2).trigger('mouseover').then(($el) => {
        cy.wrap($el)
          .find('.btn-wishlist')
          .click({ force: true });
      });
      cy.wait(2000);
      cy.get('.icon-shopping-cart').click();
      cy.wait(2000);
      cy.get('.btn-outline-primary-2').eq(0).click();
      cy.wait(2000);
      cy.get('.btn-remove').eq(3).click();
      cy.wait(2000);
      cy.get('.btn-remove').eq(5).click();
      cy.wait(2000);
          cy.get('.icon-heart-o').click();
          cy.get('.icon-close').eq(3).click();
          cy.get('.icon-close').eq(2).click();
          cy.get('.icon-close').eq(1).click();
          cy.get('.breadcrumb-item').eq(0).click();
    })
  })