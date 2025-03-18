import { readFileSync, writeFileSync } from 'fs';

export const clean_Data = (filename: any) => {
    /** input param not used anywhere? why? */

    let data = readFileSync('./data/input/test_data.js', 'utf-8'); /** is there a reason of hardcoding the path in production code? */

    const parsed_date = JSON.parse(data); /** how do we know JSON is successfully parsed/valid? no checks here */

    let mappedData = parsed_date.map((i: any) => { /** what if the JSON contains some other structures? no checks here */
        return {
            user_id: i.user_id,
            organisation: i.organisation_id,
            data: i.steps_data
        }
    });

    let result = writeFileSync('./data/output/test_data.js', JSON.stringify(mappedData), 'utf-8');
    /** according to the above:
     * 1. is there a reason of hardcofing the path in production code?
     * 2. what do we need this for? declared and not used*/

    return true; /** and why are we returning true no matter what? */
}
