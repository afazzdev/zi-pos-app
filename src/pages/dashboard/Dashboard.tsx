import React from 'react';
// import { useTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';
const DashboardHome = () => {
  const [t] = useTranslation();
  return <div>{t('app.title')}</div>;
};

export default DashboardHome;
