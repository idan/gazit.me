Add an Astro layout named after a collection slug to replace its standard
landing page. For example:

  src/layouts/writing-collections/the-second-domino.astro

Custom layouts receive these props:

  slug, title, description, collection, posts, subcollections, hasCustomIntro

The rendered body of the collection's _collection.mdx file is provided as a
named `intro` slot. A custom layout is responsible for its complete page shell;
it can use WritingShell.astro or provide entirely custom markup.
