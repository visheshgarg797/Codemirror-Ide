import Data from "./Data";
const keywords = new Set();
const operators = new Set();
const advancedOperators = new Set();
const advancedOperatorsOptions = new Set();

Data.keywords.forEach((item) => {
  keywords.add(item.label);
});

Data.operators.forEach((item) => {
  operators.add(item.apply.substr(0, item.apply.length - 1));
});

Data.city.forEach((items) => {
  advancedOperatorsOptions.add(items.label);
});
Data.country.forEach((item) => {
  advancedOperatorsOptions.add(item.label);
});
Data.fruit.forEach((item) => {
  advancedOperatorsOptions.add(item.label);
});
Data.author.forEach((item) => {
  advancedOperatorsOptions.add(item.label);
});
Data.advancedOperators.forEach((item) => {
  advancedOperators.add(item.label);
});

export { keywords, operators, advancedOperators, advancedOperatorsOptions };
