import React from 'react';

// Translation
import i18next from 'i18next';
import { I18nextProvider as Origin } from 'react-i18next';
import common_id from '../translations/id/common.json';
import common_en from '../translations/en/common.json';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  defaultNS: 'common', // 'common' is our custom namespace
  resources: {
    en: {
      common: common_en,
    },
    id: {
      common: common_id,
    },
  },
});

const I18nextProvider = ({ children }: { children: React.ReactChild }) => {
  return <Origin i18n={i18next}>{children}</Origin>;
};

export default I18nextProvider;
