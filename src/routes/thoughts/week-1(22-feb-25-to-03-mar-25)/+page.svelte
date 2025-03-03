<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';
	import Header from '$lib/components/Header.svelte';
	import { browser, dev } from "$app/environment";
</script>

<Seo
	title="Hrithik TG's Blogs"
	description="Blogs written by dublu club Founder"
/>

<svelte:head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    {#if !dev}
        <!-- Google tag (gtag.js) -->
<script async defer src="https://www.googletagmanager.com/gtag/js?id=G-BRD0W6ZDSY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BRD0W6ZDSY');
</script>
    {/if}
  </svelte:head>
  
  <header
    class="layout-md flex justify-between items-start"
    data-sveltekit-noscroll
    data-sveltekit-preload-code="eager"
  >
    <h1 class="font-bold text-black text-2xl mb-12 md:mb-6">
      <a href="/thoughts">Week 1(22-Feb-25 to 03-Mar-25)</a>
    </h1>
		<h1>
      <a href="/thoughts" class="font-bold text-neutral-500 test hover:underline">thoughts</a>
    </h1>
  </header>
	
	<!-- summarization -->
<p class="layout-md text-black text-xl leading-tight font-light mb-16" id="sid-is">
	Yap<span class="g">,</span> Storytelling<span class="g">,</span
	><br />
	 and
	<span class="test border-dashed border-b-2 everything-span">everything</span>
	<span
		style="background: linear-gradient(to right, #B22222, #000000); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
	>
		<span class="italic test">in</span>-<span class="test"> between. </span>
	</span>
</p>
<!-- summarization -->

<div class="layout-md text-lg space-y-14">
	<h1>WIP</h1>

</div>

<style>
	.test {
		font-family: 'Tiempos Headline Light' !important;
	}

	@media (max-width: 420px) {
		#sid-is {
			@apply -mt-10;
		}
	}
</style>
