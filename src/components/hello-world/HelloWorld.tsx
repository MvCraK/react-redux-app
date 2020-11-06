import * as React from 'react';
import { useTranslation } from 'react-i18next';
import LANG from 'locale';

const HelloWorld = () => {
  const { t } = useTranslation();
  const message = t(LANG.LANG_HELLO_WORLD);

  return (
    <div>{message}</div>
  )
}

export default HelloWorld;