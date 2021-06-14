import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
import { notFoundCourse, notFoundStudent } from "./notFoundData";

const query: IResolvers = {
	Query: {
		students(): any {
			return database.students;
		},
		student(__: void, { id }): any {
			return database.students.find((e) => e.id === id) || notFoundStudent;
		},
		courses(): any {
			return database.courses;
		},
		course(__: void, { id }): any {
			return (
				database.courses.find((course) => course.id === id) || notFoundCourse
			);
		},
	},
};

export default query;
