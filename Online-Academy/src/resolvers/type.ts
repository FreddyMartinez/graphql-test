import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const type: IResolvers = {
	Student: {
		courses: (parent) => {
			return parent.courses.map((course: string) =>
				database.courses.find((c) => c.id === course)
			);
		},
	},
	Course: {
		students: (parent) => {
			return database.students.filter((student) =>
				student.courses.includes(parent.id)
			);
		},
		path: (parent) => `https://udemy.com${parent.path}`,
	},
};

export default type;
