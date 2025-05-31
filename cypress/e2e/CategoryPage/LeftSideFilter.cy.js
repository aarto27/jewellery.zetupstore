describe('LeftSideFilter', () => {
    it('LeftSideFilter', () => {
      cy.visit('https://jewellery.zetupstore.com/');
      cy.get('.more-container').click();
      cy.get('.collapsed').eq(0).click();
      cy.get('#brand').find('.custom-control-label').eq(0).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(0).click();
      cy.get('#brand').find('.custom-control-label').eq(1).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(1).click();
      cy.get('#brand').find('.custom-control-label').eq(2).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(2).click();
      cy.get('#brand').find('.custom-control-label').eq(3).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(3).click();
      cy.get('#brand').find('.custom-control-label').eq(4).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(4).click();
      cy.get('#brand').find('.custom-control-label').eq(5).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(5).click();
      cy.get('#brand').find('.custom-control-label').eq(6).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(6).click();
      cy.get('#brand').find('.custom-control-label').eq(7).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(7).click();
      cy.get('#brand').find('.custom-control-label').eq(8).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(8).click();
      cy.get('#brand').find('.custom-control-label').eq(9).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(9).click();
      cy.get('#brand').find('.custom-control-label').eq(10).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(10).click();
      cy.get('#brand').find('.custom-control-label').eq(11).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(11).click();
      cy.get('#brand').find('.custom-control-label').eq(12).click();
      cy.wait(2000);
      cy.get('#brand').find('.custom-control-label').eq(12).click();
    cy.wait(3000);
      cy.get('.noUi-handle-lower')
      .trigger('mousedown', { which: 1 }) 
      .trigger('mousemove', { clientX: 250 })
      .trigger('mouseup');
      cy.wait(3000);
      cy.get('.noUi-handle-lower')
      .trigger('mousedown', { which: 1 }) 
      .trigger('mousemove', { clientX: 450 })
      .trigger('mouseup');
      cy.wait(3000);
      cy.get('.noUi-handle-lower')
      .trigger('mousedown', { which: 1 }) 
      .trigger('mousemove', { clientX: 650 })
      .trigger('mouseup');
    })
  })