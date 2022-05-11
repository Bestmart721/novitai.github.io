## Add a blog post

Blog posts need to be added to this folder in Markdown format.

### Blog post template:

```m
---
title: "Blog Post Title"
description: "Blog post description/summary/hook"
date: 2022-05-13
---

Blog content in Markdown format...

```

### After post creation

After creating the Markdown file for the blog post, i.e. `my-blog-post.md`, add its name to `index.js`:

```js
export const postSlugs = [
  'old-blog-post1',
  'old-blog-post2',
  'old-blog-post3',
  'old-blog-post4',
  'my-blog-post'
]
```