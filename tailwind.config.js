/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.ejs', 'src/**/*.svg'],
  theme: {
    extend: {
      colors: {
        // Primary brand colors (from Plasmic tokens)
        'primary': '#5C39EE',
        'secondary': '#B041F0',

        // Text colors
        'police': '#252729',
        'police-titre': '#252729',
        'police-grey': '#374161',

        // Background colors
        'background': '#A2DDC1',
        'background-grey': '#FAFAFA',
        'background-2': '#F2F2F7',
        'background-3': '#A2DDC1',

        // Brand system colors
        'brand': '#2563EB',
        'brand-border': '#93C5FD',
        'brand-foreground': '#EFF6FF',
        'brand-soft': '#DBEAFE',
        'brand-soft-foreground': '#1E3A8A',

        // UI colors
        'button-primary': '#04080F',
        'color-background': '#1A4CE5',

        // Muted colors
        'muted': '#6B7280',
        'muted-border': '#E5E7EB',
        'muted-background': '#F3F4F6',
        'muted-foreground': '#374151',

        // Success colors
        'success': '#16A34A',
        'success-border': '#86EFAC',
        'success-foreground': '#F0FDF4',
        'success-soft': '#DCFCE7',
        'success-soft-foreground': '#14532D',

        // Destructive/Error colors
        'destructive': '#DC2626',
        'destructive-border': '#FCA5A5',
        'destructive-foreground': '#FEF2F2',
        'destructive-soft': '#FEE2E2',
        'destructive-soft-foreground': '#7F1D1D',

        // Neutrals
        'white': '#FFFFFF',
        'black': '#111827',
        'border': '#D1D5DB',
        'input': '#F9FAFB',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'body': ['Instrument Sans', 'Inter', 'sans-serif'],
        'display': ['Montserrat', 'Inter', 'sans-serif'],
      },
      fontSize: {
        // Headings
        'h1': ['52px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-mobile': ['35px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-mobile': ['28px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-mobile': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4-mobile': ['16px', { lineHeight: '1.4', fontWeight: '600' }],
        // Body
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'body-tiny': ['0.75rem', { lineHeight: '1.5' }],
        'nav-categ': ['0.75rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        'content': '1140px',
        'navbar': '1240px',
        'full-width': '81rem',
      },
      spacing: {
        'section': '5rem',
        'section-mobile': '3rem',
      },
      borderRadius: {
        'button': '0.5rem',
        'card': '1rem',
        'card-lg': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'button': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'pulse-dot': 'pulseDot 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(92, 57, 238, 0.4), 0 0 40px rgba(92, 57, 238, 0.2)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(92, 57, 238, 0.6), 0 0 60px rgba(92, 57, 238, 0.3)'
          },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
