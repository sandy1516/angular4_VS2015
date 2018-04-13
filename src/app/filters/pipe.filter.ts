import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class ValueArrayPipe implements PipeTransform {
	transform(objects : any = []) {
    return Object.values(objects);
  }
}