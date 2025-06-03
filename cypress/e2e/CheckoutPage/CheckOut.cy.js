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
      cy.get('#coupon_code').type('test01');
      cy.get('.apply_coupon_btn').click();
      cy.wait(2000);
      cy.get('.coupon_remove').click();
      cy.get('.btn-block').eq(1).click();
      cy.wait(2000);
      cy.get('.form-check-label').eq(1).click();
      cy.wait(2000);
      cy.get('.form-check-label').eq(2).click();
      cy.wait(2000);
      cy.get('.form-check-label').eq(0).click();
      cy.get('.form-control').eq(3).type('Sanchit Singh Narwat');
      cy.get('.form-control').eq(4).type('sanchit@annexlogics.com');
      cy.get('.form-control').eq(5).select('+91');
      cy.get('.form-control').eq(6).type('9875018888');
      cy.get('.custom-control-label').eq(0).click();
      cy.wait(2000);
      cy.get('#address').type('B-3, T C Nagar, Prithviraj Nagar (B Sector),302012');
      cy.wait(2000);
      cy.get('#bil_country').select('India');
      cy.wait(2000);
      cy.get('#bil_city').type('Jaipur');
      cy.wait(2000);
      cy.get('#bil_state').type('Rajasthan');
      cy.wait(2000);
      cy.get('#coupon_code').type('test01');
      cy.get('.apply_coupon_btn').click();
      cy.get('#place_order_btn_main').click();
    })
  })