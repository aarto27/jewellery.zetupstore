describe('Login', () => {
    it('Login', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.wait(4000);
      cy.get('.product-4').eq(0).trigger('mouseover').find('.btn-quickview').eq(0).click({ force: true });
      cy.wait(4000);
      cy.get('.submit_text').click();
      cy.wait(4000);
      cy.get('.mfp-close').eq(0).click();
      cy.wait(4000);
      cy.get('.icon-shopping-cart').eq(0).click();
      cy.wait(4000);
      cy.get('.btn-outline-primary-2').eq(0).click();
      cy.wait(4000);
      cy.get('.btn-remove').eq(2).click();
      cy.wait(4000);
      cy.get('.breadcrumb-item').eq(0).click();
    })
  })