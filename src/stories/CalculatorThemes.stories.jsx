import React from 'react';
import Calculator from '../components/Calculator';

export default {
  title: 'Calculator/Themes',
  component: Calculator,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const theme = context.args.theme;
      let bgColor = 'bg-gradient-to-r from-blue-500 to-cyan-500';
      
      if (theme === 'dark') {
        bgColor = 'bg-gray-900';
      } else if (theme === 'light') {
        bgColor = 'bg-gray-100';
      } else if (theme === 'purple') {
        bgColor = 'bg-gradient-to-r from-purple-500 to-pink-500';
      }
      
      return (
        <div className={`min-h-screen w-full flex justify-center items-center ${bgColor}`}>
          <Story />
        </div>
      );
    },
  ],
};

export const DefaultTheme = {
  args: {
    theme: 'default',
  },
};

export const DarkTheme = {
  args: {
    theme: 'dark',
  },
};

export const LightTheme = {
  args: {
    theme: 'light',
  },
};

export const PurpleTheme = {
  args: {
    theme: 'purple',
  },
};