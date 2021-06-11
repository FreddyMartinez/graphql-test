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
};

export default type;
