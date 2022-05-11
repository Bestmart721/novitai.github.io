<template>
  <main class="contact">
    <h1 class="contact__title">
        <span class="contact__title--primary">Contact</span> Us
      </h1>
    <div class="contact__layout">
      
      <div class="contact__text">
        <markdown :markdown="markdown" />
        <div class="contact__social" style="text-align:center">
          <div class="contact__social-item">
            <a class="contact__social-icon" href="mailto:info@novit.ai">
              <email-icon title="Email" />
              <span class="contact__social-text"></span>
            </a>
            <a
              class="contact__social-icon"
              href="https://www.linkedin.com/company/novitai"
            >
              <linkedin-icon title="LinkedIn" />
              <span class="contact__social-text"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="contact__form">
        <contact-form />
      </div>
    </div>
  </main>
</template>

<script>
import EmailIcon from 'icons/EmailVariant'
import LinkedinIcon from 'icons/Linkedin'
import ContactForm from '~/components/ContactForm'

export default {
  components: {
    ContactForm,
    EmailIcon,
    LinkedinIcon
  },
  async asyncData() {
    const { vue } = await import('~/contents/contact.md')
    return {
      markdown: {
        vue
      }
    }
  },
  head() {
    return {
      title: 'Contact'
    }
  }
}
</script>

<style lang="scss">
.contact {
  $clip-path: polygon(100% 35%, 80% 30%, 55% 60%, 100% 95%);
  @include page;
  @include dots($clip-path);
}

.contact__title {
  @include title;
}

.contact__title--primary {
  @include title--primary;
}

.contact__layout {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 3rem;

  @media (min-width: $breakpoint--md) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}

.contact__social {
  margin-top: 2rem;
}

.contact__social-item {
  ~ .contact__social-item {
    margin-top: 0.5rem;
  }
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
