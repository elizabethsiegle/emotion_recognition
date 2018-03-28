from django import forms
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
import datetime #check renewal date range
class UserForm(forms.Form):
    age = forms.IntegerField(label='your age')
    gender = forms.CharField(label='your gender', max_length=15)
    state = forms.CharField(label= 'state of residence', max_length=13)
    job = forms.CharField(label='your job', max_length=45)
    major = forms.CharField(label='your college major', max_length=20)
