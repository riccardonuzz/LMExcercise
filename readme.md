# Example parking widget

Enojyed working on this parking widget in a past interview.


![Widget screenshot](https://github.com/[riccardonuzz]/[parking-widget]/blob/[master]/assets/widget.png?raw=true)


The widget can be instantiated as a normal object (eg. const Widget = new Widget()). In order to work properly, needs some data to be passed through the constructor (assets/model.json):
 - vendor;
 - dictionary;
 - parkings.

These data are passed into the component hierarchy until they are used to render DOM element (parking list, features list, etc..). In order for the Web app to communicate with widget and adding products(parkings in this case) to cart, a callback is needed. In this way, whenever the user clicks on a parking, the callback is called and the parking ID is passed into it.


<br />
<br />

## How to run this project

```sh
npm i
npm run start
```

or

```sh
npm i
npm run build:prod
```

if you want to compile the project.

Including widget in your project is very easy. You just need to include in a `<script>` tag the compilation result.
