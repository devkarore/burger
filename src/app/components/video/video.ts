import { AfterViewInit, Component } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.html',
  styleUrl: './video.scss',
})
export class Video implements AfterViewInit {
  ngAfterViewInit(): void {
    $('.play').on('click', function () {
      const $imagePlay = $('.play');
      $imagePlay.removeClass('animate__animated animate__bounce');
      const play = $imagePlay[0] as HTMLElement;
      play.offsetWidth;
      $imagePlay.addClass('animate__animated animate__bounce');
    });
  }
}
