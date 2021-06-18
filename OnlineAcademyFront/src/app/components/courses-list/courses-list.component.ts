import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: any[];
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.query({
      query: gql`
        {
          courses {
            id
            title
            time
          }
        }
      `,
    }).subscribe( ({data}) => {
      console.log(data);
      this.courses = data['courses'];
    }, err => {
      console.log(err);
    });
  }

}
