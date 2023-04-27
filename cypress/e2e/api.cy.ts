/// <reference types="cypress" />

describe('Check https://api.publicapis.org/entries request', () => {
  it('Get 200 status', () => {
    cy.request({
      method: 'GET',
      url: `https://api.publicapis.org/entries`,
    }).as('getEntries');

    cy.get('@getEntries').should((response) => {
      expect(response).to.have.property('headers');
    });
  });
});
