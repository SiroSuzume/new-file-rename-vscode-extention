// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { renameSync } from 'fs';
import { commands, ExtensionContext, window } from 'vscode';
import { buildNewTestFileName } from './buildNewTestFileName';
import { findTestingFunctionName } from './findTestingFunctionName';
import { pickExtensionOfFile as pickExtensionFromFileName } from './pickExtensionOfFile';
import { pickFileDirectoryFromDocumentFileName } from './pickFileDirectoryFromDocumentFileName';
import { pickFileNameFromDocumentFileName } from './pickFileNameFromDocumentFileName';

export function generateTask(): void {
  const { activeTextEditor } = window;
  if (!activeTextEditor) {
    return;
  }

  const document = activeTextEditor.document;
  const fileName = pickFileNameFromDocumentFileName(document.fileName);
  const extension = pickExtensionFromFileName(fileName);
  const pathName = pickFileDirectoryFromDocumentFileName(document.fileName);

  if (!/^newFile\.tsx?$/.test(fileName)) {
    window.showInformationMessage(`'${fileName}' is not unnamed file.`);
    return;
  }

  const text = document.getText();

  const testingFunctionName = findTestingFunctionName(text);

  if (!testingFunctionName) {
    window.showInformationMessage(`cannot parse testing function name`);
    return;
  }

  const newTestFileName = buildNewTestFileName(pathName, testingFunctionName, extension);
  renameSync(document.fileName, newTestFileName);

  window.showInformationMessage(`'${document.fileName}' renamed to '${newTestFileName}'`);
}

export function activate(context: ExtensionContext) {
  const disposable = commands.registerCommand(
    'automatic-jest-generator.generate',
    generateTask,
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
