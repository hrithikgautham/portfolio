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
<!-- <p class="layout-md text-black text-xl leading-tight font-light mb-16" id="sid-is">
	Yap<span class="g">,</span> Storytelling<span class="g">,</span
	><br />
	 and
	<span class="test border-dashed border-b-2 everything-span">everything</span>
	<span
		style="background: linear-gradient(to right, #B22222, #000000); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
	>
		<span class="italic test">in</span>-<span class="test"> between. </span>
	</span>
</p> -->
<!-- summarization -->

<div class="layout-md text-lg flex flex-col gap-4">
	<div>
		<p>You are afraid that you may not be able to present your idea well.</p>
		<blockquote class="text-neutral-400 pl-4">Everytime i try to present my startup idea, there is always resistance. I feel that i may not be able to explain. And not being in a position top explain in simple terms to others is a huge -ve.</blockquote>
	</div>
		
	<div>
		<p>What my mom would think if i stay up late at night.</p>
		<blockquote class="text-neutral-400 pl-4">I guess this is a feeling every indian kid will have in their head. Everytime you stay up late you fell to inform your parents where you are, or they call u to find your whereabouts.</blockquote>
	</div>

	<div>
		<p>I should i improve my storytelling skills.</p>
		<blockquote class="text-neutral-400 pl-4">One of my worst skills. You know what they say "You need to do many times to become good at it". Guess i have to start telling more stories. Consiously put efforts to make the stories better.</blockquote>
	</div>

	<div>
		<p>Running out of money.</p>
		<blockquote class="text-neutral-400 pl-4">Things going out of hand. Expenses >>>> Income. You have to figure out things faster thatn you think.</blockquote>
	</div>

	<div>
		<p>Running out of money.</p>
		<blockquote class="text-neutral-400 pl-4">Things going out of hand. Expenses >>>> Income. You have to figure out things faster thatn you think.</blockquote>
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
