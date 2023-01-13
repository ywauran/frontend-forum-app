/* eslint-disable react/react-in-jsx-scope */
/**
 * scenario  testing
 *
 * - LoginInput component
 *  - should handle username typing correctly
 *  - should handle password typing correctly
 *  - should call login function when login button is clicked
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle username typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // action
    await userEvent.type(emailInput, 'harkwauran23@gmail.com');

    // assert
    expect(emailInput).toHaveValue('harkwauran23@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, 'HarkeWauran16');

    // assert
    expect(passwordInput).toHaveValue('HarkeWauran16');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    // eslint-disable-next-line no-undef
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'harkwauran23@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'HarkeWauran16');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'harkwauran23@gmail.com',
      password: 'HarkeWauran16',
    });
  });
});
