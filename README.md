# applauz-assessment

## Installation

Clone the repository to yout local machine
`$git clone https://github.com/rawanul93/applauz-assessment.git`

Navigate to folder and open two terminals to run both frontend and backend
- /applauz-assessment/client `$npm start`
- /applauz-assessment/auth `$npm start`

## Usage

For the login form use the following emails or passwords
- email: than.nguyen@test.com password: 123456
- email: rusaf.momen@test.com password: 123456

## Other info

Node version: 18.12.1
React version: 18.2.0

The frontend of the app is created with react `$npx create-react-app --use-npm` and backend using **Node** and **Express**.

For styling I used Bootstrap CDN, React bootstrap and some inline styles <sub>I normally do not use inline styles for production software</sub>

Axios was used to make api calls from the frontend to the backend which then handles it by checking the users model in the auth service and sends back the correct user object.

The app redirects logged in users to the LoginSucessPage where it is just a simple banner displaying the user's name that we destructure from user object returned by backend.

