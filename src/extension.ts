import { commands, ExtensionContext } from 'vscode';
import { generateJestTemplateFile } from './jest/generateJestTemplateFile';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('sirosuzume.create.jestTemplate', generateJestTemplateFile),
  );
}

export function deactivate() {}
