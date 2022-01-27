import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text} from 'react-native';
import ListTile from '../../../src/ListTile';
import CenterView from '../CenterView';
storiesOf('ListView', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Normal News Tile', () => (
    <ListTile
      author={'Anuj'}
      image={
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }
      headline={'Headline for the news'}
      desc={'we have a huge discussion'}
    />
  ))
  .add('News Tile Without Headline', () => (
    <ListTile
      author={'Anuj'}
      image={
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }
      headline={''}
      desc={'we have a huge discussion'}
    />
  ))
  .add('News Tile Without Image', () => (
    <ListTile
      author={'Anuj'}
      image={''}
      headline={'Headline for the news'}
      desc={'we have a huge discussion'}
    />
  ));
