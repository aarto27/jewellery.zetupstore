describe('Registration', () => {
    it('Registration', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.get('.icon-user').click();
      cy.get('.base_color').click();
      cy.get('#name').type('Sanchit');
      cy.get('#register-email').type('sanchit@annexlogic.com')
      cy.get('#register-contact').type('456876545');
      cy.get('#register-password').type('Sanchit#123');
      cy.get('#register-password-2').type('Sanchit#123');
      cy.get('.custom-control-label').click();
      cy.get('.btn-outline-primary-2').eq(2).click();
    })
  })