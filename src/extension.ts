// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext } from 'vscode';
import { generateJestTemplateFile } from './jest/generateJestTemplateFile';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('sirosuzume.create.jestTemplate', generateJestTemplateFile),
  );
}

export function deactivate() {}
