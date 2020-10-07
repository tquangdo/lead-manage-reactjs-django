from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', views.index) -> localhost:8000
    path('', include('frontend.urls')),
    # router.register('api/leads', LeadViewSet, 'leads') -> localhost:8000/api/leads
    path('', include('leads.urls')),
]
