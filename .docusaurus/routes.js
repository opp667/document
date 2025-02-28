import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cg_document/blog',
    component: ComponentCreator('/cg_document/blog', '2c9'),
    exact: true
  },
  {
    path: '/cg_document/blog/archive',
    component: ComponentCreator('/cg_document/blog/archive', 'bf3'),
    exact: true
  },
  {
    path: '/cg_document/blog/authors',
    component: ComponentCreator('/cg_document/blog/authors', '98b'),
    exact: true
  },
  {
    path: '/cg_document/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/cg_document/blog/authors/all-sebastien-lorber-articles', '293'),
    exact: true
  },
  {
    path: '/cg_document/blog/authors/yangshun',
    component: ComponentCreator('/cg_document/blog/authors/yangshun', '3f6'),
    exact: true
  },
  {
    path: '/cg_document/blog/first-blog-post',
    component: ComponentCreator('/cg_document/blog/first-blog-post', 'd49'),
    exact: true
  },
  {
    path: '/cg_document/blog/long-blog-post',
    component: ComponentCreator('/cg_document/blog/long-blog-post', 'f38'),
    exact: true
  },
  {
    path: '/cg_document/blog/mdx-blog-post',
    component: ComponentCreator('/cg_document/blog/mdx-blog-post', 'e1e'),
    exact: true
  },
  {
    path: '/cg_document/blog/tags',
    component: ComponentCreator('/cg_document/blog/tags', 'd95'),
    exact: true
  },
  {
    path: '/cg_document/blog/tags/docusaurus',
    component: ComponentCreator('/cg_document/blog/tags/docusaurus', '308'),
    exact: true
  },
  {
    path: '/cg_document/blog/tags/facebook',
    component: ComponentCreator('/cg_document/blog/tags/facebook', 'a0f'),
    exact: true
  },
  {
    path: '/cg_document/blog/tags/hello',
    component: ComponentCreator('/cg_document/blog/tags/hello', '6eb'),
    exact: true
  },
  {
    path: '/cg_document/blog/tags/hola',
    component: ComponentCreator('/cg_document/blog/tags/hola', '036'),
    exact: true
  },
  {
    path: '/cg_document/blog/welcome',
    component: ComponentCreator('/cg_document/blog/welcome', '533'),
    exact: true
  },
  {
    path: '/cg_document/helloWorld',
    component: ComponentCreator('/cg_document/helloWorld', 'dff'),
    exact: true
  },
  {
    path: '/cg_document/markdown-page',
    component: ComponentCreator('/cg_document/markdown-page', 'c7f'),
    exact: true
  },
  {
    path: '/cg_document/docs',
    component: ComponentCreator('/cg_document/docs', '289'),
    routes: [
      {
        path: '/cg_document/docs',
        component: ComponentCreator('/cg_document/docs', '305'),
        routes: [
          {
            path: '/cg_document/docs',
            component: ComponentCreator('/cg_document/docs', 'a63'),
            routes: [
              {
                path: '/cg_document/docs/category/文档1',
                component: ComponentCreator('/cg_document/docs/category/文档1', '7f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cg_document/docs/category/文档2',
                component: ComponentCreator('/cg_document/docs/category/文档2', '8ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cg_document/docs/intro',
                component: ComponentCreator('/cg_document/docs/intro', '674'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cg_document/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/cg_document/docs/tutorial-basics/congratulations', '9bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cg_document/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/cg_document/docs/tutorial-basics/create-a-blog-post', '759'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cg_document/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/cg_document/docs/tutorial-basics/create-a-document', 'edb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cg_document/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/cg_document/docs/tutorial-basics/create-a-page', '224'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cg_document/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/cg_document/docs/tutorial-basics/deploy-your-site', 'ee1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cg_document/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/cg_document/docs/tutorial-basics/markdown-features', '0ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cg_document/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/cg_document/docs/tutorial-extras/manage-docs-versions', '1dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cg_document/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/cg_document/docs/tutorial-extras/translate-your-site', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/cg_document/',
    component: ComponentCreator('/cg_document/', 'd6e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
