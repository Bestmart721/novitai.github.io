<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <PageNavbar />
      </slot>
      <div class="flex-1 w-full flex flex-col">
        <div
          class=" relative flex-1  w-full h-screen "
        >
          <slot />
        </div>
      </div>
      <div
      class="flex space-x-1 mr-5 mb-4 right-0 bottom-0 z-50 fixed items-center sm:space-x-4"
    >
      <GoTop />
    </div>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
