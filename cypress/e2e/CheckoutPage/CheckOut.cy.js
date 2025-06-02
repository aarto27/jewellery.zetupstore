describe('CheckOut', () => {
    it('CheckOut', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.get('.border-bottom-0').eq(0).click();
      cy.wait(2000)
      cy.get('.product-body').find('.product-title').eq(1).click();
      cy.wait(2000)
      cy.get('#btn-cart').click();
      cy.wait(2000)
      cy.get('.icon-shopping-cart').click();
      cy.get('.btn-outline-primary-2').eq(0).click();
      cy.get('.btn-block').eq(1).click();
      cy.wait(2000);
      cy.get('.form-control').eq(3).type('Sanchit Singh Narwat');
      cy.get('.form-control').eq(4).type('sanchit@annexlogics.com');
      cy.get('.form-control').eq(5).select('+91');
      cy.get('.form-control').eq(6).type('1234567890');
      cy.get('.custom-control-label').eq(0).click();
      // cy.get('.form-control').eq(7).type('Sanchit#123');
      // cy.get('.passwordeyes').click();
      cy.wait(2000);
      // cy.get('.passwordeyes').click();
      cy.get('#address').type('asdfghjkl/');
      cy.get('#bil_country').select('India');
    })
  })