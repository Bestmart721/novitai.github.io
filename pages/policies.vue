<template>
  <main class="policies">
    <h1 class="policies__title">
      Our <span class="policies__title--primary">Policies</span>
    </h1>
    <ol class="policies__policies">
      <!-- nuxtlinks to policies -->
      <li class="policies__policy" v-for="policy in policies" :key="policy">
        <nuxt-link :to="policy"> {{ policy.replace('.pdf','').split('-').join(' ') }} </nuxt-link>
      </li>

    </ol>
  </main>
</template>

<script>


export default {
  async asyncData() {
    const policies = await ['equality-diversity-inclusion.pdf',
                            'modern-slavery-human-trafficking.pdf',
                            'environmental-management.pdf',
                            'health-and-safety.pdf',
                            ]

    return {
      policies
    }
  },
  head() {
    return {
      title: 'Policies'
    }
  }
}
</script>

<style lang="scss">
.policies {
  $clip-path: polygon(
    0% 30%,
    0% 20%,
    100% 10%,
    100% 20%,
    100% 30%,
    80% 50%,
    100% 80%,
    100% 100%,
    60% 100%,
    0% 70%,
    0% 100%,
    100% 100%,
    100% 20%
  );
  @include page;
  @include dots($clip-path);
}

.policies__title {
  @include title;
}

.policies__policy {
  @include title--primary;

  text-transform: uppercase;
}

.policies__title--primary {
  @include title--primary;
}

.policies__policies {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 3rem;

  @media (min-width: $breakpoint--md) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}
</style>
