describe('SearchProduct', () => {
    it('SearchProduct', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.get('#aa-search-input').type('Ruby Pendant Necklace{enter}')
      cy.get('.product-body').find('.product-title').eq(0).click();
      cy.wait(2000);
      cy.get('.icon-plus').click();
      cy.wait(2000);
      cy.get('#btn-cart').click();
      cy.wait(2000);
      cy.get('.icon-shopping-cart').click();
      cy.wait(2000);
      cy.get('.btn-outline-primary-2').eq(0).click();
      cy.wait(2000);
      cy.get('.btn-remove').eq(1).click();
      cy.wait(2000);
      cy.get('.breadcrumb-item').eq(0).click();
    })
  })