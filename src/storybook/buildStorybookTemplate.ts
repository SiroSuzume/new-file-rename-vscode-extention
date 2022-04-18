export function buildStorybookTemplate(componentName: string, fileName: string): string {
  return `import React from 'react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ${componentName} } from './${fileName}';

export default {
  component: ${componentName}
} as ComponentMeta<typeof ${componentName}>

const Primary: ComponentStoryObj<typeof ${componentName}> = {
  args: {

  }
}`;
}
