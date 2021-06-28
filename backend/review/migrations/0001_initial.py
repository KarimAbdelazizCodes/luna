# Generated by Django 3.2.4 on 2021-06-28 12:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import review.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('restaurant', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(max_length=1000)),
                ('rating', models.CharField(choices=[('1', 'terrible'), ('2', 'bad'), ('3', 'average'), ('4', 'good'), ('5', 'excellent')], max_length=5)),
                ('images', models.ImageField(blank=True, null=True, upload_to=review.models.user_directory_path)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('author', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('restaurant', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='review', to='restaurant.restaurant')),
            ],
        ),
    ]
