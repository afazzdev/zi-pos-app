import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='translation-select-label'>Lang</InputLabel>
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
          <MenuItem value={translation}>{translation}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TranslationButton;
