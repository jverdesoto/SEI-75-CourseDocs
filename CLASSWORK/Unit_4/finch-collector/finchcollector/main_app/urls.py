from django.urls import path, include
from . import views 

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('finches/', views.finches_index, name='finches_index'),
    path('finches/<int:finch_id>/', views.finch_detail, name='finch_detail'),
    path('finches/create/', views.finch_create, name='finch_create'),
    path('toys/', views.ToyList.as_view(), name='toys_index'),
    path('toys/create/', views.ToyCreate.as_view(), name='toy_create'),
    path('finches/<int:finch_id>/add_toy/<int:toy_id>/', views.add_toy, name='add_toy'),
    path('finches/<int:finch_id>/remove_toy/<int:toy_id>/', views.remove_toy, name='remove_toy'),
    path('finches/<int:finch_id>/add_photo/', views.add_photo, name='add_photo'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/signup/', views.signup, name='signup'),
    path('finches/<int:finch_id>/add_feeding/', views.add_feeding, name='add_feeding'),
]
