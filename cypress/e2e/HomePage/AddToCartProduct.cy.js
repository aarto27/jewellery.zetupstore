describe('Login', () => {
    it('Login', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.wait(2000);
      cy.get('.border-bottom-0').eq(0).click();
      cy.wait(2000);
      cy.get('#btn-cart').click();
      cy.get('.icon-shopping-cart').click();
      cy.wait(2000);
      cy.get('.btn-outline-primary-2').eq(0).click();
      cy.wait(2000);
      cy.get('.btn-remove').eq(1).click();
      cy.wait(2000);
      cy.get('.breadcrumb-item').eq(0).click();
    })
  })