/// <reference types="Cypress"/>

describe("testing Indian cities list", () => {
    beforeEach(() => {
      cy.visit("http://localhost:8080");
    });
    it("should check length of ordered list of cities", () => {
      cy.get("ol").should("have.length", 1);
    });
    it("should check the key of ordered list", () => {
      cy.get("ol").get("#location").should('be.visible');
    });
    it("should check the key of relative list", () => {
      cy.get("ol").get("li").eq(0).get("#location1").should('be.visible');
    });
    it("should check the key of relative list", () => {
        cy.get("ol").get("li").eq(15).get("#location16").should('be.visible');
      });
  });
  
