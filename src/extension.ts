// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext } from 'vscode';
import { insertTestSnippet } from './insertTestSnippet';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('editor.create.jest', insertTestSnippet),
  );
}

export function deactivate() {}
