# Generated by Django 3.2.4 on 2021-06-29 08:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0002_alter_restaurant_price_level'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='restaurant',
            name='category',
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=100)),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='category', to='restaurant.restaurant')),
            ],
        ),
    ]
