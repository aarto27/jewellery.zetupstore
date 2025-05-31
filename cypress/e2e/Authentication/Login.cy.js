describe('Login', () => {
    it('Login', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.get('.icon-user').click();
      cy.get('#signin-2').find('.form-control').eq(0).type("sanchit@annexlogic.com");
      cy.get('#signin-2').find('.form-control').eq(1).type("Sanchit#123");
      cy.get('.custom-control-label').click();
      cy.get('.btn-outline-primary-2').eq(2).click();
    })
  })