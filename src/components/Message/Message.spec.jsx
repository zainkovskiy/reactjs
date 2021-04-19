import React from "react";
import { Message } from "./Message";

import renderer from "react-test-renderer";
import { shallow } from "enzyme";

test("Message show message", () => {
  const tree = renderer
    .create(<Message author={"test1"} text={"test1"}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Message show div", () => {
  const header = shallow(<Message author={"test1"} text={"test1"}/>);
  const divs = header.find('div');

  expect(divs.length).toBe(3);
})