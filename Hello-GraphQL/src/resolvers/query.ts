import { IResolvers } from "@graphql-tools/utils";

const query: IResolvers = {
	Query: {
		hola(): string {
			return "Hola Mundo";
		},
		holaConNombre(__: void, { nombre }): string {
			return `Hola ${nombre}`;
		},
		holaGraphQL(): string {
			return "Hola GraphQL";
		},
	},
};

export default query;