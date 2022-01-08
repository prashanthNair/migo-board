/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable no-undef */
import React, { useState, useEffect, useCallback } from 'react';
import {
  FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';

export type DataType = 'list' | 'text' | 'number';
export interface IListData {
  name: string;
  value: string | number;
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
    const tree:JSX.Element[] = data.map((el) => {
      switch (el.dataType) {
        // case 'list':
        // const option: IDropdownOptionData[] = el.data.map(
        //   ({ name: label, value }) => ({ label, value }),
        // );
        // return (
        //   <div>
        //     <label>{el.displayName}</label>
        //     <Dropdown name={el.fieldName} options={option} />
        //   </div>
        // );
        case 'number':
          return (
            <div>

              <FormControl variant="standard" sx={{ ml: 1, mb: 2, width: '100%' }}>
                <InputLabel>{el.displayName}</InputLabel>
                <Select
                  placeholder={el.displayName}
                  label={el.displayName}
                  variant="standard"
                  sx={{ width: '100%' }}
                >

                  <MenuItem value={10}>Ten</MenuItem>
                </Select>
              </FormControl>
            </div>
          );
        case 'text':
          return (
            <FormControl variant="standard" sx={{ ml: 1, mb: 2, width: '100%' }}>
              <InputLabel>{el.displayName}</InputLabel>
              <Select
                placeholder={el.displayName}
                label={el.displayName}
                variant="standard"
                sx={{ width: '100%' }}
              >

                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          );
        case 'option':
          return (
            <FormControl variant="standard" sx={{ ml: 1, mb: 2, width: '100%' }}>
              <InputLabel>{el.displayName}</InputLabel>
              <Select
                placeholder={el.displayName}
                label={el.displayName}
                variant="standard"
                sx={{ width: '100%' }}
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          );
        default:
          return (<div />);
      }
    });

    setComponent(tree);
  }, [data]);

  return component;
};
