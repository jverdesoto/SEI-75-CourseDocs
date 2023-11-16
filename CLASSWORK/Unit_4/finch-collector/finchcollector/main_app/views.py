from django.shortcuts import render, get_object_or_404, redirect
from .forms import FinchForm, FeedingForm
from django.views.generic.edit import CreateView
from django.views.generic import ListView
import boto3
import os
import uuid
from .models import Finch, Photo, Toy
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.utils.timezone import timedelta

def signup(request):
    error_message = ''
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('finches_index')  
        else:
            error_message = 'Invalid sign up - try again'
    form = UserCreationForm()
    context = {'form': form, 'error_message': error_message}
    return render(request, 'registration/signup.html', context)

@login_required
def add_photo(request, finch_id):
    photo_file = request.FILES.get('photo-file', None)
    if photo_file:
        s3 = boto3.client('s3')
        key = uuid.uuid4().hex[:6] + photo_file.name[photo_file.name.rfind('.'):]
        try:
            s3.upload_fileobj(photo_file, os.environ.get('S3_BUCKET'), key)
            url = f"{os.environ.get('S3_BASE_URL')}{os.environ.get('S3_BUCKET')}/{key}"
            Photo.objects.create(url=url, finch_id=finch_id)
        except Exception as e:
            print('error uploading to bucket:', e)
    return redirect('finch_detail', finch_id=finch_id)

class ToyCreate(CreateView):
    model = Toy
    fields = '__all__'
    template_name = 'toys/toy_form.html'
    success_url = '/toys/'
    
class ToyList(ListView):
    model = Toy
    template_name = 'toys/index.html'

def add_toy(request, finch_id, toy_id):
    Toy.objects.filter(id=toy_id).update(finch_id=finch_id)
    return redirect('finch_detail', finch_id=finch_id)

def remove_toy(request, finch_id, toy_id):
    Toy.objects.filter(id=toy_id).update(finch_id=None)
    return redirect('finch_detail', finch_id=finch_id)


@login_required
def finches_index(request):
    finches = Finch.objects.all()
    return render(request, 'finches/index.html', {'finches': finches})

@login_required
def finch_detail(request, finch_id):
    finch = get_object_or_404(Finch, pk=finch_id)
    feeding_form = FeedingForm()
    last_feeding = finch.feeding_set.last()
    feeding_status = 'green'
    if last_feeding:
        if last_feeding.date < timezone.now() - timedelta(hours=24):
            feeding_status = 'red'
        elif last_feeding.date < timezone.now() - timedelta(hours=12):
            feeding_status = 'yellow'
    available_toys = Toy.objects.filter(finch__isnull=True)
    return render(request, 'finches/detail.html', {
        'finch': finch,
        'toys': available_toys,
        'feeding_form': feeding_form,
        'last_feeding': last_feeding,
        'feeding_status': feeding_status
    })
    
def finch_create(request):
    form = FinchForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('finches_index')
    return render(request, 'finches/finch_form.html', {'form': form})

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')
from .models import Feeding

def add_feeding(request, finch_id):
    finch = get_object_or_404(Finch, pk=finch_id)
    if request.method == 'POST':
        form = FeedingForm(request.POST)
        if form.is_valid():
            new_feeding = form.save(commit=False)
            new_feeding.finch = finch
            new_feeding.save()
            return redirect('finch_detail', finch_id=finch_id)
    else:
        form = FeedingForm()
    return render(request, 'finches/feeding_form.html', {'form': form, 'finch': finch})
