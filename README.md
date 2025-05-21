# Next.js Portfolio Template

A modern portfolio template built with Next.js, featuring dark/light theme support and internationalization (i18n).

## Features

- **Next.js 15** - Built on the latest Next.js framework
- **App Router** - Uses the new App Router pattern
- **Tailwind CSS** - For styling and responsive design
- **shadcn/ui** - Beautiful UI components
- **Dark/Light Themes** - Built-in theme support via next-themes
- **Internationalization** - Multi-language support using next-intl (English and Spanish included)
- **TypeScript** - Type-safe code
- **Responsive Design** - Works on all devices

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

- `src/app/[locale]` - Contains the main application pages with i18n routing
- `src/components` - Reusable UI components
- `src/messages` - Language files for i18n
- `src/lib` - Utility functions and shared code

## Customization

1. **Theme**: Modify the colors in `src/app/globals.css`
2. **Content**: Update the content in the language files under `src/messages`
3. **Components**: Add or modify components in the `src/components` directory
4. **Pages**: Modify or add pages in `src/app/[locale]` directory

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)

## Deployment

The easiest way to deploy this portfolio is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.
