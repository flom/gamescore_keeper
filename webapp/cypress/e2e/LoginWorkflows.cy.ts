describe("LoginPage", () => {
  it("should redirect user when logged in successfully", () => {
    cy.visit("/");

    cy.fixture("credentials").then(
      (credentials: { username: string; password: string }) => {
        cy.get("[name=userName]")
          .type(credentials.username)
          .get("[name=password]")
          .type(credentials.password)
          .get("[type=submit]")
          .click();

        cy.url().should("include", "/groups");
      },
    );
  });

  it("displays error when incorrect credentials are supplied", () => {
    cy.visit("/");

    cy.get("[name=userName]")
      .type("invalid user")
      .get("[name=password]")
      .type("invalid password")
      .get("[type=submit]")
      .click()
      .get("[role=alert]")
      .should("be.visible")
      .url()
      .should("include", "/login");
  });
});
