from django.urls import path
from .views import play_page

urlpatterns = [
    path('', play_page, name='validation')
]