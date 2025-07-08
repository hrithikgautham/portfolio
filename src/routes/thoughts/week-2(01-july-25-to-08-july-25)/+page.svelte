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
      <a href="/thoughts">Week 2(01-Jul-25 to 08-Jul-25)</a>
    </h1>
		<h1>
      <a href="/thoughts" class="font-bold test text-neutral-500 hover:underline">thoughts</a>
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
		<p>Writing this after a very long time.</p>
		<blockquote class="text-neutral-400 pl-4">I just cant remain consistent idk what to do. All i do is break my routine and do inconsistent things.</blockquote>
	</div>
	<div>
		<p>I'm yet to create Video pitch to submit my startup idea to all in capital</p>
		<blockquote class="text-neutral-400 pl-4">I gotta complete it today. Atleast the script and ideas. I just cant stick to what i want to do.</blockquote>

	</div>
		
	<div>
		<p>Decided to go get tawa pulav.</p>
		<blockquote class="text-neutral-400 pl-4">But ended up eating, pani puri, masalapuri, iceacream, and fries. Things you do when you love the person and food.</blockquote>
	</div>

	<div>
		<p>Built Aura hai</p>
		<blockquote class="text-neutral-400 pl-4">Finally done with it! no i can rest in peace. All these days i was having the feeling that im doing alot of things but none of them are getting completed. Finally someting did! And im happy about it.</blockquote>
	</div>

	<div>
		<p>Need to stick to a routine and system</p>
		<blockquote class="text-neutral-400 pl-4">I just cant, im trying very hard to stick to a routine. But things change when you really want to do the things you like. May be thats what i should do, sacrifice some things that i like to do.</blockquote>
	</div>
	
	<div>
		<p>Parents are getting sick.</p>
		<blockquote class="text-neutral-400 pl-4">Looks like the good old days are over. Parents are getting weaker day by day. i have to do something about it.</blockquote>
	</div>

	<div>
		<p>Fight Fight Fight</p>
		<blockquote class="text-neutral-400 pl-4">I have to walk away when there is an argument or fight with her. i dont want to say things when my adrenalne is coursing through my veins. I know im gonna say somethign stupid and regret it later.</blockquote>
	</div>

	<div>
		<p>"I love to do it" is an understatement</p>
		<blockquote class="text-neutral-400 pl-4">I cannot begin to explain how much i love spend time eating with her. The things i said i cannot take it back but, this could be the start of me showing how much i love eating out with her or cooking or dancing or singing or fighthing or anything else. There is nothing i would not want to do with her.</blockquote>
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
