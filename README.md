# NRD-Starter-App
The "Nerd Starter App" may not have any practical value, however I wanted a way to initialise multiple app frameworks and languages with an example as I dive deeper in different directions over time and also dive deeper into Turbo as a repository management tool for growingly complex scenarios. As such, some pre-requisite installations are assumed:
- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) (or a node version manager with NodeJS >=20 installed) with [pnpm](https://pnpm.io/installation) enabled
- [rbenv](https://github.com/rbenv/rbenv)
  - This allows us to get Ruby on Rails 7
- [Python 3.12](https://www.python.org/downloads/)
  - Note I use [Mamba](https://github.com/conda-forge/miniforge/releases/tag/24.3.0-0) to create an environment here for development
- [Scala Build Tool (sbt)](https://www.scala-sbt.org/1.x/docs/offline/Setup.html)

# Built on top the Turborepo starter

This is built on top of the official starter Turborepo.

## Using this example

Run the following command:

```sh
pnpm install
pnpm dev
```

## What's inside?

The original Turborepo included the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
  - runs on port 3000
- `web`: another [Next.js](https://nextjs.org/) app
  - runs on port 3001
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).
#### Additional Apps and Packages
- `blog`: A sample [Ruby on Rails](https://rubyonrails.org/) 7.1 web app
  - runs on port 3002
- `sample-api`: A Sample API using [NestJS](https://nestjs.com/), a progressive Node.js framework for building efficient, reliable and scalable server-side applications
  - runs on port 3003
- `sample-play-framework`: A sample API using the Play framework that makes it easy to build web applications with Java & Scala
  - runs on port 3004
- `sample-storybook`: A [Storybook](https://storybook.js.org/) frontend workshop for building UI components and pages in isolation, this example that works with NextJS
  - app will run on port 3005
  - storybook will run on port 3006
- `sample-fast-api`: A sample API using the Python-based FastAPI framework, example app
  - runs on port 3007

### Utilities

This Turborepo has some additional tools already setup for you:
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd nrd-starter-app
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd nrd-starter-app
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd nrd-starter-app
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
