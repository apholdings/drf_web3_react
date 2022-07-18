
from rest_framework import serializers
from .models import Post
from apps.user.serializers import UserSerializer
 
class PostSerializer(serializers.ModelSerializer):
    thumbnail=serializers.CharField(source='get_thumbnail')
    video=serializers.CharField(source='get_video')
    author = UserSerializer()
    class Meta:
        model=Post
        fields=[
            'blog_uuid',
            'title',
            'slug',
            'thumbnail',
            'video',
            'description',
            'excerpt',
            'author',
            'published',
            'status',
        ]