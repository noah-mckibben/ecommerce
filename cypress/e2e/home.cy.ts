describe('Home Page', () => {
  it('should display the welcome message', () => {
    cy.visit('/src/app/app.component.html');
    cy.contains('Welcome to Your Angular App').should('be.visible');
  });
});
