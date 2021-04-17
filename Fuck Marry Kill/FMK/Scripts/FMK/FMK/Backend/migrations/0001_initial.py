# Generated by Django 3.1.7 on 2021-04-04 06:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='character',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='Por asignar', max_length=100)),
                ('gender', models.CharField(default='Por asignar', max_length=100)),
                ('image', models.ImageField(default='images/placeholder.png', upload_to='host')),
            ],
        ),
    ]