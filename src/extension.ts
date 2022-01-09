// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext } from 'vscode';
import { renameUnnamedTestingFile } from './renameUnnamedTestingFile';

export function activate(context: ExtensionContext) {
  const disposable = commands.registerCommand(
    'automatic-jest-generator.generate',
    renameUnnamedTestingFile,
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
