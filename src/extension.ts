import { commands, ExtensionContext } from 'vscode';
import { generateJestTemplateFile } from './jest/generateJestTemplateFile';
import { generateStorybookTemplateFile } from './storybook/generateStorybookTemplateFile';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand(
      'sirosuzume.generate.jestTemplate',
      generateJestTemplateFile,
    ),
    commands.registerCommand(
      'sirosuzume.generate.storybookTemplate',
      generateStorybookTemplateFile,
    ),
  );
}

export function deactivate() {}
