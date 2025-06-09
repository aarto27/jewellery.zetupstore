describe('Review', () => {
    it('Review', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.wait(2000);
      cy.get('.border-bottom-0').eq(0).click();
      cy.wait(2000);
      cy.get('.icon-plus').click();
      cy.wait(2000);
      cy.get('.icon-plus').click();
      cy.wait(2000);
      cy.get('.icon-plus').click();
      cy.wait(2000);
      cy.get('.icon-plus').click();
      cy.wait(2000);
      cy.get('.icon-plus').click();
      cy.wait(2000);
      cy.get('.icon-minus').click();
      cy.wait(2000);
      cy.get('.icon-minus').click();
      cy.wait(2000);
      cy.get('.icon-minus').click();
      cy.wait(2000);
      cy.get('#product-review-link').click();
      cy.wait(4000);
    //   cy.get('.star-rating').find('#star2').click();
    cy.get('.review_btn').click();
    cy.get('#signin-2').find('.form-control').eq(0).type("sanchit@annexlogic.com");
      cy.get('#signin-2').find('.form-control').eq(1).type("Sanchit#123");
      cy.get('.custom-control-label').click();
      cy.get('.btn-outline-primary-2').eq(2).click();
      cy.get('.border-bottom-0').eq(1).click();
      cy.wait(2000);
      cy.get('#product-review-link').click();
      cy.get('label[for="star1"]').click({ force: true });
      cy.get('#reply-message').type('Really Nice Product');
      cy.get('.review_btn').click();
    })
  })