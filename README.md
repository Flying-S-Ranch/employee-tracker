# Employee Tracker
## Description
This project is a command-line program that allows users to view and update tables of business information. There are three tables of information: department, role, and employee. Each of these tables has columns with relevant data. This project uses mysql and node inquirer, and gave me the opportunity to practice bridging the gap between the various programs that we are learning. I particularly enjoyed being able to use db.query to incorporate sql into the JavaScript file.

## Installation
This program requires npm inquirer and npm mysql2. Make sure to install these packages so that the program will run. Before running 'node index', users should run the schema.sql file and the seeds.sql file.

## Usage
Begin the program by typing 'node index' into the terminal. Use the arrow keys to choose from the list that appears. The first three options allows users to view the selected table. The second three options allows users to add entries into the three tables, and the final option allows users to update an existing employee entry.

## Credits
I learned the console.table() command from this site: https://developer.mozilla.org/en-US/docs/Web/API/Console/table

## License
The MIT License (MIT)
Copyright © 2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.