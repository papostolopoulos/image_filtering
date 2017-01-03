# Image filtering through algorithm manipulation
## Q3 Galvanize project (Rob, Tommy, Paris)
The objective of this project is to create an online tool of image filtering through the use of algorithms

### Program features
The program needs to allow the user the following actions:
- Open images from his hard drive
- Open images from a URL
- Be able to select between two options. Editing or applying "art" on an image:
- save his modified image in his hard drive
- Be able to select on the parameters of the filtering

The features that the program needs to offer are:
- Create a negative of the imported image
- Edge detection
- Create art through algorithm implementation

Nice to have features:
- Zooming of the image
- drag bars that allow the different feature changes

### Things to work on
- Research on how to use the `<canvas>` tag in order to manipulate images wrapped around it
- Art:
https://labs.ideo.com/2014/06/04/painting-with-code/
- Generative Art:
http://rectangleworld.com/blog/archives/category/generative-art
- Edge detection https://codepen.io/taylorcoffelt/pen/EsCcr
- Prisma filtering https://www.quora.com/How-do-Prisma-filters-work

###Modules installed
- body-parser: parses data from the server to the html page
- cookie-parser: Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
- express: used for the server creation
- express-session: stores session id, cookie and data on server
- formidable: helps us upload image on server
- handlebars, express-handlebars: connects different pieces of html to one file. Saves time from needing to modify multiple fillStyle
- parseurl: Provides info on the url of the request object
- fs: File system
*/
