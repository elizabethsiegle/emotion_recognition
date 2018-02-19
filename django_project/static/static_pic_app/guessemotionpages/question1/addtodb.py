# Import database module.
from firebase_admin import db
from flask import Flask 

@app.route('/')

# Get a database reference to our blog.
ref = db.reference('server/saving-data/fireblog')

users_ref = ref.child('answers')
users_ref.set({
    'static_pic_app_guess_emotions': {
        'question1': 'June 23, 1912',
        'full_name': 'Alan Turing'
    },
    'gracehop': {
        'date_of_birth': 'December 9, 1906',
        'full_name': 'Grace Hopper'
    }
})