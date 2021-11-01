/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchBar, { SearchBarProps } from './index';

export default {
  title: 'components/Search-Bar',
  component: SearchBar,
} as Meta;

const Template: Story<SearchBarProps> = ({ placeholder }: SearchBarProps) => <SearchBar placeholder={placeholder} />;

export const Search = Template.bind({});
Search.args = {
  placeholder: 'Search here',
};
