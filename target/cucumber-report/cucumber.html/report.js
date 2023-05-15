$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WomenProducts.feature");
formatter.feature({
  "line": 1,
  "name": "Women products Test",
  "description": "As a User I can sort products from Filter",
  "id": "women-products-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 21975609700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify that User can sort products by Price",
  "description": "",
  "id": "women-products-test;verify-that-user-can-sort-products-by-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I mouse hover on Women menu",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover on Top menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Jacket menu",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select Price from DropDown list",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify that products are sorted by Price",
  "keyword": "Then "
});
formatter.match({
  "location": "GearProductSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 89408100,
  "status": "passed"
});
formatter.match({
  "location": "WomenProductSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 1245342100,
  "status": "passed"
});
formatter.match({
  "location": "WomenProductSteps.iMouseHoverOnTopMenu()"
});
formatter.result({
  "duration": 201777900,
  "status": "passed"
});
formatter.match({
  "location": "WomenProductSteps.iClickOnJacketMenu()"
});
formatter.result({
  "duration": 1956299500,
  "status": "passed"
});
formatter.match({
  "location": "WomenProductSteps.iSelectPriceFromDropDownList()"
});
formatter.result({
  "duration": 1533007900,
  "status": "passed"
});
formatter.match({
  "location": "WomenProductSteps.verifyThatProductsAreSortedByPrice()"
});
formatter.result({
  "duration": 2210432400,
  "status": "passed"
});
formatter.after({
  "duration": 835232900,
  "status": "passed"
});
});