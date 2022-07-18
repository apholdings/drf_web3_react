from .serializers import CategorySerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Category

class ListCategoriesView(APIView):
    def get(self, request, format=None):

        categories = Category.objects.all()

        serializer = CategorySerializer(categories, many=True)

        return Response({'categories': serializer.data}, status=status.HTTP_200_OK)
