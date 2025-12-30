---
layout: /src/layouts/MarkdownPostLayout.astro
locale: 'en'
slug: 'lets-play-with-kanji-asian-language-talk'
title: "Let's play with Kanji (Asian language talk)"
type: 'article'
category: 'article'
pubDate: 2025-06-23
description: 'How to have fun with Kanji and linguistic influences on contents.'
image:
    url: '/src/images/article/5_language-talk/5_language-talk_thumb.webp'
    alt: ''
    hero: false
tags: ["design", "culture", "language", "Japanese", "Chinese", "code"]
---


Kanji are, in its core, pictures. 

When I watched <a href="https://www.youtube.com/watch?v=JOvbeeFLZ2M" target="_blank">YouTube short by Real Real Japan</a> that made a pun with two kanjis look like Tetris, I thought, "Oh, yeah. I can make it with the actual characters (not symbols) with CSS!"

<div id="dekoboko" class="size-fit flex mx-auto mt-[5rem] leading-none" style="text-align: center;">
  <div class="text-8xl green anim-deko">凸</div>
  <div class="text-8xl red anim-boko">凹</div>
</div>
<p class="text-center font-bold pb-1"><span class="green">deko</span> <span class="red">boko</span><br><span class="text-sm">(bump, bumpy)</span></p>
<p class="text-center text-sm">Inspired by <a href="https://www.youtube.com/watch?v=JOvbeeFLZ2M" target="_blank">Real Real Japan</a></p>


<div class="flex-wrapper pb-4 mb-7">
Here's how you can play with them, but... 
<div class="flex flex-col max-h-64">
<p class="mt-4 pb-0">HTML</p>

``` html
<div id="dekoboko" class="size-fit flex mx-auto mt-[5rem] leading-none" style="text-align: center;">
  <div class="text-8xl green anim-deko">凸</div>
  <div class="text-8xl red anim-boko">凹</div>
</div>
```

</div>
<div class="flex flex-col max-h-64">

<p class="mt-4 pb-0">CSS</p>

``` css
@import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap&text=凸凹');

#dekoboko * {
    font-family: 'Kosugi Maru';
}
.green {
    color: #00dd00;
}
.red {
    color: #ff0000;
}
#dekoboko .anim-deko,
#dekoboko .anim-boko {
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}
#dekoboko .anim-deko {
    animation-name: anim-deko;
}
#dekoboko .anim-boko {
    animation-name: anim-boko;
}
@keyframes anim-deko {
    45% {transform: translate(0,0);}
    55%, 
    100% {transform: translate(.5em, 0);}
}
@keyframes anim-boko {
    20% {rotate: 0deg; transform: translate(0,0);}
    30% {rotate: -180deg; transform: translate(0,0);}
    40%, 
    45% {rotate: -180deg; transform: translate(0em,1em);}
    55% {rotate: -180deg; transform: translate(.49em,1em);}
    80%, 100% {rotate: -180deg; transform: translate(.49em,.37em);}
}
```
</div>
</div>

For me, sometimes they look more like a LAN cable (凸) and an adapter (凹).
<div class="flex-wrapper md:flex max-w-full gap-6 items-center">

<figure class="flex-col">

![](/src/images/article/5_language-talk/5_dekoboko_lan.gif)

</figure>
<figure class="flex-col w-[180px]">

![](/src/images/article/5_language-talk/5_lan-adapter.webp)

</figure>
</div>


### Language influence in designs

Using shapes isn't the only way to play with kanjis. You can also play with sounds. 

When I traveled to Taiwan, I found many linguistic influences in local designs. In general, translating foreign words to Chinese requires selecting kanjis with the closest sounds and meanings to the original language *(e.g. Coca-Cola to <span lang="zh">可口可乐</span> (kěkǒu kělè) = tasty fun)*. But, oftentimes, translators seem to prioritize the sounds over the meanings in humorous ways.

<figure class="w-[240px]">

![](/src/images/article/5_language-talk/5_pocari-sweat.webp)

<figcaption>Sweat (dehydration) is translated as "get water" (hydration).</figcaption>
</figure>



However, as a native Japanese speaker who uses kanjis in a slightly different way, I noticed Chinese words use exaggerated versions of kanji combinations compared to Japanese words with the same meanings.


Let's see the differences from a Japanese language perspective: 

|  | My reaction on Chinese spellings | Japanese equivalents |
| :-: | :-: | :-: |
| ![](/src/images/article/5_language-talk/5_fire-extinguisher.webp) | Destroy (<span class="text-sm" lang="zh-cmn-Hant">滅</span>) the fire (<span class="text-sm" lang="zh-cmn-Hant">火</span>)...!<br> | 消火器<br><span class="text-sm">(fire "eraser")</span> |
| ![](/src/images/article/5_language-talk/5_slip.webp) | Danger of a landsliding (<span lang="zh-cmn-Hant">地滑</span>) staircase | 滑る<br><span class="text-sm">(to slip)</span> |
| ![](/src/images/article/5_language-talk/5_push.webp) | A door is everybody's idol = fave (<span lang="zh-cmn-Hant">推</span>) | 押す<br><span class="text-sm">(to push)</span> |


### Language influence in fictions

Language influences story ideas as well. 
For example, the "cutting anything" magic of Übel from <a href="https://www.imdb.com/title/tt22248376/" target="_blank">Frieren</a>.

Basically, she can cut anything by imagining she's "cutting a cloth" no matter how the target object is hard, thick, or gummy. According to a native French speaker, this concept could not born without the influence of the Japanese language. Cutting a cloth and cutting butter are not considered the same actions for French native speakers, especially when these actions require different tools. But, Japanese native speakers put these cutting actions in the same category, so this "cutting anything" idea came out.  

Though we have a dedicated kanji for cutting thick things (斬 = slash), I think we don't really care about how we cut things. Actually, the pronunciation of its verb form 斬る (to slash) is "kiru" which is the same as the standard verb 切る (kiru = cut). Cutting a cloth and butter share the same verb 切る, chopping meat is also 切る, and slicing tomato is 薄切りにする (cut thin), while French has unique words for each of them<span lang="en-us">...</span> Well, interesting.

To summarize his opinion, the origin of her magic shouldn't have been like this,  
![](/src/images/article/5_language-talk/5_ubel_sewing.webp)

but this, as she cuts a lot of solid things.  
![](/src/images/article/5_language-talk/5_ubel_butter.webp)


<style>
    @import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap&text=凸凹');

    #dekoboko * {
        font-family: 'Kosugi Maru';
    }
    .green {
        color:#00dd00;
    }
    .red {
        color: #ff0000;
    }
    #dekoboko .anim-deko,
    #dekoboko .anim-boko {
        animation-duration: 5s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
    #dekoboko .anim-deko {
        animation-name: anim-deko;
    }
    #dekoboko .anim-boko {
        animation-name: anim-boko;
    }
    @keyframes anim-deko {
        45% {transform: translate(0,0);}
        55%, 
        100% {transform: translate(.5em, 0);}
    }
    @keyframes anim-boko {
        20% {rotate: 0deg; transform: translate(0,0);}
        30% {rotate: -180deg; transform: translate(0,0);}
        40%, 
        45% {rotate: -180deg; transform: translate(0em,1em);}
        55% {rotate: -180deg; transform: translate(.49em,1em);}
        80%, 100% {rotate: -180deg; transform: translate(.49em,.37em);}
    }

    td img {
        width: calc(100% - 1em);
        max-width: 15rem;
    }
</style>