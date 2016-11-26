import React from "react";
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Hello from '../src/hello.js';
import jsdom from 'mocha-jsdom';

jsdom();
describe('<Hello />', () => {
  it('Should return an h1 whith "Hello" string', () => {
      const component = TestUtils.renderIntoDocument(
      <Hello />
    );

    const h1 = TestUtils.findRenderedDOMComponentWithTag(
      component, 'h1'
    );

    expect(h1.textContent).toEqual('Hello');
  });
});
