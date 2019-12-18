# Next MUI starter

## Stack
- [React](https://reactjs.org)
- [Nextjs](https://nextjs.org/)
- [React Relay](https://relay.dev)
- [Material-ui](http://material-ui.com)
- [Styled components](https://www.styled-components.com)
- [React Intl](https://github.com/formatjs/react-intl)
- [Luxon](https://moment.github.io/luxon)
- [FaunaDB](https://fauna.com)


## Structure

- **pages** - entry points for pages, no components should be here
  - **api** - lambda functions handled by Next.js
- **components** - components are here
- **public** - static files (images, etc.)
- **flow-typed** - Flow type definitions
- **lang** - Translation files
- **utils** - Utils and helpers
- **schema** - GraphQL schema definition
- **scripts** - development scripts
- **jest** - jest configuration files (TODO)

## Development process

**Start in dev mode**
```
yarn dev
```
React relay uses statically compiled graphql queries for the performance reasons,
so to compile them run:
```
yarn relay
```
to keep them up to date continuously run:
```
yarn relay:watch
```
You will need [watchman](https://facebook.github.io/watchman/) for that.

**Build**
```
yarn build
```

**Run built app locally**
```
yarn start
```
