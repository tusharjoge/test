Feature: Product listing -> filter by colour

  As a customer
  I would like to refine my search results based on color
  So that I can view the products of my liking

  @example
  Scenario: Example scenario
    When I am on the landing page
    Then I can see logo in navigation bar

  @applyOneFilter
  Scenario: Customer filters by colour
    Given I am on the landing page
    And I am viewing product list tops
    And I filter the product list
    And I filter by option "Colour"
    And I select colour "Black"
    When I apply these filters
    Then Filter button has 1 filter
    And Filter returns a product list

  @selectMultipleColours
  Scenario: Customer filters by multiple colours
    Given I am on the landing page
    And I am viewing product list tops
    And I filter the product list
    And I filter by option "Colour"
#    And I select colour "White"
    And I select colour "Black"
    When I apply these filters
    Then Filter button has 1 filter
    And Filter returns a product list

  @clearFilters
  Scenario: Customer clears colour filters
    Given I am on the landing page
    And I am viewing product list tops
    And I filter the product list
    And I filter by option "Colour"
    And I select colour "White"
    And I clear all filters
    When I apply these filters
    Then Filter button has no filters
    And Filter returns a product list
