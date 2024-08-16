Step One:
Clear out the default page Next.js home page that is shown. This means delete the css in "/app/page.css"✅, then make the component in "/app/page.js" just return the words "home page" for now. Check the page still loads and that it shows those words.✅

Now it's time to move move across the top level of you application. In your current Vite app this is probably where you render something like the the top level page wrapper and inside that the Header, Main and Footer components.

In the world of Next.js you would put this stuff in the "/app/layout.js" file. A layout is a thing that wraps a page. On the average website most pages on the site will have the same header and footer but the middle bit changes. The idea of a layout is that it allows you to provide your pages with a wrapper of sorts.

If you look carefully at the "/app/layout.js" file you will see it renders "{ children }". Children in this case is the page component being passed to the layout. So the home page will render where you see the world children.

So once you move across your top level you could have something like ...

<html lang="en">
      <body className={inter.className}>

          <Header />
               {children}
           <Footer />

       </body>

 </html>

Now when a page loads, the page component will load where you see "children". So in your home page component, "/app/page.js", you could put the rest of the home page (main and everything in it).

Any "global" css (stuff to style the body or wrapper etc) can go in "/app/global.css".

To move across your Google Font you can see the default Next.js app is using the Google Font Inter. Go to "/app/layout.js" and replace "Inter" with "Aleo" to get our font 🙂.

Step Two:✅

It's time to move all of your components from yesterday's Vite application into the Next.js application first. Do this component by component. Keep checking checking you can import and use each component once you've moved it across. Don't rush.

If you're wondering where to move your components to in the new Next.js project: make a new folder at the top of the project called "/src", inside that you can have your components folder. You could probably just copy across the whole "components" folder from the Vite app but it's safer to do it component by component to make sure everything works. You will find you need to update things!

As you move a component across - import it into the home page ("/app/page.js") and make sure you can use it.

Just so you know ... Next.js has it's own way of doing images. You will need to use their <Image /> component in your components.

This will mean updating some of your components as you move them across (Image component docs - https://nextjs.org/docs/app/building-your-application/optimizing/images). As well as using the Image component from Next.js you will need to copy all your images across from the Vite app to the Next app. Put them into the "/public" folder.

Once all your components are moved across and everything is right in the world, move to step three!

Step Three✅

It's time to create the new page called "founders" in the Next.js app.

In Next.js the way that we create new pages is by creating folders and files - you would say that the routing is file based. So ... at the moment we have a home page and that is all we have. The home page component is "/app/page.js" - the home page is accessed at "http://localhost:3000/".

If we want to make a new page called "contact" we would create a new folder "/app/contact" and inside that we would have a file called "page.js". If you want to understand in more depth look here - https://nextjs.org/docs/app/building-your-application/routing/pages.

Now you know how to make a new page - get started making our new "/founders" page.

We would suggest you make the new folder and file, and create a super simple component that just returns "<h1>Founders</h1>" for now. Once you think you've made a new page save your work and see if you can navigate to that page in your browser ("http://localhost:<PORT>/founders"). Great success!

Now see if you can add a Next.js "<Link href="/founders"></Link>" component somewhere on your home page. If you need to see how to import and use the Link component look here: https://nextjs.org/docs/app/api-reference/components/link

Once you have added the link to the home page somewhere, try to click it - does it take you to the new page? Well done - you've now got a two page application!

Come back and complete the founders page later - keep it simple for now. Focus on getting the two pages, then making a menu that opens and closes (state), then being able to click a link in that menu to get to the new page.

Now you have the two pages move onto step four!

Step Four

The next thing to do is to try and get some simple state working. It sounds like you might need some simple toggle (off/on) type state. Since it's going to be used in the header you might consider adding your state there. If you think you've created a simple bit of state try to console log it 🙂.

If you have some simple state it's probably time to connect it to a click event - don't forget the learning resources from yesterday afternoon / evening. The basic thing you want to do is take a button click and change (set) your state when that happens.

If you've done all of that you now have all the different parts of the puzzle:

You have two pages, and you have learned how to make <Links> in Next.js so users can move between them.
You have some simple toggle state (off/on or open/closed) in your header.
You can change the state with a click of a button.

Now all you need to do is use that bit of state ("menuToggle" maybe) to show/hide a menu. The rest is all CSS. When the menu is open it's full screen and it shows: the menu close button, a link to the home page, a link to the founders page.

## 🔥Fireplace Palace Hackathon🔥

▶🟪 Create a new component on the home page that allows a user to select (click) their country and see the latest review (fetch data).
🟡 on the `components` folder, create a folder for the component `Trusted` and inside it create a `Trusted.jsx` file and a `Trusted.css` file.
🟡 on the `Trusted.jsx` create the "basic" component `Trusted` and import it to the `Main.jsx` and see if works (`app.js` file)
▶ make 3 buttons with country name (England, Wales and Scotland), selected country initial value is null,
▶ when you click a button it calls a <selectCountry> function and passes the country name.
▶ When the button is clicked it becomes orange (active)
▶ make a sate to hold the selected country
▶ react to changes in the state and do something
▶ fetch data from API https://seal-app-336e8.ondigitalocean.app/reviews?country=scotland

▶🟪 Presentations:
Normal `6 minute demo presentations` 🙂 at 1:20 - 2:20 on Friday.

Intro
Context setting.
Demo the app from the perspective of the user.
Show your planning.
Show your code and explain it.
Reflections
