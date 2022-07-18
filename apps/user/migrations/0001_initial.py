# Generated by Django 3.2.13 on 2022-06-28 23:41

import apps.user.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account', models.CharField(max_length=255, unique=True)),
                ('email', models.EmailField(max_length=255)),
                ('username', models.CharField(max_length=255, unique=True)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('profession', models.CharField(blank=True, max_length=255, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('picture', models.ImageField(blank=True, default='users/user_default_profile.png', null=True, upload_to=apps.user.models.user_profile_directory_path, verbose_name='Picture')),
                ('banner', models.ImageField(blank=True, default='users/user_default_bg.jpg', null=True, upload_to=apps.user.models.user_banner_directory_path, verbose_name='Banner')),
                ('location', models.CharField(blank=True, max_length=50, null=True)),
                ('url', models.CharField(blank=True, max_length=80, null=True)),
                ('birthday', models.DateField(blank=True, null=True)),
                ('profile_info', models.TextField(blank=True, max_length=150, null=True)),
                ('age_limit', models.CharField(blank=True, choices=[('18+', '18+'), ('Age Restricted', 'Age Restricted')], max_length=14, null=True)),
                ('teacher', models.BooleanField(default=False)),
                ('verified', models.BooleanField(default=False)),
                ('coins', models.DecimalField(decimal_places=2, default=0, max_digits=1000)),
                ('total_earnings', models.IntegerField(default=0)),
                ('sales', models.IntegerField(default=0)),
                ('total_spent', models.IntegerField(default=0)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('followers', models.ManyToManyField(blank=True, related_name='_user_useraccount_followers_+', to='user.UserAccount')),
            ],
        ),
    ]
