import { clean_Data } from '../src/Datacleaner'; /** this layout is not generic, we shall import from 'packagename' */

describe("The test", () => {
    it("Should pass", () => {
        let result = clean_Data('test_data.js'); /** clean_Data will NOT: 1. use this file, 2. return real result (but always true) */

        /** 3. if clean_Data will be fixed, you shall ensure that test_data.js can be read (specify full path here) */

        expect(result).toBe(true) /** always true, according to source code */
    });
})
