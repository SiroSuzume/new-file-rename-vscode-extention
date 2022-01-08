import { findTestingFunctionName } from './findTestingFunctionName';

describe(findTestingFunctionName, () => {
  it('describeの一文を目ざとく見つけること', () => {
    expect(
      findTestingFunctionName(
        `import { findTestingFunctionName } from './findTestingFunctionName';\ndescribe('findTestingFunctionName', () => )`,
      ),
    ).toBe('findTestingFunctionName');
    expect(
      findTestingFunctionName(
        `import { findTestingFunctionName } from './findTestingFunctionName';\ndescribe(findTestingFunctionName, () => )`,
      ),
    ).toBe('findTestingFunctionName');
  });
});
