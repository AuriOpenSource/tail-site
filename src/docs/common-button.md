---
title: Common button
description: Common buttons prompt most actions in a UI
slug: common-button
lastUpdate: '2021-9-29'
category: action
published: true
color: 3e4a36
thumbImage: https://lh3.googleusercontent.com/fBiDraZxIJW5LYve7S3RGdiBIk48r1K6TXtpJsQQnfYMiDpUwrIaDT3CNLkqoNrxUTfuBQ5lX5fGpl12bND5_pEhiZcUfV_7C345dXfCxb7kn0b7oAcT=s0
posterImage: https://lh3.googleusercontent.com/fCsle0V-T05FQjTzgyi3I6xQHlMcMYmyMorYhRHxdmQK0tFjNQrdVpEgbICiME_jmSiH2LpzwPTy05P07Qns5HlPy_4v7YIGSEwtaegkIWmohQTN6A=w1200
---

<script>
  import Code from '$lib/utils/Code.svelte';
  import Card from '$lib/containment/Card.svelte';
</script>

# Overview

### Use cases

Users should be able to:

- Copy link
- Can contain an optional leading icon
- Five types: elevated, filled, filled tonal, outlined, and text
- Keep labels concise and in sentence-case
- Containers have fully rounded corners and are wide enough to fit label text

# Usage

<section class="flex flex-col md:flex-row gap-4">
  <div class="flex gap-4 flex-col">
    <p>Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:</p>

    <div class="flex flex-row" style="justify-content: space-around">
    <ul>
      {#each [ 'Dialogs', 'Modal windows','Forms','Cards', 'Toolbars'] as item, i (i)}
        <li>{item}</li>
      {/each}
    </ul>

    <div>
      <p>Button Styles:</p>
      <ul class="capitalize">
        {#each ['base', 'filled', 'outlined', 'icon'] as item, i (i)}
          <li><a href="#{item}">{item}</a></li>
        {/each}
      </ul>
    </div>
    </div>

  </div>
  <figure class="flex flex-col gap-4">
    <img class="rounded-xl" src="https://lh3.googleusercontent.com/SLHGz-0RC6A_6qoXCSNGCqFkSu8nXCjlnHnBEJDU5-PLoj0vxrBjic5Aa87ru2nj7VQR1t3qwF14cSjmSKs-_S069zbOk2pzYIbHXTmdIb_M=s0"/>
    <figcaption>
      Use visually prominent filled buttons for the most important actions
    </figcaption>
  </figure>
</section>

<Card filled class="gap-2">
  <h2 id="base">Base structure</h2>
  
  <p>
    Tail Material Design offers a versatile ".btn" base class designed to create stylish and customizable buttons effortlessly. By default, this class sets up the fundamental structure of the button element, sporting a modern, rounded border and a subtle, transparent background.
  </p>

  <p>
    The ".btn" class serves as an excellent starting point for crafting various button styles, allowing you to easily extend its capabilities by adding your own classes. This flexibility empowers you to tailor buttons to suit your unique design preferences and seamlessly integrate them into your web projects.
  </p>

  <div class="flex flex-col gap-2 bg-surface p-2" style="border-radius: 12px;">
    <div><button style="gap:0px;" class="btn">Base btn<button></div>

    <Code source={`
      // html

<button class="btn">Base btn</button>
`}/>

  </div>
</Card>

<Card filled class="gap-2">
  <h2 id="filled">Filled Button</h2>

  <div class="flex flex-col md:flex-row gap-4">
    <p>
      Filled buttons have the most visual impact after the FAB, and should be used for important, final actions that complete a flow, like Save, Join now, or Confirm.
    </p>
    <figure class="flex flex-col gap-2">
      <img height="252" src="https://lh3.googleusercontent.com/33VllAnWxQv00Wf5vR1gbBPUJTlnx3o1H1RZnppdqzhyY8RyUIf38vgviOlsIoy3rDG6filC0bH4umr8L7hNsOOxP3C1374fn9S50Sj99C8M=s0"/>
      <figcaption>Filled buttons have high visual impact when used for important actions</figcaption>
    </figure>
  </div>

  <div class="flex flex-col gap-2 bg-surface p-2" style="border-radius: 12px;">
    <div><button style="gap:0px;" class="btn btn-filled">Filled btn<button></div>

    <Code source={`
      // html

<button class="btn btn-filled">Filled btn</button>
`}/>

  </div>
</Card>

<Card filled class="gap-2">
  <h2 id="outlined">Outlined Button</h2>

  <div class="flex flex-col md:flex-row gap-4">
    <div class="flex flex-col gap-2 flex-1">
      <p>
        Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.
      </p>
      <p>
        Outlined buttons pair well with filled buttons to indicate an alternative, secondary action.
      </p>
      <p>Outlined buttons display a stroke around the button container, and by default have no fill.</p>
    </div>
    <figure class="flex flex-col gap-2 ">
      <img style="height: 252px; object-fit: cover; object-position: bottom;" src="https://lh3.googleusercontent.com/Ic_1kNLwDfIHdWKvp-3iKGDkHvjxy0QZvelA_vOgIY6l6DuRTcQ3c9JITapze3F44yiNO67EsyrnJraPQvVsS0HtiBIDmRbdgaABXJHOYo_2=s0"/>
      <figcaption>Outline buttons contain less important supporting actions</figcaption>
    </figure>
  </div>

  <div class="flex flex-col gap-2 bg-surface p-2" style="border-radius: 12px;">
    <div><button style="gap:0px;" class="btn btn-outlined">Outlined btn<button></div>

    <Code source={`
      // html

<button class="btn btn-outlined">Outlined btn</button>
`}/>

  </div>
</Card>

<Card filled class="gap-2">
  <h2 id="icon">Icon Button</h2>

  <div class="flex flex-col md:flex-row gap-4">
    <div class="flex flex-col gap-2 flex-1">
      <p>
        Icons visually communicate the button’s action and help draw attention. They should be placed on the leading side of the button, before the label text.
      </p>
    </div>
    <figure class="flex flex-col gap-2 flex-1">
      <img height="252" style="height: 252px; object-fit: cover;" src="https://lh3.googleusercontent.com/H9uUFctP3ob4KgvSs1-32gxNnw0J6F-sSnwwUR2ausgvJOHgR0TR3_TQYWiaqqt_hQvWBoudNZMHNIEoeKm95jK09JNZb-GxxTxzgPnvKsYH=s0"/>
      <figcaption>Place the icon to the left of the label in buttons with text in left-to-right languages</figcaption>
    </figure>
  </div>

  <div class="flex flex-col gap-2 bg-surface p-2" style="border-radius: 12px;">
    <div>
      <button  class="btn btn-filled icon-left">
        <p>Icon btn</p>
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
            viewBox="0 0 24 24" width="24px" fill="#000000">
            <path
              d="M5,5h2v3h10V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h6v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z" />
            <polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13" />
        </svg>
      <button>
    </div>

    <Code source={`
      // html

<button  class="btn btn-filled icon-left">
  <p>Icon btn</p>
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
      viewBox="0 0 24 24" width="24px" fill="#000000">
      <path
        d="M5,5h2v3h10V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h6v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z" />
      <polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13" />
  </svg>
<button>
`}/>

  </div>
</Card>
