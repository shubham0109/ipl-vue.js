# ipl 

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## OverView

It is a single page front-end app which in an interactive way gives the user some exciting statistics about IPL. 
It has a very simple dashboard with a neat data visualization functionality embedded in it.

## Major Libraries/Frameworks
- Vue.js: used to create the entire app.It basically had three basic components Modal, Carousel, Button. Modals were where the data was rendered. Carousel was used to give the app some dynamism. Buttons were used to display the teams.
- Bootstrap: used bootstrap for it's fantastic grid system and cards. It also works well with Vue
- Express: to host the app on heroku
- Jquery: for DOM manipulation and in bootstrap.
- Chart.js: for data visualization purposes. Built on D3.js Chart.js provides an easy way of rendering charts. Basically used the 'pie' and 'bar' charts.
-jquer.csv.js: to convert the csv data to json format
- webpack: as a package bundler. Used with Vue.
- Google fonts and other stock images are also used.

## Bonus Points
- The App was created in Vue.js. There were three basic Components. `Modals` were used for the basic pop-up box with data in it. `Carousel` was used to render a nice carousal. `Button` was used as means to display teams.All these components were rendered in `App.vue`.

- For optimizing the time I created and stored all the data rather than rendering it duriong run-time. This way the charts were created instantaneously. Some of the images I used were quite bulky so I also compressed them into the desired size.

- I have used Bootstrap, which will make the display in mobile easy to handle. Although I have also used hover functions extensively which is not very mobile friendly.

- I have tried using faster techniques and new technologies. Although I am not too sure whether it is progressive web app.

- Since I don't rely on much external data, this is offline usable. It could however be made better by using cache to store some amount of data internally.
