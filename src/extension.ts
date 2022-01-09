// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext } from 'vscode';
import { insertTestSnippet } from './insertTestSnippet';
import { renameUnnamedTestingFile } from './renameUnnamedTestingFile';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('sirosuzume.rename.unnamed', renameUnnamedTestingFile),
  );
  context.subscriptions.push(
    commands.registerCommand('sirosuzume.insert.test-snippet', insertTestSnippet),
  );
}

export function deactivate() {}
