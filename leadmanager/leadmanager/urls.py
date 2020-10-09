from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # trong frontend.urls: path('', views.index) -> localhost:8000
    path('', include('frontend.urls')),
    # trong leads.urls: router.register('api/leads', LeadViewSet, 'leads') -> localhost:8000/api/leads
    path('', include('leads.urls')),
    # trong accounts.urls: -> localhost:8000/api/auth(/xxx)
    path('', include('accounts.urls')),
]
