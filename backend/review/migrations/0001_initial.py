# Generated by Django 3.2.4 on 2021-07-02 10:05

from django.db import migrations, models
import review.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
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
            ],
        ),
    ]
