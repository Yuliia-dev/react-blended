import * as locale from "./locales";

const getLanguageFromBrawser = () => {
  let lang = window.navigator.language.substring(0, 2);

  if (Object.keys(locale).includes(lang)) {
    return lang;
  } else {
    return "ru";
  }
};
const brawserLang = getLanguageFromBrawser();

const localizations = locale[brawserLang];

export const localize = (key) => {
  return localizations[key] || key;
};
