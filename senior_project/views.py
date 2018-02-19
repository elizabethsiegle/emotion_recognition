from django.shortcuts import render
from pyrebase_settings import db, auth
# Create your views here.

def Index(request):
    return render(request, 'index.html')

def Guess_emotion_1(request):
    return render(request, 'static_images_guess_emotion.html')

def What_they_say_1(request):
    return render(request, 'static_images_guess_thinking.html')

def save_answers(request):
    ref = db.reference('server/saving-data/fireblog')
    answers_ref = ref.child('answers')
