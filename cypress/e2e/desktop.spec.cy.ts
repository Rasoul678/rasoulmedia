describe("desktop test", () => {
  context("720p resolution", () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1280, 720);
    });

    it("displays full header", () => {
      cy.visit("http://localhost:3000/");
      cy.get("button.reactour__close").click();
      cy.get('[data-test-id="apps"]').click();
    });
  });
});
