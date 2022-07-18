# from apps.product.models import ProductsLibrary
# from apps.courses.models import CoursesLibrary, PaidCoursesLibrary
# from apps.wishlist.models import WishList
# from apps.cart.models import Cart
from apps.user.models import UserAccount
from apps.user.serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from django.core.exceptions import ValidationError
from django.http.response import HttpResponseBadRequest
from django.shortcuts import get_object_or_404
from django.db.models.query_utils import Q
from django.conf import settings
domain = settings.DOMAIN



# Create your views here.
class CreateUserProfileView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    def post(self, request, format=None):

            data = self.request.data
            account = data["account"]

            user = UserAccount.objects.get_or_create(
                account=account,
                email='email',
                username='username',
                first_name='name',
                last_name='last name',
                location='location',
                url='url',
                birthday='2022-01-01',
                profile_info='bio information',
                age_limit='18+',
                verified=False,
                total_earnings=0,
                total_spent=0,
                sales=0,
                profession='profession',
            )

            # ProductsLibrary.objects.get_or_create(user=user[0])
            # CoursesLibrary.objects.get_or_create(author=user[0])
            # PaidCoursesLibrary.objects.get_or_create(author=user[0])
            # Cart.objects.get_or_create(account=user[0].account)
            # WishList.objects.get_or_create(account=user[0].account)

            return Response({'success': 'Message sent successfully'})


# Create your views here.
class DetailUserProfileView(APIView):
    def get(self,request,account,*args, **kwargs):

        user = UserAccount.objects.filter(account=account)

        user_account = user[0].account
        username = user[0].username
        first_name = user[0].first_name
        last_name = user[0].last_name
        picture = user[0].picture
        banner = user[0].banner
        location = user[0].location
        url = user[0].url
        birthday = user[0].birthday
        profile_info = user[0].profile_info
        age_limit = user[0].age_limit
        verified = user[0].verified
        total_earnings = user[0].total_earnings
        total_spent = user[0].total_spent
        sales = user[0].sales
        date_created = user[0].date_created

        picture = '/media/' + str(picture)
        banner = '/media/' + str(banner)

        user = {
            'account':user_account,
            'username':username,
            'first_name':first_name,
            'last_name':last_name,
            'picture':picture,
            'banner':banner,
            'location':location,
            'url':url,
            'birthday':birthday,
            'profile_info':profile_info,
            'age_limit':age_limit,
            'verified':verified,
            'total_earnings':total_earnings,
            'total_spent':total_spent,
            'sales':sales,
            'date_created':date_created,
        }

        return Response({
            'user':user
        },status=status.HTTP_200_OK)

        
class UpdateUserProfileView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    def post(self, request, format=None):
            data = self.request.data

            account = data['account']
            username = data['username']
            first_name = data['first_name']
            last_name = data['last_name']
            location = data['location']
            url = data['url']
            birthday = data['birthday']
            profile_info = data['profile_info']
            picture = data['picture']
            banner = data['banner']

            user = get_object_or_404(UserAccount, account=account)

            user.username=username
            user.first_name=first_name
            user.last_name=last_name
            user.location=location
            user.url=url
            user.birthday=birthday
            user.profile_info=profile_info
            user.picture=picture
            user.banner=banner
            user.save()

            return Response({'success': 'Message sent successfully'})