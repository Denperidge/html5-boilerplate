# HTML5 Boilerplate (modified)

This repository is my modified version of the HTML Boilerplate, for use in my personal projects.

These changes include my own Google Analytics link, and some stripped out features from the original that I no longer require (for example, no need for Travis testing for a fork that is intended for my personal sites). This is not by any means due to any complaints with the original repository, it's simply me branching out the amazing template into a template with my own quirks built-in, for use on my own websites (seeing as it wouldn't make sense to keep re-cloning and re-doing my changes with every site I build). I'll keep track of every change (and why I make them) for personal documentation reasons.

## Why fork?

Forking this might seem like an illogical option, seeing as the original repo's intent is to be universally used by everyone, whilst my fork is simply intended to be used with my own websites. I'm doing this since the HTML5 Boilerplate has some amazing ideologies (to give an example, meta charset's location at the top and google analytics' placement at the bottom of the page) that are a rare find, and I'd like to base my own template from the foundation that they've layed. It'd feel unfair to simply download the latest Boilerplate release and upload it with my changes as if it was my own. Instead, I'd like to grow my own template alongside the original repository, whilst still keeping it adjusted to my needs so that it fits right into my projects.

## Changes
- Removal of IE11 flavour

  According to W3C, [Internet Explorer 11 accounts for about 3% of the browsers](https://www.w3counter.com/trends), so we have not yet arrived at a point where IE11 can be disregarded. However, with how heavy web development can become with platform specific quirks, I don't have the ability to design special assets for IE11 alone. I will still try to keep my websites functional on it, but the cost-benefit for adding flavour specifically for IE11 is not worth it for a single developer (whose target audience would probably not be running Internet Explorer 11 either way).

- Removal of Travis

  Travis is no longer necessary seeing as this is intended for personal use (see [Introduction](#html5-boilerplate-modified) and [Why fork?](#why-fork)).

- Favicon in folder

  Although it is unorthodox, I placed my favicon in a folder, since I like to keep my files a bit organized. The only bug this causes is non-html links not rendering the favicon, however, this can be fixed with a simple redirect. 

- Modernizr removal

  I'll be using Modernizr in certain projects that require special features. However, since this template will be used in some low-key sites (for example, a simple introduction page), loading Modernizr by default will be overkill.

- JQuery removal

  For the same reasons as the previous .