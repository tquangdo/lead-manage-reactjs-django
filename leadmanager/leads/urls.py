from rest_framework import routers
from .api import LeadViewSet

# router KO cần như views.py>class onGetAllCourse(APIView)>def get/post(self, req)
router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls
