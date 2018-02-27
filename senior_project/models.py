from django.db import models
#from io import BytesIO
#from django.core.files.base import ContentFile
#from PIL import Image, ImageOps
# Create your models here.
class Image(models.Model):
    #models.ImageField(upload_to='img')
    image = models.FileField(upload_to="images/")

#class ImageClient(models.Model):
  #  image = models.ImageField(null=False, blank=False, upload_to="image/path/")

#    def save(self, *args, **kwargs):
 #       pil_image_obj = Image.open(self.image)
  #      new_image = ImageOps.mirror(pil_image_obj)
#       new_image_io = BytesIO()
 #       new_image.save(new_image_io, format='JPEG')
#
 #       temp_name = self.image.name
  #      self.image.delete(save=False)  

   #     self.image.save(
    #        temp_name,
     #       content=ContentFile(new_image_io.getvalue()),
      #      save=False
       # )

        #super(ImageClient, self).save(*args, **kwargs)
