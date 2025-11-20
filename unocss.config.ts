import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      cdn: 'https://esm.sh/',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    'i-lucide-lightbulb',
    'i-lucide-credit-card', 
    'i-lucide-network',
    'i-lucide-bitcoin',
    'i-lucide-building-2',
    'i-lucide-landmark',
    'i-lucide-globe',
    'i-lucide-rocket',
    'i-lucide-store',
    'i-lucide-handshake',
    'i-lucide-banknote',
    'i-lucide-gavel',
    'i-lucide-coins',
    'i-lucide-trending-up',
    'i-lucide-shield-check',
    'i-lucide-award',
  ],
})
