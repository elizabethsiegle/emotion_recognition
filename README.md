# Developing Applications to Compare Methods of Teaching Emotions

#### This repo holds the code for the Django app (accompanying iOS app <a href = "https://github.com/elizabethsiegle/ios_teach_emotions">here</a>) submitted for my Senior Project (undergraduate thesis at Bryn Mawr College). I was advised by Professor John Dougherty of Haverford College.

#### Hosted on Digital Ocean and Digital Bryn Mawr, there are three Django applications: one uses static images, another use animated gifs, and the third uses video. Each one has three levels: identifying emotions, recognizing possible statements based on facial expressions, and responding to a facial expression. We aimed to compare which form of graphic users performed better on. They were developed with people with AS/HFA (Asperger Syndrom/High-Functioning Autism) in mind, and people who have challenges in various social situations.

#### The overall project was inspired by this poster below from Stanbridge Academy, a school where my mom works in San Mateo, CA for students primarily with AS/HFA (Asperger Syndrome/High-Functioning Autism.

<img src = "https://user-images.githubusercontent.com/8932430/39555548-09361b3e-4e48-11e8-9e98-aad85d5c0f2e.JPG" width="250">

#### A Django form in the beginning (at esiegle.digital.brynmawr.edu) receives feedback from users. No users we tested on had AS/HFA, but that is a goal for the future.
<img src = "https://user-images.githubusercontent.com/8932430/39555571-357c97b8-4e48-11e8-8821-a8df25eed0ee.png" width="250">



#### The data is saved to Google Firebase, different graphics were aligned and formatted in Django with Cloudinary API, a gif based on the number of questions a user got correct on a level was rendered with the Giphy API, and PubNub EON was used to render a chart based on the number of questions gotten correct on a level.
