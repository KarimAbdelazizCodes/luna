# Generated by Django 3.2.4 on 2021-06-28 12:59

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import restaurant.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('category', models.JSONField(default=list, max_length=100)),
                ('country', models.CharField(max_length=100)),
                ('street', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('zip', models.CharField(max_length=50)),
                ('website', models.CharField(max_length=250)),
                ('phone_number', models.CharField(blank=True, max_length=17, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+999999999'. From 9 up to 15 digits allowed.", regex='^\\+?1?\\d{9,15}$')])),
                ('email', models.CharField(max_length=100)),
                ('hours', models.CharField(max_length=100)),
                ('price_level', models.CharField(choices=[('1', 'Low'), ('2', 'Medium'), ('3', 'High')], default='1', max_length=10)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to=restaurant.models.user_directory_path)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='owner', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
