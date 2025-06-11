describe('CompleteTest', () => {
    it('CompleteTest', () => {
      cy.visit('https://jewellery.zetupstore.com/');
  
      // Registration
      cy.get('.icon-user').eq(0).click();
      cy.get('.base_color').click();
      cy.get('#name').type('Sanchit');
      cy.get('#register-email').type('sanchit@annexlogic.com');
      cy.get('#register-contact').type('456876545');
      cy.get('#register-password').type('Sanchit#123');
      cy.get('#register-password-2').type('Sanchit#123');
      cy.get('.custom-control-label').click();
      cy.get('.btn-outline-primary-2').eq(4).click();
      cy.get('.base_color').click();
  
      // // Login
      cy.get('#signin-2').find('.form-control').eq(0).type('sanchit@annexlogic.com');
      cy.get('#signin-2').find('.form-control').eq(1).type('Sanchit#123');
      cy.get('.custom-control-label').click();
      cy.get('.btn-outline-primary-2').eq(4).click();
  
      // // Filters
      cy.scrollTo('bottom');
      cy.wait(4000);
      cy.scrollTo('top');
      cy.get('.more-container').click();
      cy.get('.collapsed').eq(0).click();
  
      for (let i = 0; i <= 12; i++) {
        cy.get('#brand').find('.custom-control-label').eq(i).click();
        cy.wait(4000);
        cy.get('#brand').find('.custom-control-label').eq(i).click();
      }
  
      // // Price Slider
      [250, 450, 650].forEach(x => {
        cy.get('.noUi-handle-lower')
          .trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientX: x })
          .trigger('mouseup');
        cy.wait(4000);
      });
  
      cy.get('.breadcrumb-item').eq(0).click();
  
      // // Search Product
      cy.get('#aa-search-input').type('Ruby Pendant Necklace{enter}');
      cy.get('.product-body').find('.product-title').eq(0).click();
      cy.wait(4000);
      cy.get('.icon-plus').click();
      cy.wait(4000);
      cy.get('#btn-cart').click();
      cy.wait(4000);
      cy.get('.icon-shopping-cart').eq(0).click();
      cy.wait(4000);
      cy.get('.btn-outline-primary-2').eq(0).click();
      cy.wait(4000);
      cy.get('.btn-remove').eq(2).click();
      cy.wait(4000);
      cy.get('.breadcrumb-item').eq(0).click();
  
      // Add To Cart Product
      cy.wait(4000);
      cy.get('.border-bottom-0').eq(0).click();
      cy.wait(4000);
      cy.get('#btn-cart').click();
      cy.get('.icon-shopping-cart').eq(0).click();
      cy.wait(4000);
      cy.get('.btn-outline-primary-2').eq(0).click();
      cy.wait(4000);
      cy.get('.btn-remove').eq(2).click();
      cy.wait(4000);
      cy.get('.breadcrumb-item').eq(0).click();
  
      // Add To Wishlist Product
      cy.wait(4000);
      cy.get('.product-4').eq(0).trigger('mouseover').find('.wishlist_187249').eq(0).click({ force: true });
      cy.wait(4000);
      cy.get('.icon-heart-o').eq(0).click();
      cy.get('.btn-remove').last().click();
      cy.wait(4000);
      cy.get('.breadcrumb-item').eq(0).click();
  
      // Product Click
      cy.wait(5000);
      cy.get('.product-body').find('.product-title').eq(0).click();
      cy.get('.icon-plus').click();
      cy.get('#btn-cart').click();
      cy.get('.icon-shopping-cart').eq(0).click();
      cy.get('.btn-outline-primary-2').eq(0).click();
      cy.get('.btn-remove').eq(2).click();
      cy.wait(4000);
      cy.get('.breadcrumb-item').eq(0).click();
  
      // Adding Product to Cart and Wishlist
      [3, 4, 5].forEach(index => {
        cy.wait(4000);
        cy.get('.border-bottom-0').eq(index).click();
      });
  
      [0, 1, 2].forEach(i => {
        cy.wait(4000);
        cy.get('.product-4').eq(i).trigger('mouseover').find('.btn-wishlist').click({ force: true });
      });
  
      cy.wait(4000);
      cy.get('.icon-shopping-cart').eq(0).click();
      cy.wait(4000);
      cy.get('.btn-outline-primary-2').eq(0).click();
      cy.wait(4000);
      cy.get('.btn-remove').eq(8).click();
      cy.wait(4000);
      cy.get('.btn-remove').eq(7).click();
      cy.wait(4000);
      cy.get('.icon-heart-o').eq(0).click();
      cy.get('.icon-close').eq(3).click();
      cy.get('.icon-close').eq(2).click();
      cy.get('.breadcrumb-item').eq(0).click();

      // Review 
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
      cy.wait(2000);
      cy.get('#product-review-link').click();
      cy.get('label[for="star1"]').click({ force: true });
      cy.get('#reply-message').type('Really Nice Product');
      cy.get('.review_btn').click();
      cy.get('.breadcrumb-item').eq(0).click();

  
      // Checkout Product
      cy.get('.border-bottom-0').eq(0).click();
      cy.wait(4000);
      cy.get('#btn-cart').click();
      cy.wait(4000);
      cy.get('.icon-shopping-cart').eq(0).click();
      cy.get('.btn-outline-primary-2').eq(0).click();
      cy.get('#coupon_code').type('test01');
      cy.get('.apply_coupon_btn').click();
      cy.wait(4000);
      cy.get('.coupon_remove').click();
      cy.wait(4000);
      cy.get('.summary-cart').find('.btn-full-width').click({ force: true });
  
      cy.visit('https://jewellery.zetupstore.com/checkout');
      cy.wait(4000);
  
      cy.get('.form-check-label').eq(1).click();
      cy.wait(4000);
      cy.get('.form-check-label').eq(2).click();
      cy.wait(4000);
      cy.get('.form-check-label').eq(0).click();
  
      cy.get('.form-control').eq(3).type('Sanchit Singh Narwat');
      cy.get('.form-control').eq(4).type('sanchit@annexlogics.com');
      cy.get('.form-control').eq(5).select('+91');
      cy.get('.form-control').eq(6).type('9875018888');
      cy.get('.custom-control-label').eq(0).click();
      cy.get('#address').type('B-3, T C Nagar, Prithviraj Nagar (B Sector),302012');
      cy.wait(4000);
      cy.get('#bil_country').select('India');
      cy.wait(4000);
      cy.get('#bil_city').type('Jaipur');
      cy.wait(4000);
      cy.get('#bil_state').type('Rajasthan');
      cy.wait(4000);
      cy.get('#zipcode').type('302012');
      cy.get('#coupon_code').type('test01');
      cy.get('.apply_coupon_btn').eq(0).click();
      cy.get('#place_order_btn_main').click();
      cy.wait(4000);
      cy.get('.breadcrumb-item').eq(0).click();
    });
  });
  