import {readFileSync, writeFileSync} from 'fs';

export const clean_Data = (filename: any) => {
  let data = readFileSync('./data/input/test_data.js', 'utf-8');

  const parsed_date = JSON.parse(data);

    let mappedData = parsed_date.map((i: any) => {
      return {
      user_id: i.user_id,
      organisation: i.organisation_id,
      data: i.steps_data
      }  
    });

  let result = writeFileSync('./data/output/test_data.js', JSON.stringify(mappedData), 'utf-8')

  return true;
}