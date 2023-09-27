import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN_US_TRANSLATIONS from "./en_US";
import ZH_CN_TRANSLATIONS from "./zh_CN";

export const LANGUAGE_SELECTIONS = [
  { value: "en_US", label: "English (US)" },
  { value: "zh_CN", label: "Simple Chinese" },
];

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en_US: EN_US_TRANSLATIONS,
  zh_CN: ZH_CN_TRANSLATIONS,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en_US", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
