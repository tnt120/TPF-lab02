describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

// new tests
describe('Swiper Gallery Test', function () {
  it('Checks if user can navigate slides with buttons', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom')
    cy.wait(2000);
    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-slide-active').should('contain', 'Italy')
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if description of every slide is displayed', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').get('.card-description').get('h1').should('contain', 'Rome');
    cy.get('.swiper-slide-active').get('.card-description').get('p').should('contain', 'Italy');
    cy.wait(2000);

    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').get('.card-description').get('h1').should('contain', 'London');
    cy.get('.swiper-slide-active').get('.card-description').get('p').should('contain', 'United Kingdom');
    cy.wait(2000);

    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').get('.card-description').get('h1').should('contain', 'Paris');
    cy.get('.swiper-slide-active').get('.card-description').get('p').should('contain', 'France');
  });
});

describe('Swiper Gallery Test', function () {
  const viewports = [
    { dev: 'Desktop', width: 1280, height: 800 },
    { dev: 'Tablet', width: 768, height: 1024 },
    { dev: 'Mobile', width: 375, height: 667 }
  ];

  viewports.forEach(viewport => {
    it(`Checks if slider works on ${viewport.dev}`, function() {
      cy.viewport(viewport.width, viewport.height);
      cy.visit('http://localhost:3000');
      
      cy.get('.swiper-container, .swiper').should('be.visible');

      cy.get('.swiper-button-next').click();
      cy.get('.swiper-slide-active').should('contain', 'United Kingdom')
      cy.wait(2000);
      cy.get('.swiper-button-prev').click();
      cy.get('.swiper-slide-active').should('contain', 'Italy')
    });
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if gallery is visible properly', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-container, .swiper').should('be.visible');

    cy.get('.swiper-slide').should('have.length', 3);

    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom')
    cy.wait(2000);
    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.get('.swiper-slide-active').should('contain', 'Italy')
  });
});
