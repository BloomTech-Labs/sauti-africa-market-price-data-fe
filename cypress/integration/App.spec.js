describe("Client tests", () => {
  it("renders without crashing", () => {
    cy.visit("/");
    cy.contains("Hello World"); // delete this dummy test after we write real client code

    /*=== Add more tests here ===*/
  });
});
