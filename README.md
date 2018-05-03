# Developing Applications to Compare Methods of Teaching Emotions

## This repo holds the code for the Django app (accompanying iOS app separate repo) submitted for my Senior Project (undergraduate thesis at Bryn Mawr College). I was advised by Professor John Dougherty of Haverford College.

## Hosted on Digital Ocean and Digital Bryn Mawr, there are three distinct sections in Django: one uses static images, another use animated gifs, and the third uses video. Each one has three levels: identifying emotions, recognizing possible statements based on facial expressions, and responding to a facial expression. We aimed to compare which form of graphic users performed better on. They were developed with people with AS/HFA (Asperger Syndrom/High-Functioning Autism) in mind, and people who have challenges in various social situations.

## The data is saved to Google Firebase, different graphics were aligned and formatted in Django with Cloudinary API, a gif based on the number of questions a user got correct on a level was rendered with the Giphy API, and PubNub EON was used to render a chart based on the number of questions gotten correct on a level.

