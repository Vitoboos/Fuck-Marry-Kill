from django.db import models

class character(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default='Por asignar')
    gender = models.CharField(max_length=100, default='Por asignar')
    image = models.ImageField(upload_to='MEDIA/IMAGES/HOST', default='images/placeholder.png')

    def __str__(self):
        return self.name