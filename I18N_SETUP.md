# Steirarein Multi-Language Setup

This document explains the internationalization (i18n) implementation for the Steirarein website.

## Languages Supported

- **German (de)** - Default language
- **English (en)**
- **Hungarian (hu)**

## How It Works

### Routing Structure

The app uses locale-based routing with the following structure:

- `/de` - German version
- `/en` - English version
- `/hu` - Hungarian version
- `/` - Redirects to `/de` (default)

### Key Files

1. **`i18n.ts`** - Main configuration file that defines available locales and loads translation messages
2. **`middleware.ts`** - Handles locale detection and routing
3. **`messages/[locale].json`** - Translation files for each language
4. **`app/[locale]/layout.tsx`** - Locale-specific layout wrapper
5. **`components/LanguageSelector.tsx`** - Language switcher dropdown

### Translation Files

All text content is stored in JSON files under `/messages/`:

- `de.json` - German translations
- `en.json` - English translations
- `hu.json` - Hungarian translations

### Using Translations in Components

Components use the `useTranslations` hook from `next-intl`:

```tsx
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("namespace");

  return <h1>{t("key")}</h1>;
}
```

### Language Selector

A dropdown language selector is displayed in the header. Users can switch between:

- Deutsch (German)
- English
- Magyar (Hungarian)

The selector maintains the current page path when switching languages.

## Adding a New Language

To add a new language:

1. Add the locale code to `i18n.ts`:

   ```ts
   export const locales = ["de", "en", "hu", "xx"] as const;
   ```

2. Update the middleware matcher in `middleware.ts`:

   ```ts
   matcher: ["/", "/(de|en|hu|xx)/:path*"];
   ```

3. Create a new translation file: `/messages/xx.json`

4. Add the language to `LanguageSelector.tsx`:
   ```ts
   const languageNames = {
     // ...
     xx: "Language Name",
   };
   ```

## Development

To run the development server:

```bash
npm run dev
```

Visit:

- `http://localhost:3000/de` for German
- `http://localhost:3000/en` for English
- `http://localhost:3000/hu` for Hungarian

## Notes

- The default language is German (`de`)
- All URLs are locale-prefixed for SEO purposes
- Translation keys are organized by component/section in the JSON files
- The language selector is positioned in the header next to the logo
