import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
      return value.filter(val => val.name.toLowerCase().indexOf(input.toLowerCase()) >= 0);
    } else {
      return value;
    }
  }
}

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input === 'All') {
      return value;
    } else if (input) {
      return value.filter(val => val.category.indexOf(input) >= 0);
    } else {
      return value;
    }
  }
}
