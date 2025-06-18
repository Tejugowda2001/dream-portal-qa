Dream Portal QA Automation

Automated testing for the [Dream Portal Website](https://arjitnigam.github.io/myDreams/) using *Playwright + TypeScript, with optional **AI-powered dream classification* using OpenAI.

## Features Tested

•⁠  ⁠index.html: Loader, navigation, My Dreams button.
•⁠  ⁠dreams-diary.html: 10 rows, Good/Bad dreams, non-empty columns.
•⁠  ⁠dreams-total.html: Good: 6, Bad: 4, Total: 10, Recurring: 2.

##  AI Classification

Uses OpenAI to classify dream name → compares with page data.

##  Setup

⁠ bash
git clone https://github.com/Tejugowda2001/dream-portal-qa.git
cd dream-portal-qa
npm install
echo "OPENAI_API_KEY=sk-xxxx" > .env
npx playwright test
 Report

npx playwright show-report
 Author

Tejugowda
