from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer


# viewsets + permissions KO cần như views.py>class onGetAllCourse(APIView)>def get/post(self, req)
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        # permissions.IsAuthenticated,
        permissions.AllowAny,
    ]
    serializer_class = LeadSerializer

    # def get_queryset(self):
    #     return self.request.user.leads.all()

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)
