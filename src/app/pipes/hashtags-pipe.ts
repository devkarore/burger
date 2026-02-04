import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashtags',
  standalone: true
})
export class HashtagsPipe implements PipeTransform {

  transform(text: string | null | undefined): string {
    if (!text) return '';
    return text.replace(/(#\S+)/g, '<span class="highlight">$1</span>');
  }

}
