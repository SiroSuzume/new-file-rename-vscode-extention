export function buildStorybookTemplate(componentName: string, fileName: string): string {
  return `import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ${componentName} } from './${fileName}';

export default {
  component: ${componentName}
} as ComponentMeta<typeof ${componentName}>

const Template: ComponentStory<typeof ${componentName}> = (props) => {
  return (
    <${componentName} {...props} />
  );
};

export const Normal = Template.bind({});
Normal.args = {
};
`;
}
