<template >
  <div>
    <PageWrapper id="home"  class="  flex justify-center items-center h-screen" >
      <PageHome />
    </PageWrapper>
    <PageWrapper id="services" class="flex justify-center items-center">
        <PageServices />
    </PageWrapper>
    <PageWrapper id="posts" class="flex justify-center items-center h-screen">
          <PagePosts />
    </PageWrapper>
    <!-- <PageWrapper id="about" class="flex justify-center items-center h-screen">
          <PageAbout />
    </PageWrapper> -->
    <PageWrapper id="contact" class="flex justify-center items-center h-screen">
          <PageContact />
    </PageWrapper>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<style lang="scss">
.linear-wipe-text {
  $color1: theme('colors.blue.500');
  $color2: theme('colors.purple.500');
  background: linear-gradient(
    to right,
    $color1 20%,
    $color2 40%,
    $color2 60%,
    $color1 80%
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 20s ease infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}
</style>
