export async function careerLoader(careerSlug) {
  const career = await import(`~/contents/career/${careerSlug}.md`)
  career.attributes.slug = careerSlug
  career.attributes.date = new Date(career.attributes.date)
  career.attributes.link = `/career/${careerSlug}/`
  career.attributes.mins = Math.round(career.body.length / 1250) || 1

  // Extract table of contents from career
  career.attributes.tableOfContents = (() => {
    let fragment
    if (process.server) {
      const { JSDOM } = require('jsdom')
      fragment = JSDOM.fragment(`<div>${career.html}</div>`).firstChild
    } else {
      fragment = document.createElement('div')
      fragment.innerHTML = career.html
    }

    const tableOfContents = fragment.querySelector('.table-of-contents')
    return tableOfContents && tableOfContents.outerHTML
  })()

  return career
}

export const careerSlugs = [
  'senior-android-dev',
  'operations-lead',
  'junior-android-dev',
  'senior-full-stack-dev',
  'senior-embedded-software-eng',
  'graduate-scheme',
  'senior-robotics-eng',
]
