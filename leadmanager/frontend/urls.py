from django.urls import path
from . import views
urlpatterns = [
    path('', views.index)  # render(request, 'frontend/index.html')
]
