import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import { Language } from '@material-ui/icons';

import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > *': {
        marginLeft: '.5rem',
      },
    },
    lang: {
      marginLeft: 'auto',
    },
  })
);

const translations = ['en', 'id'];

function TranslationButton() {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState<string>('en');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLang(localStorage.getItem('lang') as string);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <FormControl className={classes.formControl}>
      <Language className={classes.lang} />
      <Select
        labelId='translation-select-label'
        id='translation-select'
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={lang}
        onChange={handleChange}
      >
        {translations.map((translation) => (
          <MenuItem key={translation} value={translation}>
            {translation}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TranslationButton;
