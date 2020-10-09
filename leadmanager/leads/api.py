from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer


# viewsets + permissions KO cần như views.py>class onGetAllCourse(APIView)>def get/post(self, req)
class LeadViewSet(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()  # "queryset" là fix name
    permission_classes = [
        permissions.IsAuthenticated,
        # permissions.AllowAny,
    ]
    serializer_class = LeadSerializer

    def get_queryset(self):  # "get_queryset" là fix name
        # "leads_owner" là related_name từ models.py>class Lead()
        return self.request.user.leads_owner.all()

    def perform_create(self, serializer):  # "perform_create" là fix name
        serializer.save(owner=self.request.user)
