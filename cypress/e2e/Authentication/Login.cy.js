describe('Login', () => {
    it('Login', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.get('.icon-user').click();
      cy.get('#signin-2').find('.form-control').eq(0).click();
    })
  })