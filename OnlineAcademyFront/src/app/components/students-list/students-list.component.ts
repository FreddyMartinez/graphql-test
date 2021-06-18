import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: any[];
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.query({
      query: gql`
        {
          students {
            id
            email
          }
        }
      `,
    }).subscribe(({data}) => {
      console.log(data);
      this.students = data['students'];
    }, err => {
      console.log(err);
    });
  }

}
