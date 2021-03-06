import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  providers: [AuthorService]
})

export class AuthorComponent {
  title = 'Author list';
  authors: string[];
  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthor();
  }

}
