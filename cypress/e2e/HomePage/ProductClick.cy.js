describe('ProductClick', () => {
    it('ProductClick', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.get('.product-body').find('.product-title').eq(0).click();
      cy.get('.icon-plus').click();
      cy.get('#btn-cart').click();
      cy.get('.icon-shopping-cart').click();
      cy.get('.btn-outline-primary-2').eq(0).click();
      cy.get('.btn-remove').eq(1).click();
      cy.wait(2000);
      cy.get('.breadcrumb-item').eq(0).click();
    })
  })