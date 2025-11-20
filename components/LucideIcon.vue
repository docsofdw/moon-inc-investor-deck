<template>
  <Icon :icon="`lucide:${name}`" :style="{ color: color || '#F7931A', width: size, height: size }" :inline="inline" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  name: string
  color?: string
  size?: string
  inline?: boolean
}

withDefaults(defineProps<Props>(), {
  color: '#F7931A',
  size: '1em',
  inline: false,
})
</script>


