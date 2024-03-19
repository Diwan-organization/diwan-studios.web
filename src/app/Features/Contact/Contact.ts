import { Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './Contact.html',
  styleUrls: ['Contact.scss'],
  imports: [],
})
export class ContactComponent {

  ngAfterViewInit() {
    this.Animation.Content();
  }

  Animation = {
    Content: () => {
      const contents = document.querySelectorAll('.content')!;
      contents.forEach(content => {
        // console.log(content);
        content.classList.remove('content-transition');

        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              content.classList.add('content-transition');
              return;
            }
            content.classList.remove('content-transition');
          });
        });

        observer.observe(content);
      })
    },
  }
}
