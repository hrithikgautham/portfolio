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
      <a href="/thoughts">thoughts</a>
    </h1>
		<h1>
      <a href="/" class="font-bold text-neutral-500 test hover:underline">home</a>
    </h1>
  </header>
	
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

<div class="layout-md text-lg space-y-14">
	<div class="space-y-5">
		<p>
			This is my  <a class="link" href="/thoughts">thoughts</a>.
		</p>

		<p>
			Everything and Anything i care about and i want to share to the outside world goes <em>here</em>.
		</p>
	</div>

	<div class="space-y-5">
		<p>
			I write down my thoughts everyday.
		</p>

		<p>
			And Dump them here when i feel like it. Mostly weekly.
		</p>

		<p>
			Most of what you read here will be compilation of my thoughts on a day to day basis.
		</p>
	
		<div class="space-y-1">
			<h2 class="font-bold">Reads: </h2>
			<ol class="list-decimal ml-5">
				<li class="link"><a href="/thoughts/week-1(22-feb-25-to-03-mar-25)">Week 1(22-feb-25 to 03-mar-25)</a></li>
			</ol>
		</div>

		<p><span class="test  everything-span">PS: I might talk about Pokemon, Cheetos, Counter Strike, Valorant here and there :)</span></p>
	</div>



	
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
