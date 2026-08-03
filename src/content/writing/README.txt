Writing content lives here as Markdown or MDX.

Standalone post:
  src/content/writing/my-post.md
  -> /writing/my-post/

Post in a subcollection:
  src/content/writing/foo/my-update.md
  -> /writing/foo/my-update/

Subcollection metadata and introduction:
  src/content/writing/foo/_collection.mdx

A collection's title and description live in that file's frontmatter. The
description is used on /writing, on the collection page, in page metadata,
and in its RSS feed. Add Markdown or MDX below the frontmatter only when the
collection page needs a richer custom introduction; that body replaces the
plain description on the collection page.

The subcollection index and feed are generated at:
  /writing/foo/
  /writing/foo/feed.xml

Required frontmatter:

  ---
  title: My post
  description: A short summary of the post.
  pubDate: 2026-02-20
  ---

Optional fields are updatedDate, heroImage, and draft. Keep posts no more
than one directory deep, and do not give a standalone post the same slug as
a subcollection.
