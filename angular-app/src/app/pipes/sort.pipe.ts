import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(todoCollection: { label: string, status: string }[], isAscending: boolean) {
    return isAscending ? todoCollection.sort((a, b) => {
      if (a.label > b.label) return 1;
      else if (a.label < b.label) return -1;
      return 0
    }) : todoCollection.sort((a, b) => {
      if (a.label > b.label) return -1;
      else if (a.label < b.label) return 1;
      return 0
    })
  }

}
