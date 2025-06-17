# InterfaceStrapi

[![npm version](https://badge.fury.io/js/@poolzfinance%2Fstrapi.svg)](https://www.npmjs.com/package/@poolzfinance/strapi)

A React-based interface library for interacting with Strapi CMS backend, specifically designed for Poolz Finance applications. This package provides a set of hooks and utilities to easily fetch and manage content from your Strapi CMS instance.

## Features

- 🎣 React hooks for fetching various content types
- 🔄 Apollo Client integration with caching
- 📱 TypeScript support with generated types
- 🚀 Modern bundle formats (ESM, CJS, UMD)
- 💾 Persistent cache support
- 🎯 Optimized for Poolz Finance content structure

## Installation

```bash
# Using npm
npm install @poolzfinance/strapi

# Using yarn
yarn add @poolzfinance/strapi

# Using pnpm
pnpm add @poolzfinance/strapi
```

## Usage

1. Wrap your application with the Strapi Provider:

```tsx
import StrapiProvider from "@poolzfinance/strapi"

function App() {
  return (
    <StrapiProvider>
      {/* Your app components */}
    </StrapiProvider>
  )
}
```

2. Use the provided hooks in your components:

```tsx
import { useHeader, useFooter } from "@poolzfinance/strapi";

function MyComponent() {
  const { data: headerData } = useHeader();
  const { data: footerData } = useFooter();

  return (
    // Use the data in your component
  );
}
```

## Available Hooks

The library provides various hooks for fetching different types of content:

- `useHeader` - Fetch header content
- `useFooter` - Fetch footer content
- `useAccount` - Fetch account-related content
- `useMain` - Fetch main page content
- `usePageInfos` - Fetch page information
- `useVaultFaqs` - Fetch vault FAQs
- And many more...

## Development

```bash
# Install dependencies
pnpm install

# Generate GraphQL types
pnpm compile

# Build the package
pnpm build

# Run tests
pnpm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC License

## Links

- [GitHub Repository](https://github.com/The-Poolz/InterfaceStrapi)
- [NPM Package](https://www.npmjs.com/package/@poolzfinance/strapi)
- [Poolz Finance](https://poolz.finance/)
