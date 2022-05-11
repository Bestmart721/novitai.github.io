export async function postLoader(postSlug) {
  const post = await import(`~/contents/career/${postSlug}.md`)
  post.attributes.slug = postSlug
  post.attributes.date = new Date(post.attributes.date)
  post.attributes.link = `/career/${postSlug}/`
  post.attributes.mins = Math.round(post.body.length / 1250) || 1

  // Extract table of contents from post
  post.attributes.tableOfContents = (() => {
    let fragment
    if (process.server) {
      const { JSDOM } = require('jsdom')
      fragment = JSDOM.fragment(`<div>${post.html}</div>`).firstChild
    } else {
      fragment = document.createElement('div')
      fragment.innerHTML = post.html
    }

    const tableOfContents = fragment.querySelector('.table-of-contents')
    return tableOfContents && tableOfContents.outerHTML
  })()

  return post
}

export const postSlugs = [
  'senior-full-stack-dev',
  'junior-machine-learning-engineer',
  'sales-associate',
  'senior-embedded-software-eng',
  'graduate-scheme'

]
