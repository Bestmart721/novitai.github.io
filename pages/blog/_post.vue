<template>
  <main class="post">
    <post-article :post="post" type="post" />
  </main>
</template>

<script>
import { postLoader } from '~/contents/blog'
import PostArticle from '~/components/PostArticle'

export default {
  components: {
    PostArticle
  },
  async asyncData({ params, error }) {
    try {
      const post = await postLoader(params.post)
      return {
        post: {
          ...post.attributes,
          vue: post.vue
        }
      }
    } catch {
      error({ statusCode: 404, message: 'This post could not be found' })
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://novit.ai${this.post.link}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://novit.ai${this.post.link}/og.png`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.post {
  @include page;

  .comments {
    margin-top: 3rem;

    @media (min-width: $breakpoint--lg) {
      margin-left: math.div(100%, 3);
    }
  }
}
</style>
