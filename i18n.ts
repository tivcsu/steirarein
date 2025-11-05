import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["de", "en", "hu"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Use the requested locale or fallback to 'de'
  const validLocale = locales.includes(locale as any) ? locale : "de";

  return {
    locale: validLocale as string,
    messages: (await import(`./messages/${validLocale}.json`)).default,
  };
});
