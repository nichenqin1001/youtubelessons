import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'author-list',
  templateUrl: './author.component.html',
  providers: [AuthorService]
})

export class AuthorComponent {
  title = 'Author list';
  authors;
  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthor();
  }

}
