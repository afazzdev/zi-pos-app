import React from 'react';
import { ButtonGroup as ButtonGroupMaterial, Button } from '@material-ui/core';

type IButtonGroup = {
  data: object[];
  onClick: (event: string) => void;
  isOn: string;
};

const ButtonGroup = ({ data, onClick, isOn }: IButtonGroup) => {
  return (
    <ButtonGroupMaterial
      color='primary'
      aria-label='change-visual-chart'
      disableElevation
    >
      {data.map((el: any) => (
        <Button
          onClick={() => onClick(el.name)}
          variant={isOn === el.name ? 'contained' : 'outlined'}
        >
          {el.child}
        </Button>
      ))}
    </ButtonGroupMaterial>
  );
};

export default ButtonGroup;
