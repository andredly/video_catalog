describe('App E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully loads', () => {
    cy.visit('/');
  });

  it('successfully loads', () => {
    cy.visit('/');
    cy.get('.result-body');
  });

  it('Search field is empty', () => {
    cy.get('.main .input-group .form-control')
      .should('have.text', '');
  });

  it('Search by buttons has title: TITLE and GENRE and group button title: SEARCH BY', () => {
    cy.get('.search-container .btn-group .first-button')
      .should('have.text', 'TITLE');
    cy.get('.search-container .btn-group .second-button')
      .should('have.text', 'GENRE');
    cy.get('.search-container .type-search-title')
      .should('have.text', 'SEARCH BY');
  });

  it('Sort by buttons has title: RELEASE_DATA and RATING and group button title: SORT BY', () => {
    cy.get('.resultPanel .btn-group .first-button')
      .should('have.text', 'RELEASE_DATA');
    cy.get('.resultPanel .btn-group .second-button')
      .should('have.text', 'RATING');
    cy.get('.resultPanel .type-search-title')
      .should('have.text', 'SORT BY');
  });

  it('Search field has input text', () => {
    const input = 'Mission';
    cy.get('.form-control[name="search"]')
      .type(input)
      .should('have.value', input);
  });

  it('After click to Search button we have some search results', () => {
    const input = 'Mission';
    cy.get('.form-control[name="search"]')
      .type(input);
    cy.get('.search-button')
      .click()
      .get('.result-body .card')
      .should('not.have.length', 0);
    cy.get('.result-count').should((count) => {
      expect(count.text()).not.to.eq('0 movies found');
    });
  });

  it('After clicking to RATING button we have other search results', () => {
    let previousTitle;
    cy.get('.result-body .card-title a').then(($title) => {
      previousTitle = $title.first().text();
      console.log(previousTitle);
    });
    cy.get('.resultPanel .btn-group .second-button')
      .click()
      .get('.result-body .card')
      .should('not.have.length', 0);
    cy.get('.result-count').should((count) => {
      expect(count.text()).not.to.eq('0 movies found');
    });
    cy.get('.result-body .card-title a').should((title) => {
      expect(title.first().text()).not.to.eq(previousTitle);
    });
  });

  it('After click to Search button we do not have any search results', () => {
    const input = 'sdfgsd';
    cy.get('.form-control[name="search"]')
      .type(input);
    cy.get('.search-button')
      .click()
      .get('.result-body .card')
      .should('have.length', 0);
    cy.get('.result-count').should((count) => {
      expect(count.text()).to.eq('0 movies found');
    });
  });
});
