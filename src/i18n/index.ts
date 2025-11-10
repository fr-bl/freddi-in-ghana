export type TranslationKey = keyof typeof defaultTranslations;
export type Translations = Record<Language, Record<TranslationKey, string>>;

export enum Language {
  German = "de",
  English = "en",
}

export const defaultLanguage = Language.German;

export const defaultTranslations = {
  "head.title.text": "Freddi in Ghana",
  "head.author.href": "https://frederick.blaes.ing",
  "head.license.href": "#lizenz",

  "header.home.text": "Freddi in Ghana",
  "header.home.href": "/#",
  "header.change-language.text": "Sprache ändern",
  "header.blog.text": "Blog",
  "header.blog.href": "/#blog",
  "header.faq.text": "FAQ",
  "header.faq.href": "/#faq",

  "footer.license.id": "lizenz",
  
  "donate.text": "Jetzt Spenden",
  "donate.href": "/#spenden",
  "wip.text": "In Arbeit",

  "home.abstract.about-me.url": "https://frederick.blaes.ing",
  "home.blog.id": "blog",
  "home.faq.id": "faq",
} as const;

export const translations: Translations = {
  [Language.German]: defaultTranslations,
  [Language.English]: {
    ...defaultTranslations,
    "head.license.href": "#license",
    "header.home.href": "/en/#",
    "header.blog.href": "/en/#blog",
    "header.faq.href": "/en/#faq",
    "header.change-language.text": "Change language",
    "footer.license.id": "license",
    "donate.text": "Donate Now",
    "donate.href": "/en/#donating",
    "wip.text": "Work in progess",
  }
}
