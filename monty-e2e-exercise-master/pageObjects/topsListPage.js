require('chai').should();
var expect = require('chai').expect;

export const hasProductsTops = () => {
  browser.isVisible(".ProductList-products")
}


export const hasFilter = () => {
  browser.isVisible(".BrandLogo-img")
}


export const selectFilter = () => {
  browser.element(".Button.Filters-refineButton").click()
  browser.waitForVisible(".Refinements-content.is-shown")
}

export const filterBy = (filterName) => {
      browser.element('.Refinements.is-shown div.AccordionGroup.RefinementList > article:nth-child(1)').click();
      //-------------we need to create dynamic css where we can pass filternames such as "Colour", "Size", "Fit"
      // browser.element("//div[@class='RefinementList-accordionHeader']/span[text()='${filterName}']").click();
  }

export const selectColor = (colourName) => {
  browser.element("div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > button:nth-child(1)").click()
//we need to create dynamic css where we can pass color names such as "black", "blue", "brown"
//   browser.element('.RefinementOptions .ValueOption-label > span:contains("${colourName}")').click()
}

export const applyFilter = () => {
//  browser.element("button.Button.Refinements-applyButton").click();
  browser.element("//button[text()='Apply']").click();
}


export const countFilter = (totalFilters) => {
  let countFilters = browser.element(".Filters-refineButton").getText();
  if(totalFilters==='1')
  {
    "Filter (1)".should.be.equals(countFilters);
  }
  else
  {
  "Filter".should.be.equals(countFilters);
  }

}

export const hasResults = () => {
  let productList = browser.elements(".ProductList-products .Product");
  let totalResults = productList.value.length;
  expect(totalResults).to.be.above(0);

}

export const clearFilters = () => {
  browser.element('.Refinements-clearButton').click();
}
