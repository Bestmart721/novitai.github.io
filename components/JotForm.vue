<template>
  <iframe 
  id="JotFormIFrame-221302827438958" 
  ref = "iframe"
  title="Form" 
  onload="window.parent.scrollTo(0,0)" 
  allowtransparency="true" 
  allowfullscreen="true" 
  :src="jotform"
  frameborder="0" :style="` min-width: 100%; height:${height}; border:none;`" scrolling="no" 
  > 
  </iframe>
</template>
<script>
  
  export default {
    name: 'ContactForm',
    props: {
      jotform: {
        type: String,
        required: true
      },
      height: {
        type: String,
        default: '700px'
      }
    },
  }
</script>

