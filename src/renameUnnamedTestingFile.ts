import { renameSync } from 'fs';
import { commands, Uri, window } from 'vscode';
import { buildNewTestFileName } from './buildNewTestFileName';
import { findTestingFunctionName } from './findTestingFunctionName';
import { pickExtensionOfFile as pickExtensionFromFileName } from './pickExtensionOfFile';
import { pickFileDirectoryFromDocumentFileName } from './pickFileDirectoryFromDocumentFileName';
import { pickFileNameFromDocumentFileName } from './pickFileNameFromDocumentFileName';

export async function renameUnnamedTestingFile() {
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

  await commands.executeCommand('vscode.open', Uri.file(newTestFileName));

  window.showInformationMessage(`'${document.fileName}' renamed to '${newTestFileName}'`);
}
