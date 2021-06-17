import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnlineAcademyFront';
  constructor(private apollo: Apollo) { 
    this.apollo.query({
      query: gql`{
        GenreCollection
      }`,
    }).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
