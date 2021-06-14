import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

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

const notFoundStudent = {
	id: -1,
	name: "not found",
	email: "",
};

const notFoundCourse = {
	id: -1,
	title: "Course not found",
	description: "",
	clases: -1,
	time: 0,
	logo: "",
	level: "ALL",
	path: "",
	teacher: "",
	reviews: [""],
};

export default query;
