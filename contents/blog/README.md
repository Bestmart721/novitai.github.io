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

After creating the Markdown file for the blog post, i.e. `my-blog-post.md`, add its name to `index.js` (also in this folder):

```js
export const postSlugs = [
  'old-blog-post1',
  'old-blog-post2',
  'old-blog-post3',
  'old-blog-post4',
  'my-blog-post'
]
```

## Add apply link to career posts

Add the following attribute between the dashed lines at the start of job posts ex:
```yaml
---
title: "job"
description: "this is a job"
date: 2022-06-27 17:55:00 -0000
background: '/img/posts/05.jpg'
applyLink: "<apply_here_button_link>"
---
```
