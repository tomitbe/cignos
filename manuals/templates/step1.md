Both [Meteor](meteor.com) and [Ionic](ionicframework.com) took their platform to the next level in tooling.
Both provide CLI interface instead of bringing bunch of dependencies and configure build tools.
There are also differences between those tools. in this post we will focus on the Meteor CLI.

Start by installing Meteor if you haven't already (See [reference](https://www.meteor.com/install)).

Now let's create our app -- write this in the command line:

    $ meteor create --example angular2-boilerplate whatsapp

> Alternatively, use your web browser to access the link:
> https://github.com/bsliran/angular2-meteor-base
> Download the template application, and unzip the files inside. Rename the folder to "whatsapp" and place it into the default directory.
> Or just use clone the repository.

Now let's see what we've got. Go into the new folder:

    $ cd whatsapp

It's a boilerplate that you can use anytime you want to create a project based on `angular2-meteor`.

We are going to add our own files for this tutorial. So let's start by deleting most of the contents in these three folders:

    - /client       (delete)
    - /server       (delete)
    - /both         (delete)

Leave only those files:

    - /client/index.html
    - /client/main.ts
    - /client/imports/app/app.component.ts
    - /client/imports/app/app.component.html
    - /client/imports/app/app.component.scss
    - /client/imports/app/app.module.ts
    - /server/imports/server-main/main.ts
    - /server/main.ts

Let's now update those files:

- `client/index.html` - stays exactly the same

- `client/main.ts` - one small change

- `client/imports/app/app.component.ts` - stays the same

- `client/imports/app/app.component.html` - remove `<demo></demo>`

- `client/imports/app/app.component.scss` - leave it empty

- `client/imports/app/app.module.ts` - remove Providers and Components

- `server/main.ts` - without any change

- `server/imports/server-main/main.ts` - leave only Main class with empty `start()` method

{{{diff_step 1.1}}}

## Ionic 2

Our project looks clean now. Since we're going to use Ionic, we have to install a proper package:

    $ npm install ionic-angular@2.0.0-rc.3 --save

It requires few more dependencies:

    $ npm install @angular/{http,platform-server} ionicons --save

Great, we have all packages installed, let's move to the more interesting part.

### IonicModule

As you probably know, with Angular 2.0 comes `NgModule` (see [documentation](https://angular.io/docs/ts/latest/guide/ngmodule.html)).

Ionic provides their own NgModule, called `IonicModule` (see [documentation](http://ionicframework.com/docs/v2/api/IonicModule/)).

Let's use the `AppComponent` as the main component of our app (not the root component):

{{{diff_step 1.3}}}

We removed `BrowserModule` since all the declarations and providers are included in `IonicModule`.

We also added [`IonicApp`](http://ionicframework.com/docs/v2/api/components/app/IonicApp/) component which is a root component that lives on top of our `AppComponent`.

Now we have to change the root component's selector inside `client/index.html`:

{{{diff_step 1.4}}}

### Styles

We need to create our own Ionic stylesheet based on the source:

{{{diff_step 1.5}}}

You can just copy paste it.

### Fonts

Ionic looks for fonts in directory we can't access. To fix it, we will use `mys:font` package to teach Meteor how to put them there.

    $ meteor add mys:fonts

That plugin needs to know which font we want to use and where it should be available.

Configuration is pretty easy, you will catch it by just looking on an example:

{{{diff_step 1.7}}}

Now `roboto-medium.ttf` is available under `http://localhost:3000/fonts/roboto-medium.ttf`.

### Native

Yes, with Ionic you're able to use any native functionality you need.

    $ npm install ionic-native --save

Now we can use one of those functionalities. Let's work with Status Bar:

{{{diff_step 1.9}}}

Do a quick overview:

* `platform.ready` returns a `Promise` and tell us that the platform is ready and our plugins are available
* `StatusBar.styleDefault()` makes the app uses the default statusbar (dark text, for light backgrounds).

### Mobile platform

To add mobile support, select the platform(s) you want and run the following command:

    $ meteor add-platform ios
    # OR / AND
    $ meteor add-platform android

To run an app in the emulator use:

    $ meteor run ios
    # OR
    $ meteor run android


To learn more about **Mobile** in Meteor read the [*"Mobile"* chapter](https://guide.meteor.com/mobile.html) of the Meteor Guide.

We also need to add few meta tags:

{{{diff_step 1.11}}}

Now, in order to get smooth mobile experience in Ionic 2, we need to make some modifications to Meteor's default packages. 

Meteor comes with a mobile support package called `mobile-experience` which is a bundle for three packages: `fastclick`, `mobile-status-bar` and `launch-screen`, and we need to remove `fastclick` in order to get better result.

So let's make those changes:

    $ meteor remove mobile-experience
    $ meteor add mobile-status-bar
    $ meteor add launch-screen

### Web

You can still use Ionic app in a browser. Just run:

    $ meteor

Or with usage of npm script we have predefined in the boilerplate at the very beginning:

    $ npm start

Go to `http://localhost:3000` to play with the app.