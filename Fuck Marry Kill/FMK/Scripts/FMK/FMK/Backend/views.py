import random
from django.shortcuts import render, redirect
from Backend.models import character

def home_page(request):

    return render(request, 'home.html', {})

def play_page(request):

    choices = []

    gender = request.session['gender']

    if gender != 'both':

        queryset = character.objects.filter(gender=gender)
        chars = list(queryset)

    else:

        queryset = character.objects.all()
        chars = list(queryset)


    for i in range(3):

        insert = random.choice(chars)
        choices.append(insert)
        chars.remove(insert)

    context = {"char1":choices[0], "char2":choices[1], "char3":choices[2]}

    return render(request, 'play.html', context)


def settings_page(request):

    if(request.GET.get('confirmation')):

        gender = request.GET['gender']

        request.session['gender'] = gender

        return redirect('play')

    return render(request, 'settings.html', {})

def results_page(request):

    return render(request, 'results.html', {})

def about_page(request):

    return render(request, 'about.html', {})