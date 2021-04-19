import React from "react";
import { mount, shallow } from "enzyme";

import { MessageForm } from "./MessageForm";

test('MessageForm call handleChange', () => {
  const mockHandleChange = jest.fn();
  const form = shallow(<MessageForm/>);

  const instance = form.instance();

  instance.handleChange = mockHandleChange;
  instance.handelKey({ ctrlKey: true, keyCode: 13 });

  expect(mockHandleChange.mock.calls.length).toBe(1);
});

test('MessageForm change state', () => {
  const form = shallow(<MessageForm/>);
  const instance = form.instance();

  instance.handleInputChange({
    target: {
      name: 'author',
      value: 'John'
    }
  });

  expect(form.state('author')).toBe('John');
})