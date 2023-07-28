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

# Overview

- Copy link
- Can contain an optional leading icon
- Five types: elevated, filled, filled tonal, outlined, and text
- Keep labels concise and in sentence-case
- Containers have fully rounded corners and are wide enough to fit label text

# Specs

<section class="card card-filled flex-col gap-4">
  <div class="flex flex-col">
    <h3>Common buttons</h3>
    <div class="flex flex-row gap-2">
      <button class="btn btn-filled text-label-medium">Filled</button>
      <button style="border: 1px solid" class="btn btn-outlined">Outined</button>
      <button style="background-color: #14b8a6; color: #042f2e" class="btn">Custom</button>
    </div>
  </div>
</section>

```html showLineNumbers
<button class="btn btn-filled">Filled</button>
<button class="btn btn-outlined">Outined</button>
<button class="btn bg-teal-500 bg-teal-950">Custom</button>
```

<section class="card card-filled flex-col gap-4">
  <div class="flex flex-col">
    <h3>Buttons with icon</h3>
    <div class="flex flex-row gap-2">
    <button class="btn btn-filled icon-left">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg> 
      Filled
    </button>
    <button style="border: 1px solid" class="btn icon-left btn-outlined">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg> 
      Outined
    </button>
    <button style="background-color: #14b8a6; color: #042f2e" class="btn icon-left">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
      Custom
    </button>
    </div>
  </div>
</section>

```html showLineNumbers
<button class="btn btn-filled icon-left">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		fill="#000000"
	>
		<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
	</svg>
	Filled
</button>

<button class="btn btn-outlined icon-left">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		fill="#000000"
	>
		<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
	</svg>
	Outlined
</button>

<button class="btn bg-teal-500 bg-teal-950 icon-left">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		fill="#000000"
	>
		<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
	</svg>
	Custom
</button>
```

<section class="card card-filled flex-col gap-4">
  <button class="btn btn-filled block">The Wide One</button>
</section>

```html showLineNumbers
<button class="btn btn-filled block">The Wide One</button>
```

# Guidelines

### Usage

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

- Dialogs
- Modal windows
- Forms
- Cards
- Toolbars

Buttons are just one option for representing actions in a product and shouldn’t be overused.
Too many buttons on a screen disrupts the visual hierarchy.

Consider placing additional actions in a [navigation drawer](/components/navigation-drawer),
set of [chips](/components/chips), text links, or [icon buttons](/components/icon-buttons).

# Accessibility
