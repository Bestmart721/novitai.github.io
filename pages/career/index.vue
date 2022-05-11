<template>
  <main class="career">
    <h1 class="career__title">
      Our <span class="career__title--primary">Career</span> Opportunities
    </h1>
    <ol class="career__posts">
      <post-card v-for="post in posts" :key="post.title" :post="post" />
    </ol>
  </main>
</template>

<script>
import { hydrateWhenIdle } from 'vue-lazy-hydration'
import { postLoader, postSlugs } from '~/contents/career'

export default {
  components: {
    PostCard: hydrateWhenIdle(() => import('~/components/PostCard'))
  },
  async asyncData() {
    const posts = await Promise.all(
      postSlugs.map(async (postSlug) => {
        const post = await postLoader(postSlug)
        return {
          ...post.attributes
        }
      })
    )
    posts.sort((postA, postB) => postB.date - postA.date)

    return {
      posts
    }
  },
  head() {
    return {
      title: 'Career'
    }
  }
}
</script>

<style lang="scss">
.career {
  $clip-path: polygon(100% 20%, 70% 30%, 85% 80%, 100% 90%);
  @include page;
  @include dots($clip-path);
}

.career__title {
  @include title;
}

.career__title--primary {
  @include title--primary;
}

.career__posts {
  display: grid;
  grid-gap: 1.5rem;
}
</style>
