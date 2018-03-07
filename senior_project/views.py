from django.shortcuts import render
import firebase_admin
import pyrebase
from firebase_admin import db, credentials
from django.http import HttpResponse
import cloudinary
import cloudinary.uploader
import cloudinary.api
from cloudinary.forms import cl_init_js_callbacks

cloudinary.config(
    cloud_name= "lizziepika",
    api_key= "174463134696341",
    api_secret= "IBCsfORYuuSUV-QoMcd6kuwnAqc"
)
# Create your views here.

def Index(request):
    return render(request, 'index.html')

def Gif_index(request):
    return render(request, 'gif_index.html')

def Vid_index(request):
    return render(request, 'vid_index.html')

def Guess_emotion_1(request):
    return render(request, 'static_images_guess_emotion.html')

def What_they_say_1(request):
    return render(request, 'static_images_guess_thinking.html')

def Guess_suggest_1(request):
    return render(request, 'static_images_guess_suggest.html')

def Guess_emotion_2(request):
    #cloudinary.CloudinaryVideo("happyvid.mp4").video(alt="happy vid", loop=True)
    cloudinary.CloudinaryVideo("happyvid").video(width=300, height=200, crop = "pad", background = "blue", 
  preload = "none", controls = True,
  fallback_content = "Your browser does not support HTML5 video tags")
    cloudinary.CloudinaryVideo("sadvid")
    cloudinary.CloudinaryVideo('surprisedvid')
    cloudinary.CloudinaryVideo('angryvid')
    cloudinary.CloudinaryVideo('disgustedvid')
    cloudinary.CloudinaryVideo('scaredvid')
    return render(request, 'gif_guess_emotion.html')

def What_they_say_2(request):
    cloudinary.CloudinaryVideo("happyvid").video(width=300, height=200, crop = "pad", background = "blue",
  preload = "none", controls = True,
  fallback_content = "Your browser does not support HTML5 video tags")
    cloudinary.CloudinaryVideo("sadvid")
    cloudinary.CloudinaryVideo('surprisedvid')
    cloudinary.CloudinaryVideo('angryvid')
    cloudinary.CloudinaryVideo('disgustedvid')
    cloudinary.CloudinaryVideo('scaredvid')
    return render(request, 'gif_guess_thinking.html')

def Guess_suggest_2(request):
    cloudinary.CloudinaryVideo("happyvid").video(width=300, height=200, crop = "pad", background = "blue",
  preload = "none", controls = True,
  fallback_content = "Your browser does not support HTML5 video tags")
    cloudinary.CloudinaryVideo("sadvid")
    cloudinary.CloudinaryVideo('surprisedvid')
    cloudinary.CloudinaryVideo('angryvid')
    cloudinary.CloudinaryVideo('disgustedvid')
    cloudinary.CloudinaryVideo('scaredvid')
    return render(request, 'gif_guess_suggest.html')

def Guess_emotion_3(request):
    cloudinary.CloudinaryVideo("happysoundvid").video(width=300, height=200, crop = "pad", background = "blue",
  preload = "none", controls = True,
  fallback_content = "Your browser does not support HTML5 video tags")
    cloudinary.CloudinaryVideo("sadsoundvid")
    cloudinary.CloudinaryVideo('surprisedsoundvid')
    cloudinary.CloudinaryVideo('angrysoundvid')
    cloudinary.CloudinaryVideo('disgustedsoundvid')
    cloudinary.CloudinaryVideo('scaredsoundvid')
    return render(request, 'video_sound_guess_emotion.html')

def What_they_say_3(request):
    cloudinary.CloudinaryVideo("happysoundvid").video(width=300, height=200, crop = "pad", background = "blue",
  preload = "none", controls = True,
  fallback_content = "Your browser does not support HTML5 video tags")
    cloudinary.CloudinaryVideo("sadsoundvid")
    cloudinary.CloudinaryVideo('surprisedsoundvid')
    cloudinary.CloudinaryVideo('angrysoundvid')
    cloudinary.CloudinaryVideo('disgustedsoundvid')
    cloudinary.CloudinaryVideo('scaredsoundvid')
    return render(request, 'video_sound_guess_thinking.html')

def Guess_suggest_3(request):
    cloudinary.CloudinaryVideo("happysoundvid").video(width=300, height=200, crop = "pad", background = "blue",
  preload = "none", controls = True,
  fallback_content = "Your browser does not support HTML5 video tags")
    cloudinary.CloudinaryVideo("sadsoundvid")
    cloudinary.CloudinaryVideo('surprisedsoundvid')
    cloudinary.CloudinaryVideo('angrysoundvid')
    cloudinary.CloudinaryVideo('disgustedsoundvid')
    cloudinary.CloudinaryVideo('scaredsoundvid')
    return render(request, 'video_sound_guess_suggest.html')

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

def save_vid_1(request):
    config = {
        "apiKey": "AIzaSyC6VFPqIsdF2BwR82O9zoGOAftdVgsR7NI",
        "authDomain": "mythical-envoy-138318.firebaseapp.com",
        "databaseURL": "https://mythical-envoy-138318.firebaseio.com",
        "serviceAccount": "MyProject-5eabf65db970.json",
        "storageBucket": "mythical-envoy-138318.appspot.com"
    }
    datavid1 = {}
    if 'questionvid1' in request.GET:
        datavid1['qv1'] = request.GET['questionvid1']
    if 'questionvid2' in request.GET:
        datavid1['qv2'] = request.GET['questionvid2']
    if 'questionvid3' in request.GET:
        datavid1['qv3'] = request.GET['questionvid3']
    if 'questionvid4' in request.GET:
        datavid1['qv4'] = request.GET['questionvid4']
    if 'questionvid5' in request.GET:
        datavid1['qv5'] = request.GET['questionvid5']
    if 'questionvid6' in request.GET:
        datavid1['qv6'] = request.GET['questionvid6']
    cred = credentials.Certificate('MyProject-5eabf65db970.json')
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db.child("answers").child("first_sound_video")
    db.child("answers").push(datavid1)
    #return HttpResponse("OK from firebase config views.py")
    return render(request, 'video_sound_guess_thinking.html')

def save_vid_2(request):
    config = {
        "apiKey": "AIzaSyC6VFPqIsdF2BwR82O9zoGOAftdVgsR7NI",
        "authDomain": "mythical-envoy-138318.firebaseapp.com",
        "databaseURL": "https://mythical-envoy-138318.firebaseio.com",
        "serviceAccount": "MyProject-5eabf65db970.json",
        "storageBucket": "mythical-envoy-138318.appspot.com"
    }
    datavid2 = {}
    if 'vidtheysay1' in request.GET:
        datavid2['qvs1'] = request.GET['vidtheysay1']
    if 'vidtheysay2' in request.GET:
        datavid2['qvs2'] = request.GET['vidtheysay2']
    if 'vidtheysay3' in request.GET:
        datavid2['qvs3'] = request.GET['vidtheysay3']
    if 'vidtheysay4' in request.GET:
        datavid2['qvs4'] = request.GET['vidtheysay4']
    if 'vidtheysay5' in request.GET:
        datavid2['qvs5'] = request.GET['vidtheysay5']
    if 'vidtheysay6' in request.GET:
        datavid2['qvs6'] = request.GET['vidtheysay6']
    cred = credentials.Certificate('MyProject-5eabf65db970.json')
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db.child("answers").child("second_sound_video")
    db.child("answers").push(datavid2)
    #return HttpResponse("OK from firebase config views.py")
    return render(request, 'video_sound_guess_suggest.html')

def save_vid_3(request):
    config = {
        "apiKey": "AIzaSyC6VFPqIsdF2BwR82O9zoGOAftdVgsR7NI",
        "authDomain": "mythical-envoy-138318.firebaseapp.com",
        "databaseURL": "https://mythical-envoy-138318.firebaseio.com",
        "serviceAccount": "MyProject-5eabf65db970.json",
        "storageBucket": "mythical-envoy-138318.appspot.com"
    }
    datavid3 = {}
    if 'vidsuggest1' in request.GET:
        datavid3['vs1'] = request.GET['vidsuggest1']
    if 'vidsuggest2' in request.GET:
        datavid3['vs2'] = request.GET['vidsuggest2']
    if 'vidsuggest3' in request.GET:
        datavid3['vs3'] = request.GET['vidsuggest3']
    if 'vidsuggest4' in request.GET:
        datavid3['vs4'] = request.GET['vidsuggest4']
    if 'vidsuggest5' in request.GET:
        datavid3['vs5'] = request.GET['vidsuggest5']
    if 'vidsuggest6' in request.GET:
        datavid3['vs6'] = request.GET['vidsuggest6']
    cred = credentials.Certificate('MyProject-5eabf65db970.json')
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db.child("answers").child("third_sound_video")
    db.child("answers").push(datavid3)
    #return HttpResponse("OK from firebase config views.py")
    return render(request, 'final.html')

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
        data_gif_1['qg2'] = request.GET['questiongif2']
    if 'questiongif3' in request.GET:
        data_gif_1['qg3'] = request.GET['questiongif3']
    if 'questiongif4' in request.GET:
        data_gif_1['qg4'] = request.GET['questiongif4']
    if 'questiongif5' in request.GET:
        data_gif_1['qg5'] = request.GET['questiongif5']
    if 'questiongif6' in request.GET:
        data_gif_1['qg6'] = request.GET['questiongif6']
    cred = credentials.Certificate('MyProject-5eabf65db970.json')
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db.child("answers").child("first_gif")
    db.child("answers").push(data_gif_1)
    #return HttpResponse("OK from firebase config views.py")
    return render(request, 'gif_guess_thinking.html')

def save_gif_2(request):
    config = {
        "apiKey": "AIzaSyC6VFPqIsdF2BwR82O9zoGOAftdVgsR7NI",
        "authDomain": "mythical-envoy-138318.firebaseapp.com",
        "databaseURL": "https://mythical-envoy-138318.firebaseio.com",
        "serviceAccount": "MyProject-5eabf65db970.json",
        "storageBucket": "mythical-envoy-138318.appspot.com"
    }
    data_gif_2 = {}
    if 'giftheysay1' in request.GET:
        data_gif_2['qg1'] = request.GET['giftheysay1']
    if 'giftheysay2' in request.GET:
        data_gif_2['qg2'] = request.GET['giftheysay2']
    if 'giftheysay3' in request.GET:
        data_gif_2['qg3'] = request.GET['giftheysay3']
    if 'giftheysay4' in request.GET:
        data_gif_2['qg4'] = request.GET['giftheysay4']
    if 'giftheysay5' in request.GET:
        data_gif_2['qg5'] = request.GET['giftheysay5']
    if 'giftheysay6' in request.GET:
        data_gif_2['qg6'] = request.GET['giftheysay6']
    cred = credentials.Certificate('MyProject-5eabf65db970.json')
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db.child("answers").child("second_gif")
    db.child("answers").push(data_gif_2)
    #return HttpResponse("OK from firebase config views.py")
    return render(request, 'gif_guess_suggest.html')

def save_gif_3(request):
    config = {
        "apiKey": "AIzaSyC6VFPqIsdF2BwR82O9zoGOAftdVgsR7NI",
        "authDomain": "mythical-envoy-138318.firebaseapp.com",
        "databaseURL": "https://mythical-envoy-138318.firebaseio.com",
        "serviceAccount": "MyProject-5eabf65db970.json",
        "storageBucket": "mythical-envoy-138318.appspot.com"
    }
    data_gif_3 = {}
    if 'gifsuggest1' in request.GET:
        data_gif_3['qg1'] = request.GET['gifsuggest1']
    if 'gifsuggest2' in request.GET:
        data_gif_3['qg2'] = request.GET['gifsuggest2']
    if 'gifsuggest3' in request.GET:
        data_gif_3['qg3'] = request.GET['gifsuggest3']
    if 'gifsuggest4' in request.GET:
        data_gif_3['qg4'] = request.GET['gifsuggest4']
    if 'gifsuggest5' in request.GET:
        data_gif_3['qg5'] = request.GET['gifsuggest5']
    if 'gifsuggest6' in request.GET:
        data_gif_3['qg6'] = request.GET['gifsuggest6']
    cred = credentials.Certificate('MyProject-5eabf65db970.json')
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db.child("answers").child("third_gif")
    db.child("answers").push(data_gif_3)
    #return HttpResponse("OK from firebase config views.py")
    return render(request, 'video_sound_index.html')
