from django.shortcuts import render
import firebase_admin
import pyrebase
from firebase_admin import db, credentials
from django.http import HttpResponse
from PIL import Image as PilImage
from models import Image

import cloudinary
import cloudinary.uploader
import cloudinary.api

from StringIO import StringIO
import base64

def rotate(request):
    #get instance of model
    item=Image.objects.get(pk=1)
    #open image for PIL to access
    im = PilImage.open(image.image)

    #rotate by built-in PIL command
    rotated_image = im.rotate(90)
    rotated_image.save(item.image.file.name, overwrite=True)
    return HttpResponse(str(image.image))

cloudinary.config(
    cloud_name= "thesis_idk",
    api_key= "174463134696341",
    api_secret= "IBCsfORYuuSUV-QoMcd6kuwnAqc"
)
# Create your views here.
#if form.is_valid():
 #   new_image = form.save()
  #  return redirect('img:detail', pk=new_image.id)

def Index(request):
    return render(request, 'index.html')

def Gif_index(request):
    return render(request, 'gif_index.html')

def Guess_emotion_1(request):
    return render(request, 'static_images_guess_emotion.html')

def What_they_say_1(request):
    return render(request, 'static_images_guess_thinking.html')

def Guess_suggest_1(request):
    return render(request, 'static_images_guess_suggest.html')

def Guess_emotion_2(request):
    #cloudinary.uploader.upload("/gifs/angrygif.gif")
    #cloudinary.uploader.upload(idk)
    #cloudinary.uploader.upload('/gifs/sadgif.gif')
    #cloudinary.uploader.upload('/gifs/happygif.gif')
    #cloudinary.uploader.upload('/gifs/disgustedgif.gif')
    #cloudinary.uploader.upload('/gifs/surprisedgif.gif')
    #cloudinary.uploader.upload('/gifs/scaredgif.gif')
    return render(request, 'gif_guess_emotion.html')

def What_they_say_2(request):
    return render(request, 'gif_guess_thinking.html')

def Guess_suggest_2(request):
    return render(request, 'gif_guess_suggest.html')

def returnjson(request):
    if request.is_ajax():
        request_data = request.POST
        print("Raw data: " + request_data.body)
        return HttpResponse("OK")

def save_form(request):
    return render(request, "static_images_guess_thinking.html")

def save_static_1(request):
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
    #return render(request, 'static_images_guess_thinking.html')
    return What_they_say_1(request)

def save_static_2(request):
    config = {
        "apiKey": "AIzaSyC6VFPqIsdF2BwR82O9zoGOAftdVgsR7NI",
        "authDomain": "mythical-envoy-138318.firebaseapp.com",
        "databaseURL": "https://mythical-envoy-138318.firebaseio.com",
        "serviceAccount": "MyProject-5eabf65db970.json",
        "storageBucket": "mythical-envoy-138318.appspot.com"
    }
    data2 = {}
    if 'questiontheysay1' in request.GET:
        data2['q1'] = request.GET['questiontheysay1']
    if 'questiontheysay2' in request.GET:
        data2['q2'] = request.GET['questiontheysay2']
    if 'questiontheysay3' in request.GET:
        data2['q3'] = request.GET['questiontheysay3']
    if 'questiontheysay4' in request.GET:
        data2['q4'] = request.GET['questiontheysay4']
    if 'questiontheysay5' in request.GET:
        data2['q5'] = request.GET['questiontheysay5']
    if 'questiontheysay6' in request.GET:
        data2['q6'] = request.GET['questiontheysay6']
    cred = credentials.Certificate('MyProject-5eabf65db970.json')
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db.child("answers").child("second_static")
    db.child("answers").push(data2)
    #return HttpResponse("OK from firebase config views.py")
    return render(request, 'static_images_guess_suggest.html')

def save_static_3(request):
    config = {
        "apiKey": "AIzaSyC6VFPqIsdF2BwR82O9zoGOAftdVgsR7NI",
        "authDomain": "mythical-envoy-138318.firebaseapp.com",
        "databaseURL": "https://mythical-envoy-138318.firebaseio.com",
        "serviceAccount": "MyProject-5eabf65db970.json",
        "storageBucket": "mythical-envoy-138318.appspot.com"
    }
    data3 = {}
    if 'questionsay1' in request.GET:
        data3['q1'] = request.GET['questionsay1']
    if 'questionsay2' in request.GET:
        data3['q2'] = request.GET['questionsay2']
    if 'questionsay3' in request.GET:
        data3['q3'] = request.GET['questionsay3']
    if 'questionsay4' in request.GET:
        data3['q4'] = request.GET['questionsay4']
    if 'questionsay5' in request.GET:
        data3['q5'] = request.GET['questionsay5']
    if 'questionsay6' in request.GET:
        data3['q6'] = request.GET['questionsay6']
    cred = credentials.Certificate('MyProject-5eabf65db970.json')
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db.child("answers").child("third_static")
    db.child("answers").push(data3)
    #return HttpResponse("OK from firebase config views.py")
    return render(request, 'gif_index.html')

def save_gif_1(request):
    config = {
        "apiKey": "AIzaSyC6VFPqIsdF2BwR82O9zoGOAftdVgsR7NI",
        "authDomain": "mythical-envoy-138318.firebaseapp.com",
        "databaseURL": "https://mythical-envoy-138318.firebaseio.com",
        "serviceAccount": "MyProject-5eabf65db970.json",
        "storageBucket": "mythical-envoy-138318.appspot.com"
    }
    data_gif_1 = {}
    if 'questiongif1' in request.GET:
        data_gif_1['qg1'] = request.GET['questiongif1']
    if 'questiongif2' in request.GET:
        data['qg2'] = request.GET['questiongif2']
    if 'questiongif3' in request.GET:
        data['qg3'] = request.GET['questiongif3']
    if 'questiongif4' in request.GET:
        data['qg4'] = request.GET['questiongif4']
    if 'questiongif5' in request.GET:
        data['qg5'] = request.GET['questiongif5']
    if 'questiongif6' in request.GET:
        data['qg6'] = request.GET['questiongif6']
    cred = credentials.Certificate('MyProject-5eabf65db970.json')
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db.child("answers").child("first_gif")
    db.child("answers").push(data_gif_1)
    #return HttpResponse("OK from firebase config views.py")
    return render(request, 'gif_guess_thinking.html')
