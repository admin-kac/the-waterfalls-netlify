# The Waterfalls

Built on Gatsby + Netlify CMS. Follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Repo Structure (To do)

```
┌─ src
│   ├─ components
│   │  └─ MyComponent
│   │     ├─ package.json
│   │     └─ MyComponent.js
│   ├─ views
│   │  └─ MyView
│   │     ├─ package.json
│   │     └─ MyView.js
│   └─ cms
│      ├─ cms.js
│      └─ previews
│         └─ MyPagePreview.js
├─ data
│   ├─ pages
│   │  └─ myPage
│   │     └─ index.md
│   └─ blog
│      └─ 2018-12-25-my-blog-post.md
├─ public
└─ static
   ├─ admin
   │  └─ config.yml
   └─ img
      └─ my-image.png
```

## Gotchas

1. **Localhost admin pulls data from prod**
    + The admin pull it's data from the [production repository](https://github.com/plankguy/the-waterfalls-netlify) to the branch that's defined in [the config](https://github.com/plankguy/the-waterfalls-netlify/blob/master/static/admin/config.yml#L4); even on localhost :(

2. **Localhost site pulls data from local fs**
    + You can edit *.md files locally to see content updates locally, but changes must be pushed to the repository to be viewed in the admin (all envs) and on production site.

3. **Collection folder/file must match locally and in the repo**
    + Changing the "folder" or "file" configuration for a content type will break the hell out of the localhost admin, unless the path change is reflected in the prod repo.

4. **Content data & views sources are defined in several places**
    + Admin config (`/static/admin/config.yml`) requires each collection to define the source "folder"
    + Views are defined in `/gatsby-node.js` in order to compile GraphQL queries

## Prerequisites

- [Node](https://nodejs.org/en/) (Recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Yarn](https://yarnpkg.com/)

### Develop Locally
```
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Debugging
...

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/plankguy/the-waterfalls-netlify)

