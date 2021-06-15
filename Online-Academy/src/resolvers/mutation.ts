import { IResolvers } from 'graphql-tools'
import { database } from '../data/data.store';
import { notFoundCourse } from './notFoundData';
// import { writeFile } from 'fs'

const mutation: IResolvers = {
  Mutation: {
    newCourse(__: void, { course }): string {
      if (database.courses.some(c => c.title.toLowerCase() === course.title.toLowerCase())) {
        return 'A course with the same title already exist';
      } else
      {
        const newCourse = {
          id: String(Math.max(...database.courses.map(course => parseInt(course.id))) + 1),
          reviews: [],
          ...course
        }
        database.courses.push(newCourse);
        return 'Course was created successfully';
      }
    },
    updateCourse(__: void, { course }): any {
      const index = database.courses.findIndex(c => c.id == course.id);
      if(index != -1) {
        const previous: any = {...database.courses[index]};
        Object.keys(course).forEach( key => {
          previous[key] = course[key];
        });
        database.courses[index] = previous;
        return database.courses[index];
      } else {
        return notFoundCourse;
      }
    },
    deleteCourse(__: void, { id }): string {
      const index = database.courses.findIndex(c => c.id === id);
      if(index != -1) {
        database.courses.splice(index, 1);
        return `Course ${id} deleted`;
      } {
        return `Course ${id} not found`;
      }
    } 
  }
}

export default mutation;