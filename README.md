#Propeller Communications | Demo
This is a demo done as part of my job application for a front-end developer position with Propeller. You can preview the HTML files [here](http://rawgit.com/rznn/propeller-communications-demo/master/public/index.html) or the working [PHP version](http://rznart.com/work/propeller-demo/) on my website.

I have purposely pushed the entire public **and** source folders, where the latter should make it especially easy to read. Nothing has been minified or stripped of comments. The project's small enough as is, the only concern here is for legibility.

Anyway, let's get started!
##What was the test?
[This](https://raw.githubusercontent.com/rznn/propeller-communications-demo/master/demo-homepage.jpg), or more exactly, to build the front-end interface for the design I was given. Whilst some "artistic license" has indeed been left for the taking (thank you, Propeller, I was really hoping for that), the design, for the most part, needed to follow some common sense rules: clean code, good semantics, W3C validation, accessibility concerns, responsiveness, the usual. Oh, and no frameworks. Sorry, Bootstrap. * sad face *

Now, since most of the **code is** actually **commented**, I will take some time to talk about my process instead.

** If you would like to [skip over this](#w3c-validation), go ahead.**

##What goes where?
Probably the first question I asked myself was, "what goes where?" This is especially true since no mobile design was supplied, and I have only recently converted to the mobile-first ideology.

After sketching out a few mock-ups, I quickly arrived to a rather obvious conclusion: I need a grid. So, with Bootstrap and Bones in mind, I made a very similar, light-weight grid that would be perfectly tailored for this occasion. I then extracted and optimized the images from the .psd file I was provided, and gave them some good descriptive names.

Then, like a well home-made soup, everything went into [my very own boilerplate](https://github.com/rznn/up-n-running-gulp-boilerplate) (*yeeey, shameless promotion?*) and things started rolling.

##The Achilles' heel
I know it's wrong starting out with animation, but... is it? I think it depends. In this particular scenario, I feel that designing and attaching a personality to the website before laying out the foundations (HTML, CSS), was in fact beneficial. Same reason why mobile-first approach is so popular nowadays, right? Incorporate and think about it as a whole, don't just add stuff at the end. You'll know what I'm talking about once you open [the page](http://rawgit.com/rznn/propeller-communications-demo/master/public/index.html). Not life-changing, I know, but pleasant, fun and it doesn't get in your way. What's not to want?

And in these respects, I am quickly becoming a huge fan of [GSAP](http://greensock.com/gsap), which is an awesome animation platform that I started using a few months ago.

##Challenges
Even though not necessarily a challenge, creating a carousel plugin proved to be far more confusing than I initially imagined, mostly because I was already on the right *thinking* track before starting, but the more I researched, the more confused I became. Eventually, I ended up grabbing [one of the simplest plugins available](http://www.basic-slider.com/) and tweaked it to my own needs. I removed a bunch of unnecessary config options, rewrote some functions, removed some more unnecessary jQuery styling which I more or less replicated in SASS and decided on using background-images and styling them properly, since the proposed image tags implementation did not prove to be that responsive.

A more *grey* area, for me at least, is PHP, and figuring out the forms took some time. I am, nonetheless, very satisfied with the results - success/error status indicators, fully-functional e-mail sender and a follow-up page. I am aware, however, that the designer of the initial mockup probably wanted to create dropdown datepickers accessible on click from each of the two *birthday* fields. I have chosen **not** to do so and I shall explain why.

The infamous datepickers have made most of us cringe at least once during our lifetimes. Sure, they're fine if you're only looking to pick a date in the past week or month or so; go further than that, and it's hell - infinite scrolling or tapping, they do not exactly match the design of the website, especially on mobiles and sometimes even cover important elements (such as the "submit" button in our case"). Upon further research I discovered that most developers agree that a simple text input is a better choice most of the times, unless there is a need for greyed-out days or short timeframes.

In regards to the form validation, I opted for a mix of native HTML constraints (min-max, pattern), javascript (checking for empty fields, preventing numbers from being input into name fields and letters into number fields, success and error feedback), as well as PHP as a final verification. No regex involved.

##Extras
Should you not wish to complete the form, you can also access the [thank-you](http://rawgit.com/rznn/propeller-communications-demo/master/public/thank-you.html) page from here. As you can probably tell by now, I had quite a lot of fun with this project and I do like giving a little bit of my "umph" to everything I do.

*Edit* 14.07.15. One of the things I did not fully understand in the original design were the two backgrounds with a black gap between. It certainly wasn't a design choice, so I figured either they were there to get a better feeling for the website or options to choose from. I decided to make a random background generator instead (hit refresh a few times, no cookies used).

##W3C Validation
The project reaches [100% HTML validation](https://validator.w3.org/nu/?doc=http%3A%2F%2Frznart.com%2Fwork%2Fpropeller-demo%2F) according to W3C Nu HTML Checker.

##Resources and Credits
- As always, thank you to Nicolas Gallagher for the amazing [normalize.css](https://github.com/necolas/normalize.css)
- And thanks to John Cobb for sharing the [Basic jQuery Slider](http://www.basic-slider.com) with us