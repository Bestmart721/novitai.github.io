<template>
  <main class="policies">
    <h1 class="policies__title">
      Our <span class="policies__title--primary">Policies</span>
    </h1>
    <ol class="policies__policies">
      <!-- nuxtlinks to policies -->
      <li class="policies__policy" v-for="policy in policies" :key="policy">
        <a class="contact__social-icon" :href="policy">
            <pdf-icon title="PDF" />
            <span class="contact__social-text">{{ policy.replace('.pdf','').split('-').join(' ') }}</span>
        </a>
      </li>

    </ol>
  </main>
</template>

<script>
import PdfIcon from 'icons/FilePdfBox'

export default {
  components: {
    PdfIcon
  },
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
}

.contact__social-icon {
  &:hover,
  &:focus {
    color: $color__primary;
  }

  &:hover {
    .contact__social-text {
      @include link--active;
    }
  }

  span {
    margin-right: 1rem;
  }

  svg {
    height: 2rem;
    width: 2rem;
  }

  &[href*='devpost.com'] {
    svg {
      transform: rotate(90deg);
    }
  }
}

.contact__social-text {
  @include link;
}
</style>
