import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourceContext",
        mappers: {
          Track: "./model#TrackModel",
          Author: "./model#AuthorModel",
          Module: "./model#ModuleModel",
        },
      },
    },
  },
};

export default config;
