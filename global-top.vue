<template>
  <div></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Add Adobe Fonts (Typekit) link to head
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://use.typekit.net/pbv4lmm.css'
  document.head.appendChild(link)
})
</script>

