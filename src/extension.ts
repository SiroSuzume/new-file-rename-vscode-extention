// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext } from 'vscode';
import { generateJestTemplate } from './generateJestTemplate';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('sirosuzume.create.jestTemplate', generateJestTemplate),
  );
}

export function deactivate() {}
