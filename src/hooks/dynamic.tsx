/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable no-undef */
import {
  FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';

export type DataType = 'list' | 'text' | 'number';
export interface IListData {
  name: string;
  value: string | number;
}
export type optionValue = string | number;
export interface IDropdownOptionData {
    value: optionValue;
    label: string;
}
export type IData =
  | {
      dataType: 'list';
      displayName: string;
      fieldName: string;
      filedPosition: number;
      data: IListData[];
    }
  | {
      dataType: 'text';
      displayName: string;
      fieldName: string;
      filedPosition: number;
    }
  | {
      dataType: 'number';
      displayName: string;
      fieldName: string;
      filedPosition: number;
    }
  | {
      dataType: 'option';
      displayName: string;
      fieldName: string;
      filedPosition: number;
    };

export interface IUseComponentTreeProps {
  data: IData[];
}

export const useDynamic = (
  props: IUseComponentTreeProps,
): JSX.Element[] | undefined => {
  const { data } = props;
  const [component, setComponent] = useState<JSX.Element[]>();

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    const tree = data.map((el) => {
      switch (el.dataType) {
        case 'list':
          const option: IDropdownOptionData[] = el.data.map(
            ({ name: label, value }) => ({ label, value }),
          );
          return (
            <FormControl variant="standard" sx={{ width: '20%' }}>
              <InputLabel>{el.displayName}</InputLabel>
              <Select
                placeholder={el.displayName}
                label={el.displayName}
                variant="outlined"
              >

                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>

          );
        case 'number':
          return (
            <TextField
              id="name-input"
              name={el.displayName}
              label={el.displayName}
              placeholder={el.displayName}
              type="number"
              variant="outlined"
              required
            />
          );
        case 'text':
          return (

            <TextField
              id="name-input"
              name={el.fieldName}
              label={el.displayName}
              placeholder={el.displayName}
              type="text"
              variant="outlined"
              required
            />

          );
        case 'option':
          return (
            <div />
          );
      }
    });

    setComponent(tree);
  }, [data]);

  return component;
};
