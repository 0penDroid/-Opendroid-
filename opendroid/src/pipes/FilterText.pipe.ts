import { Pipe, PipeTransform } from '@angular/core';
import { CommentDTO } from '../models/comment.dto';

@Pipe({
  name: 'filterText',
})
export class FilterTextPipe implements PipeTransform {
  transform(items: CommentDTO[], search: string): any[] {
    if (!items || !search) {
      return items;
    }
    search = search.toLowerCase();
    return items.filter((item) => item.comment.toLowerCase().includes(search));
  }
}
