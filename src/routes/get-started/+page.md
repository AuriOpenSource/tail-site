---
title: First post
description: First post.
date: '2023-4-14'
categories:
  - sveltekit
  - svelte
published: true
---

<script>
  import Component from '$lib/utils/Component.svelte';
  import {replace} from '$lib/utils/actions.js';
</script>

## Markdown

Hey friends! 👋

<Component title="Button">
  <button class="btn">Button</button>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<button class="$$btn">Button</button>`
}</pre>
</Component>
