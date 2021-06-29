import Validator from '../app';

test('should test fine example', () => {
  const data = 'a456-k_87g';
  const equalData = true;
  expect(Validator.validateUsername(data)).toEqual(equalData);
});

test('should test begin with number', () => {
  const data = '4a456-k_87g';
  const equalData = false;
  expect(Validator.validateUsername(data)).toEqual(equalData);
});

test('should test begin with -', () => {
  const data = '-a456-k_87g';
  const equalData = false;
  expect(Validator.validateUsername(data)).toEqual(equalData);
});

test('should test begin with _', () => {
  const data = '_a456-k_87g';
  const equalData = false;
  expect(Validator.validateUsername(data)).toEqual(equalData);
});

test('should test end with _', () => {
  const data = 'a456-k_87g_';
  const equalData = false;
  expect(Validator.validateUsername(data)).toEqual(equalData);
});

test('should test end with -', () => {
  const data = 'a456-k_87g-';
  const equalData = false;
  expect(Validator.validateUsername(data)).toEqual(equalData);
});

test('should test end with number', () => {
  const data = 'a456-k_87g9';
  const equalData = false;
  expect(Validator.validateUsername(data)).toEqual(equalData);
});

test('should test body with 4 numbers', () => {
  const data = 'a45687g';
  const equalData = false;
  expect(Validator.validateUsername(data)).toEqual(equalData);
});
