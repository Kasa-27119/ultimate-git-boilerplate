# GIT Boilerplate  
This is a boilerplate utilising gulp and node.js to automate time-consuming tasks such as compilation, linting, and minification.  
In this boilerplate, we are compiling and watching the sass file, setting up live reload on the browser, checking or linting the js file for errors, minifying the js file, renaming files, running a web server, and running gulp.

- As we are using sass instead of csss, we need a compiler to convert the scss into a standard css style sheet,   
and watching out for any saved changes and implementing them in the live reload of the html document.
- We are also checking for any errors within the javascript file that might affect functionality and minifyig them for production.

## Installation of Gulp 
1. You will have to install both npm and node.js and verify them using your command terminal.  
2. Then within the project directory, you will have to initialise npm, creating a package.json file.  
3. You will also have to install gulp gloabally, and then locally within the project directory.
4. Create a gulpfile.js file, which with contain the tasks we will use in the boilerplate.
5. Create a default task and run gulp by typing "gulp" or the name of any task in project directory terminal.

## Installation of Node Modules
To install the node modules needed for the boilerplate, first check the developer dependencies on the package.json file. This will give you a list of gulp node modules eg. gulp-connect, gulp-sass that are needed during the development of the project.  

### Gulp Node Modules Required
- **gulp** - the main gulp module to run the tasks below
- **gulp-sass** - compiles the sass file into standard css
- **gulp-livereload** - automatic live reload of the browser after changing files
- **gulp-connect** - creates a local web server for development
- **gulp-jshint** - lints or checks the javascript file for any errors
- **gulp-rename** - renames files
- **gulp-minify-css** - minifies css or reducing size by removing unneccessary whitespace or comments

To install these node modules, go into the project directory, open up the terminal and type "npm install" with the names of the required node packages after it, with spaces to separate each of them. At the end of the command, do not forget to type --save-dev to add these packages as "development dependent" on the package.json file.

## APIs/CDNs Used In Boilerplate
This boilerplate also uses various CDNs or Content Delivery Networks for:
1. **JQuery** - a JS library used for event handling, animations, DOM manipulation and Ajax
2. **JQuery UI** - a JS library used with JQuery for UI, effects, and themes
3. **Mapbox** - creates interactive and customisable mapboxes for websites
4. **Font Awesome** - a customisable icon library
5. **Swiper** - open-source touch slider

These are installed by linking their JS scripts and css stylesheets in the HTML document, and by initialising them and customising their features in the custom script.js file. Some of these eg. Font Awesome, Mapbox, Swiper have icons and swiper layout already included in the HTML file to test their initialisation and functionality.
