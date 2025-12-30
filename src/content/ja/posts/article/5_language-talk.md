---
layout: /src/layouts/MarkdownPostLayout.astro
locale: 'ja'
slug: 'lets-play-with-kanji-asian-language-talk'
title: "漢字であそぼう（言語学フィールドワークの話）"
type: 'article'
category: 'article'
pubDate: 2025-06-23
description: '漢字の遊び方と、言語がコンテンツに与える影響について。'
image:
    url: '/src/images/article/5_language-talk/5_language-talk_thumb.webp'
    alt: ''
    hero: false
tags: ["デザイン", "文化", "言語", "日本語", "中国語", "コーディング"]
---


まず、漢字の本質は絵だという話。

<a href="https://www.youtube.com/watch?v=JOvbeeFLZ2M" target="_blank">Real Real Japanのテトリスに見える漢字ネタYouTubeショート</a>を見て「あ、これ、CSSを使えば（画像ではなく）文字で表現できるやつだ」と遊んでみた結果がこちら。

<div id="dekoboko" class="size-fit flex mx-auto mt-[5rem] leading-none" style="text-align: center;">
  <div class="text-8xl green anim-deko">凸</div>
  <div class="text-8xl red anim-boko">凹</div>
</div>
<p class="pt-1 text-center text-sm">元ネタ：<a href="https://www.youtube.com/watch?v=JOvbeeFLZ2M" target="_blank">Real Real Japan</a></p>


<div class="flex-wrap pb-4 mb-7">
こんな感じで遊べるわけですが…
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

個人的にはLANケーブル（凸）とアダプター（凹）のように見えることの方が多いような気がします。
<div class="flex-wrap md:flex max-w-full gap-6 items-center">

<figure class="flex-col">

![](/src/images/article/5_language-talk/5_dekoboko_lan.gif)

</figure>
<figure class="flex-col w-[180px]">

![](/src/images/article/5_language-talk/5_lan-adapter.webp)

</figure>
</div>




### デザインの中の言語

ところで形で遊べるのはもちろん、音でも遊べてしまうのが漢字の面白いところ。  

以前台湾へ旅行に行って気づいたのが、言語がデザインに与える影響って大きいんだなぁということ。  
外国語を中国語に訳す際、『コカ・コーラ→<span lang="zh">可口可乐</span>（ke kou ke le / 口に合う、楽しい）』のように音と意味の両方が原語に近い漢字を当てるのがルールですが、どうやら音を優先してトンチの効いた訳し方をすることもあるようで。


<figure class="w-[240px]">

![](/src/images/article/5_language-talk/5_pocari-sweat.webp)

<figcaption>「Sweat」（汗をかく＝脱水する）が「水を得る」になっている</figcaption>
</figure>



あと、日本語ネイティブからすると、中国語の単語って日本語のちょっと大げさバージョンなことが多いような…と感じることもありました。  
例えばこんな感じで↓

|  | 日本語ネイティブ的反応 |
| :-: | :-: |
| ![](/src/images/article/5_language-talk/5_fire-extinguisher.webp) | 火を、滅するんや…！ |
| ![](/src/images/article/5_language-talk/5_slip.webp) | 階段が地滑りする脅威 |
| ![](/src/images/article/5_language-talk/5_push.webp) | ドアはみんなのアイドル（推し） |


### 創作の中の言語

言語というものはストーリーのアイデアにも影響するようです。  
例えば、葬送のフリーレンのユーベルが使う『大体なんでも切る魔法』。  

簡単に言うと、ユーベルは自分は『布を切っている』のだとイメージすることで、実際の対象物がいかに硬かろうが厚みがあろうがぷにぷにのグミだろうが切断できてしまうわけですが、フランス語ネイティブの観点からすると、この発想は日本語の影響なくしては生まれ得ないんだそうです。  
というのもフランス語話者にとって、使う道具が違う『布を切る』と『バターを切る』は感覚的に同じ動作だと思えないのだとか。  
そこを日本語は同じカテゴリーに入れてしまうからこそ、この『大体なんでも切る』というアイデアが生まれたのだと。

まあ日本語でも厚いものには『斬』の字を当てますが、確かに手法についてはあまり気にしていないかもしれません…。  
現に『斬る』の発音は『切る』と同じですし、布もバターも同じ『切る』、肉も『切る』ものだし、トマトのスライスも『薄切りにする』…。  
<span class="text-sm">（※英/仏：『切る = cut/couper』『斬る = slash/sentailler』『肉を切る = chop/hacher』『薄切りにする = slice/trancher』）</span>  

ううん、考えてみるとおもしろい。

そんなフランス語ネイティブ視点の印象をまとめるとこんな感じです。  
ユーベルの魔法の原点はこうではなく…
![](/src/images/article/5_language-talk/5_ubel_sewing.webp)

硬いものをよく斬っているので、こうあるべきだと。
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