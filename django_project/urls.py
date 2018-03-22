"""django_project URL Configuration
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from senior_project import views
from django.conf import settings
from django.conf import settings
from django.views.static import serve
urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.Form, name='form'),
    url(r'^home', views.Index, name='index'),
    url(r'^gif', views.Gif_index, name='gif_index'),
    url(r'^video', views.Vid_index, name='video_sound_index'),
    url(r'^guess_emotion_1', views.Guess_emotion_1, name='Guess_emotion_1'),
    url(r'^guess_thinking_1', views.What_they_say_1, name='What_they_say_1'),
    url(r'^guess_suggest_1', views.Guess_suggest_1, name='Guess_suggest_1'),
    url(r'^guess_emotion_2', views.Guess_emotion_2, name='Guess_emotion_2'),
    url(r'guess_thinking_2', views.What_they_say_2, name='What_they_say_2'),
    url(r'guess_suggest_2', views.Guess_suggest_2, name='Guess_suggest_2'),
    url(r'guess_emotion_3', views.Guess_emotion_3, name='Guess_emotion_3'),
    url(r'What_they_say_3', views.What_they_say_3, name='What_they_say_3'),
    url(r'guess_suggest_3', views.Guess_suggest_3, name='Guess_suggest_3'),
    url(r'^json/$', views.returnjson, name='returnjson'),
    url(r'^save_static_1', views.save_static_1, name='save_static_1'),
    url(r'^save_static_2', views.save_static_2, name='save_static_2'),
    url(r'^save_static_3', views.save_static_3, name='save_static_3'),
    url(r'^save_gif_1', views.save_gif_1, name='save_gif_1'),
    url(r'^save_gif_2', views.save_gif_2, name='save_gif_2'),
    url(r'^save_gif_3', views.save_gif_3, name='save_gif_3'),
    url(r'^save_vid_1', views.save_vid_1, name='save_vid_1'),
    url(r'^save_vid_2', views.save_vid_2, name='save_vid_2'),
    url(r'^save_vid_3', views.save_vid_3, name='save_vid_3'),
    url(r'^end_index', views.end_index, name='end_index'),
    url(r'^save_form', views.save_form, name='save_form'),
    #url(r'^static_1_results', views.Guess_emotion_1_results, name='guess_emotion_1_results'),
    #url(r'^static_2_results', views.What_they_say_1_results, name='guess_what_they_say_1_results'),
    #url(r'^static_3_results', views.Guess_suggest_1_results, name='guess_suggest_1_results'),
]

