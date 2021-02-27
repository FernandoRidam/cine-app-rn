import React from 'react';

import {
  render,
} from '@testing-library/react-native';

import {
  Loading,
} from './src/components/Loading/index';

test('renders loading', () => {
  const { getByText } = render(<Loading loading={ true }/>);

  const waitText = getByText('components.loading.wait');

  expect( waitText )
    .not
    .toBeNull();
});
