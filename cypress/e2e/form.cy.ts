describe('Form Page', () => {
  beforeEach(() => {
    cy.visit('/src/app/components/form/form.component.html');
  });
  it('should submit the form successfully', () => {
    cy.get('input[name="username"]').type('testuser');
    cy.get('button[type="submit"]').click();
    cy.contains('Form submitted successfully!').should('be.visible');
  });
  it('should show validation error if username is empty', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Username is required').should('be.visible');
  });
});
