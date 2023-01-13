/**
 * scenario RegisterInput test
 *
 * - RegisterInput component
 *
 *  - should handle username typing correctly
 *  - should handle email typing correctly
 *  - should handle password typing correctly
 *  - should call register function when register button is clicked
 */

import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';
import '@testing-library/jest-dom';

describe('RegisterInput component', () => {
  it('should handle username typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Name');

    // action
    await userEvent.type(usernameInput, 'harke');

    // assert
    expect(usernameInput).toHaveValue('harke');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // action
    await userEvent.type(emailInput, 'harke@gmail.com');

    // assert
    expect(emailInput).toHaveValue('harke@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, '12345678');

    // assert
    expect(passwordInput).toHaveValue('12345678');
  });

  it('should call register function when register button clicked', async () => {
    // arrange
    // eslint-disable-next-line no-undef
    const mockRegister = jest.fn();
    render(<RegisterInput register={mockRegister} />);
    const usernameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(usernameInput, 'harke');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'harke@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '12345678');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // action
    await userEvent.click(registerButton);

    // assert
    expect(mockRegister).toBeCalledWith({
      name: 'harke',
      email: 'harke@gmail.com',
      password: '12345678',
    });
  });
});
