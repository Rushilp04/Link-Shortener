Link Shortner
A URL Shortener Application build with React JS, Python Flask, Firebase Data Base and Heroku.

The project is composed of two folders, mini-link-it-client and mini-link-it-server

## mini-link-it-client
This is single page react app written with bootstrap that takes the long URL from a user, stores it in a database (firebase database) and gives the user a generated
mini url. 

### Running client Locally
1. `npm install` To install dependencies (Be sure you have a firebase account)
2. `npm start`

## mini-link-it-server
This is a python flask web server that listens for calls made with the generated URL, goes to the database, fetches the long URL then redirects the user to the
long URLS page.

### Dependencies
1. Firebase Project Account
2. Firebase Database in Project Account
3. Firebase service account json key file (ServiceAccountKey.json) in mini-link-it-server/app/main.py line 6 (See video on how to generate yours)
4. Firebase Database URL in mini-link-it-server/app/main.py line 8 (See video on how to generate yours)

### Running Server Locally
1. Create a virtual environment in the mini-link-it-server folder (python3 -m venv venv)
2. Activate virtual environment (`source venv/bin/activate` for mac and `venv/Scripts/activate` for windows)
3. Besure you have the ServiceAccountKey.json in mini-link-it-server. 
4. `python wsgi.py`

I have this project running locally on localhost. I also did not include my service account key file since it contiains sensitive information.
