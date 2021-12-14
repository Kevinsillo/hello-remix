# Glitch in Bio!

Your links, your way. A link-in-bio app you can customize any way you want.

IMPORTANT: That is a theme remix of [Glitch in bio](https://glitch.com/~glitch-in-bio) (Original project)

### Edit `settings.json` to add your own info and links

Replace the meta info, links and social sites we added for you in `settings.json` and you'll see your changes instantly updated in real time! 

Now, you can show your Twitch stream (only when you are online). Add your account username in `settings.json / twitchAccount`

For the links icons, you will search icon name in [Iconify](https://icon-sets.iconify.design/)

### Modify theme

To help you make the site your own we've included some themes. In `settings.json` you can enter `simple` (default) or `custom-theme` as the value for `theme`. 

📝  _If you want to see how these themes are made, look in the `public/styles/themes` directory! If you don't have a valid theme entered, the site will default to the styles outlined in `style.css`._

### ...or create your own!

Customize your site by updating `custom-theme.css` inside the `public/styles/themes` folder with CSS to update colors, fonts, or any other style rules. Update your `theme` in `settings.json` to `custom-theme` to have the app use those new rules.

🖼️ Check out examples of other themes the community has created in [this Playlist](https://glitch.com/@glitch/featured-glitch-in-bio-remixes) and [submit your own](https://forms.gle/9WFWjSmhdiEoRgVs5) to share!

## What's in this project?

← `README.md`: That’s this file. You can delete it, or keep it handy so you don't lose the instructions.

← `index.html`: This is the main page template vite uses to build your site. You'll see the handlebars syntax for importing the data you specify in `settings.json` (built into the structures in `layout/`). You'll also find some tips on configuring the page in the HTML comments.

← `settings.json`: Settings for your name, links, images, and social media. The `index.html` page includes the data using the structures defined in `layout/`.

← `layout/`: Markup templates — you can edit every line of HTML or never even look at any of it. The data you specify in `settings.json` will be built into the page using the HTML in here using handlebars syntax (e.g. `{{settings.name}}`).

← `public/styles/`: Stylesheets for Glitch in Bio, including alternate themes. Change your theme in `settings.json`. You can create a new theme by adding a CSS file to this folder and specifying it using its name in the settings (e.g. `glitch`, `gallery`, `menu`, or whatever yours is called!)

← `public/manifest.json` and `public/sw.js`: These set your site up to function as a Progressive Web App (PWA)–if you add new assets (e.g. stylesheets) you can include them in the list in `sw.js` to cache your site for offline viewing.

← `assets`: Add images here and copy the links into `settings.json` to show them in your site.