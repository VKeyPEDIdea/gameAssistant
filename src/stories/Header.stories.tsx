import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '../components/Header';

export default {
	title: 'Components/Header',
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Loto = Template.bind({});
Loto.args = {
	isPlay: true,
	roundCount: 3,
	roundCurrent: 1,
	stage: 4,
	duration: '00:01:23',
};
