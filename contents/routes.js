import { projectSlugs } from './services'
import { postSlugs as posts } from './blog'

export default [
  ...projectSlugs.map((projectSlug) => `/services/${projectSlug}/`),
  ...posts.map((postSlug) => `/blog/${postSlug}/`),
]
