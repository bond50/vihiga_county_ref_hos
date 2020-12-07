# Setup : 

# Make sure you have node and python installed 

The first thing to do is to clone the repository:

	$ https://github.com/bond50/vihiga_county_referral_hospital.git

	$ cd vihiga_county_referral_hospital/frontend
	
Run npm install to install all dependencies

	$ npm install

Run npm run build to generate build folder that will be served by django server

	$ npm run build
	
Navigate back one directory.Make sure you are in the same directory as "manage.py"
	
	$ cd ..

Create a virtual environment to install dependencies in and activate it:

	$ pip install pipenv
	
	$ pipenv shell
	
Then install the dependencies:

	(vihiga)$ pipenv install -r requirements.txt

	
Note the (vihiga) in front of the prompt. This indicates that this terminal session operates in a virtual environment set up by pipenv.
	
Then run server
	
	(vihiga)$ python manage.py runserver
	
And navigate to http://127.0.0.1:8000/.



	
	





