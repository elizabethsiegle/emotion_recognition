from django.shortcuts import render
import firebase_admin
import pyrebase
from firebase_admin import db, credentials
from django.http import HttpResponse
# Create your views here.

def Index(request):
    return render(request, 'index.html')

def Guess_emotion_1(request):
    return render(request, 'static_images_guess_emotion.html')

def What_they_say_1(request):
    return render(request, 'static_images_guess_thinking.html')

def returnjson(request):
    if request.is_ajax():
        request_data = request.POST
        print("Raw data: " + request_data.body)
        return HttpResponse("OK")

def save_form(request):
    return render(request, "static_images_guess_thinking.html")

def save(request):
    config = {
        "apiKey": "AIzaSyC6VFPqIsdF2BwR82O9zoGOAftdVgsR7NI",
        "authDomain": "mythical-envoy-138318.firebaseapp.com",
        "databaseURL": "https://mythical-envoy-138318.firebaseio.com",
        "serviceAccount": "MyProject-5eabf65db970.json",
        "storageBucket": "mythical-envoy-138318.appspot.com"
    } 
    data = {}
    if 'question1' in request.GET:
        data['q1'] = request.GET['question1']
    if 'question2' in request.GET:
        data['q2'] = request.GET['question2']
    if 'question3' in request.GET:
        data['q3'] = request.GET['question3'] 
    if 'question4' in request.GET:
        data['q4'] = request.GET['question4']
    if 'question5' in request.GET:
        data['q5'] = request.GET['question5'] 
    if 'question6' in request.GET:
        data['q6'] = request.GET['question6'] 
    cred = credentials.Certificate('MyProject-5eabf65db970.json')
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db.child("answers").child("first")
    db.child("answers").push(data)
    #return HttpResponse("OK from firebase config views.py")
    return render(request, 'static_images_guess_thinking.html')
