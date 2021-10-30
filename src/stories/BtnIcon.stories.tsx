import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BtnIcon from '../components/BtnIcon';

export default {
	title: 'Components/BtnIcon',
	component: BtnIcon,
} as ComponentMeta<typeof BtnIcon>;

const Template: ComponentStory<typeof BtnIcon> = args => <BtnIcon {...args} />;

export const DarkStop = Template.bind({});
DarkStop.args = {
	iconName: 'stop',
};
