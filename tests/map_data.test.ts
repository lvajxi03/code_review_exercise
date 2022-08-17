import {clean_Data} from '../src/Datacleaner';

describe("The test", () => {
  it("Should pass", () => {
    let result = clean_Data('test_data.js');

    expect(result).toBe(true)
  });
})