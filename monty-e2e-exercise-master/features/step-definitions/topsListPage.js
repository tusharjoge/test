import * as homepage from '../../pageObjects/homePage'
import * as topsListPage from '../../pageObjects/topsListPage'

module.exports = function () {

  this.Given(/^I am viewing product list tops$/, function () {
    homepage.gotoProductListTopsPage();
    topsListPage.hasProductsTops();
  })

  this.Given(/^I filter the product list$/,function () {
    topsListPage.selectFilter();
  });

  this.Given(/^I filter by option "([^"]*)"$/,function (filterName) {
    topsListPage.filterBy(filterName);
  });

  this.Given(/^I select colour "([^"]*)"$/,function (colourName) {
    topsListPage.selectColor(colourName);
  });

  this.When(/^I apply these filters$/,function () {
    topsListPage.applyFilter();
  });

  this.Then(/^Filter button has (\d+) filter$/,function (totalFilters) {
    topsListPage.countFilter(totalFilters);
  });
  
  this.Then(/^Filter button has no filters$/,function () {
    const totalFilters = 0;
    topsListPage.countFilter(totalFilters);
  });

  this.Then(/^Filter returns a product list$/,function () {
    topsListPage.hasResults();
  });
  
  this.Given(/^I clear all filters$/,function () {
    topsListPage.clearFilters();
  });

}