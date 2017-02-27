import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { mount, render, shallow } from 'enzyme';
import { List } from 'immutable';
import Voting  from '../../src/components/Voting';
import {expect} from 'chai';

describe('Voting', () => {

  it('disables buttons when user has voted', () => {
    const wrapper = mount(
              <Voting pair={["Trainspotting", "28 Days Later"]} />
            );
    const buttons = wrapper.find('button');
    expect(buttons.length).to.equal(2)
  });

  it('renders just the winner when there is one', () => {
    const wrapper = mount(
      <Voting winner="Trainspotting" />
    );
    const buttons = wrapper.find('button');
    expect(buttons.length).to.equal(0);
    expect(wrapper.ref('winner').text()).to.contain('Trainspotting');
  });

  it('renders as a pure component', () => {
    const pair = ['Trainspotting', '28 Days Later'];
    let wrapper = mount(
      <Voting pair={pair} /> 
    );

    let firstButton = wrapper.find('button').first();
    expect(firstButton.text()).to.equal('Trainspotting');

    pair[0] = 'Sunshine';
    wrapper = mount(
      <Voting pair={pair} />
    );
    let first = wrapper.find('button').first();
    expect(first.text()).to.equal('Sunshine');
  });

  it('does update DOM when prop changes', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    let wrapper = mount(
      <Voting pair={pair} /> 
    );

    let firstButton = wrapper.find('button').first();
    expect(firstButton.text()).to.equal('Trainspotting');

    const newPair = pair.set(0, 'Sunshine');
    wrapper = mount(
      <Voting pair={newPair} /> 
    );
    let first = wrapper.find('button').first();
    expect(first.text()).to.equal('Sunshine');
  });
});