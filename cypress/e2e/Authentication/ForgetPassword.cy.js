describe('ForgetPassword', () => {
    it('ForgetPassword', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.get('.icon-user').click();
      cy.get('.forgot-link').click();
      cy.get('.form-control').eq(2).type('sanchit@annexlogic.com')
      cy.get('.btn-outline-primary-2').eq(2).click();
    })
  })