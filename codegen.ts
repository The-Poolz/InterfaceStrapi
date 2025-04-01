import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "https://data.poolz.finance/graphql",
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client-preset",
      config: {
        strict: true,
        useTypeImports: true,
        skipTypename: true,
        documentVariableExport: "DocumentNode"
      }
    }
  },
  ignoreNoDocuments: true
}

export default config
