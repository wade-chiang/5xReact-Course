import data from './data/data.json';
import {
  getFilterResult,
  getFilterStickyBarPipe,
} from './utils/functionalProgramming';

console.log('hi , jest');

console.log(getFilterResult(data));

console.log(getFilterStickyBarPipe(data));
