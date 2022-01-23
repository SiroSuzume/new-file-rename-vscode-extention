import { buildDescribeFromFunctionName } from './buildDescribeFromFunctionName';
import { buildDescribeFromFunctionNameForHooks } from './buildDescribeFromFunctionNameForHooks';

export function buildJestTemplate(
  functionName: string,
  fileNameWithoutExtension: string,
) {
  const isHooks = functionName.startsWith('use');
  return isHooks
    ? buildDescribeFromFunctionNameForHooks(functionName, fileNameWithoutExtension)
    : buildDescribeFromFunctionName(functionName, fileNameWithoutExtension);
}
