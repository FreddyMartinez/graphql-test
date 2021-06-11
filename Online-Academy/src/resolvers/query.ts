import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const query: IResolvers = {
	Query: {
		students(): any {
			return database.students;
		},
		student(__: void, {id}): any {
			return database.students.find(e => e.id === id) || notFoundStudent;
		},
	},
};

const notFoundStudent = {
  id: -1,
  name: "not found",
  email: ""
}

export default query;
