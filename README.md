# Code Review Exercise

## Task Overview
Your colleague has been asked to complete a ticket which asks them to retrieve
some user data from a file location, reformat the data and create a new file with the processed data. Your job is to review their work and provide feedback.

## Task Details

### Ticket [3381]
**Description:**

Once an hour our fitbit integration service dumps a json file into our input directory. This file contains user step data and some PII data. We need the files processed so the PII data is removed. The remaining data then must be dumped into a new file in the output directory for downstream services to consume.

**Acceptance Criteria:**

- All PII data is removed, including any names, age or location data.
- The output file must have the same name as the input file.
- The code must be covered by unit tests.

### PR Review

Your colleague has now written the code and raised a PR which they would like you to
review. Please review the code and note down your suggested improvements and changes which you would feedback to your colleague.

Please consider all the files and directories in this repo excluding this README file during your review. 

Don't focus on the programming language, this code could be written in any language. Instead focus on:

- Basic Bugs
- Syntax and Format
- Design and Readability
- Any other obvious issues