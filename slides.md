---
theme: default
title: Beyond the API
favicon: /favicon.png
info: |
  ## Beyond the API
  Engineering AI Systems from First Principles

  Qwen AI Series · UTAMU Kungu Campus · 27 November 2026
transition: slide-left
mdc: true
colorSchema: light
fonts:
  sans: Plus Jakarta Sans
  mono: Fira Code
  weights: '400,600,700,800'
---

<img src="/logos.png" class="absolute top-8 left-14 h-16" />
<img src="/mascot.png" class="absolute top-4 right-6 h-40" />

<div class="mt-20">
  <span class="pill">Qwen AI Series</span>
</div>

<h1 class="!text-7xl !leading-none !mt-4 !mb-2">Beyond <span class="accent">the API</span></h1>

<p class="text-2xl !mt-2" style="color: var(--brand-purple)">A small model, built just for Luganda.</p>

<div class="event-row absolute bottom-10 left-14 right-14">
  <div>
    <div class="label"><carbon-calendar class="inline" /> Date</div>
    <div class="value">Friday, 27 November 2026</div>
  </div>
  <div>
    <div class="label"><carbon-time class="inline" /> Time</div>
    <div class="value">2:00 – 5:00 PM</div>
    <div class="sub">EAT (UTC+3)</div>
  </div>
  <div>
    <div class="label"><carbon-location class="inline" /> Venue</div>
    <div class="value">UTAMU Kungu Campus</div>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="text-3xl font-bold mb-8">"Oli otya?"</div>

<div class="grid grid-cols-2 gap-8 items-center">
  <div>
    <img src="/shot-qwen.png" class="shot" />
    <div class="shot-cap"><b>Qwen3.7-Plus</b> · doesn't recognise Luganda</div>
  </div>
  <div v-click>
    <img src="/shot-sunflower.png" class="shot" />
    <div class="shot-cap"><b>Sunflower</b> · repeats the same reply</div>
  </div>
</div>

<div class="disclaimer">
  Both providers state that their models can produce wrong answers. Single prompts, captured 27 Nov 2026 — not a benchmark.
</div>

---
layout: center
class: text-center
---

<div class="big">Some models speak Luganda.</div>
<div v-click class="big muted mt-4">Many stumble.</div>
<div v-click class="big purple mt-4">So I built one just for Luganda.</div>

---
layout: center
class: text-center
---

<div class="text-2xl muted">This is the Qwen AI Series.</div>

<div v-click class="big mt-8">I didn't call Qwen's <span class="muted">API</span>.</div>
<div v-click class="big purple mt-2">I used Qwen's architecture.</div>

<div v-after class="text-lg mt-8 muted">
  Recipe: <a href="https://github.com/jingyaogong/minimind" target="_blank">github.com/jingyaogong/minimind</a>
</div>

---
layout: center
---

<div class="pipeline">
  <div class="step">Data</div><div class="arrow">→</div>
  <div class="step">Tokenizer</div><div class="arrow">→</div>
  <div class="step">Pretrain</div><div class="arrow">→</div>
  <div class="step">Chat-tune</div><div class="arrow">→</div>
  <div class="step hot">Voice</div>
</div>

---
layout: center
---

<div class="text-center mb-10">
  <span class="pill">The brain</span>
  <h1 class="!text-6xl !mt-4">Kintu</h1>
</div>

<div class="stats">
  <div class="stat"><div class="n">30M</div><div class="l">parameters</div></div>
  <div class="stat"><div class="n">6.4k</div><div class="l">Luganda tokens</div></div>
  <div class="stat"><div class="n">2× T4</div><div class="l">GPUs</div></div>
  <div class="stat"><div class="n">0</div><div class="l">API calls</div></div>
</div>

<div v-click class="text-center text-xl mt-10">
  v1: 39M <span class="purple font-bold mx-2">→</span> v2: <b>30M</b> &nbsp;·&nbsp; smaller, and better
</div>

---
layout: center
class: text-center
---

<div class="text-2xl muted mb-8">The hardest part wasn't the model.</div>

<div class="stats three">
  <div class="stat"><div class="n">59,798</div><div class="l">chat pairs</div></div>
  <div class="stat"><div class="n">685</div><div class="l">conversations</div></div>
  <div class="stat"><div class="n">Open</div><div class="l">on Hugging Face</div></div>
</div>

<div v-click class="big mt-10">The data <span class="purple">didn't exist</span>.</div>

---
layout: center
class: text-center
---

<span class="pill">Live demo</span>
<h1 class="!text-5xl !mt-4">Talk to Kintu</h1>

<div class="flex justify-center items-center gap-14 mt-8">
  <div class="flex flex-col gap-4 text-left">
    <span class="prompt">Wasuze otya nno?</span>
    <span class="prompt">Osiibye otyanno ssebo?</span>
    <span class="prompt">Oli otya?</span>
  </div>
  <div>
    <img src="/qr-kintu.svg" class="qr" />
    <div class="qr-label">Try it now</div>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="big">Text is half the story.</div>
<div v-click class="big purple mt-2">Luganda is spoken.</div>

---
layout: center
---

<div class="text-center mb-10">
  <span class="pill">The voice</span>
  <h1 class="!text-6xl !mt-4">Tiny-Voca-LG</h1>
</div>

<div class="stats">
  <div class="stat"><div class="n">4.5M</div><div class="l">parameters</div></div>
  <div class="stat"><div class="n">100 min</div><div class="l">of speech per voice</div></div>
  <div class="stat"><div class="n">3.3 MB</div><div class="l">smallest model</div></div>
  <div class="stat"><div class="n">$0</div><div class="l">free Kaggle GPUs</div></div>
</div>

<div v-click class="text-center text-xl mt-10">
  Fine-tuned from an English model &nbsp;·&nbsp; runs <b>in your browser</b>
</div>

---
layout: center
class: text-center
---

<span class="pill">Live demo</span>
<h1 class="!text-5xl !mt-4">Hear it speak</h1>

<div class="flex justify-center items-center gap-14 mt-8">
  <span class="prompt">Wange, leero tujja kugenda e Mukono.</span>
  <div>
    <img src="/qr-voice.svg" class="qr" />
    <div class="qr-label">Try it now</div>
  </div>
</div>

---
layout: center
---

<div>
  <span class="pill">Lessons</span>
</div>

<div v-click class="lesson">
  <div class="num">1</div>
  <div><div class="t">Data is the moat.</div><div class="s">The architecture was free. Luganda data wasn't.</div></div>
</div>

<div v-click class="lesson">
  <div class="num">2</div>
  <div><div class="t">Small is a feature.</div><div class="s">No server, no bill, no internet needed.</div></div>
</div>

<div v-click class="lesson">
  <div class="num">3</div>
  <div><div class="t">Stand on shoulders.</div><div class="s">Fine-tuning isn't cheating. It's how real work gets built.</div></div>
</div>

---
layout: center
class: text-center
---

<div class="text-2xl muted">Beyond the API doesn't mean bigger models.</div>

<div v-click class="big mt-6">It means building for the people<br/><span class="purple">the API forgot.</span></div>

---
layout: center
class: text-center
---

<div class="huge">Your language<br/>is your <span class="purple">dataset</span>.</div>

<div class="flex justify-center gap-16 mt-12">
  <div><img src="/qr-kintu.svg" class="qr !w-36 !h-36" /><div class="qr-label">Kintu</div></div>
  <div><img src="/qr-voice.svg" class="qr !w-36 !h-36" /><div class="qr-label">Voice</div></div>
  <div><img src="/qr-hf.svg" class="qr !w-36 !h-36" /><div class="qr-label">Models &amp; data</div></div>
</div>
