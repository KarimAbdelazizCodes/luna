# Generated by Django 3.2.4 on 2021-06-29 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0006_alter_restaurant_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='restaurant',
            name='updated',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
