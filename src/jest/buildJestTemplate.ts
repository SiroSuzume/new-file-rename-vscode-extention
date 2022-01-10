import { buildDescribeFromFunctionName } from './buildDescribeFromFunctionName';
import { buildImportFromBaseFile } from './buildImportFromBaseFile';

export function buildJestTemplate(
  functionName: string,
  fileNameWithoutExtension: string,
) {
  return `${buildImportFromBaseFile([functionName], fileNameWithoutExtension)}

${buildDescribeFromFunctionName(functionName)}
`;
}
