# Price-Tracker
<h3>I created Amazon Price Tracker that sends you mail whenever price of a particular product goes below a certain price that you have entered</h3>
<h2 text-color="red">Dependencies You will need :</h2>
<h3>Nightmare : Nightmare is a high-level browser automation library from Segment that mimics simple user actions like 'goto', 'type' and 'click'.Here nightmare goes to a particular url fetches the html for us and then we can parse and do what we want with it.</h3>
<br/>
<h3>@sendgrid/mail : This is a dedicated service for interaction with the mail endpoint of the SendGrid v3 API.
<h4 text-color:"red"> Setup Environment Variables
Do not hardcode your Twilio SendGrid API Key into your code. Instead, use an environment variable or some other secure means of protecting your Twilio SendGrid API Key. Following is an example of using an environment variable.</h4>
<br/>
<h3>dotenv : Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.</h3>
I also used Temp-mail for sending a mail 
  <b>Temp mail is basically provides a free email service that allows to receive email at a temporary address that self-destructed after a certain time elapses( decomposable email</b>
