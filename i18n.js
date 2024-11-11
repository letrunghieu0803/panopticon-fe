import i18n from "i18next";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import enCommon from "./public/locales/en/common.json";
import enTest from "./public/locales/en/test.json";
import koCommon from "./public/locales/ko/common.json";
import koTest from "./public/locales/ko/test.json";

const resources = {
  en: {
    common: enCommon,
    test: enTest,
  },

  ko: {
    common: koCommon,
    test: koTest,
  },
};

const backendOptions = {
  loadPath: "http://localhost:3000/locales/{{lng}}/{{ns}}.json",
};
i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    backend: backendOptions,
    // resources,
    fallbackLng: "ko",
    load: "languageOnly",
    ns: ["common", "test"],
    defaultNS: "common",
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
    useSuspense: true,
    react: {
      wait: true,
    },
  });
export default i18n;
