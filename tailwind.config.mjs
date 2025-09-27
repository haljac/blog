/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            lineHeight: '1.75',
            p: {
              marginBottom: '1rem',
            },
            h1: {
              fontSize: '1.5rem',
              fontWeight: '300',
              color: '#111827',
              marginBottom: '1.5rem',
              marginTop: '2rem',
            },
            h2: {
              fontSize: '1.25rem',
              fontWeight: '500',
              color: '#111827',
              marginBottom: '1rem',
              marginTop: '2rem',
            },
            h3: {
              fontSize: '1.125rem',
              fontWeight: '500',
              color: '#111827',
              marginBottom: '0.75rem',
              marginTop: '1.5rem',
            },
            a: {
              color: '#2563eb',
              textDecoration: 'underline',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            blockquote: {
              borderLeftColor: '#d1d5db',
              fontStyle: 'italic',
              color: '#6b7280',
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontFamily: 'ui-monospace, SFMono-Regular, monospace',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
