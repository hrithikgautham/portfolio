<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';
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
    <h1 class="font-bold text-black text-2xl mb-8 md:mb-4">
      <a href="/thoughts">Week 1(22-Feb-25 to 03-Mar-25)</a>
    </h1>
		<h1>
      
    </h1>
  </header>
	
	<!-- summarization -->
<!-- <p class="layout-md text-black text-xl leading-tight font-light mb-16" id="sid-is">
	Yap<span class="g">,</span> Storytelling<span class="g">,</span
	><br />
	 and
	<span class="test border-dashed border-b-2 everything-span">everything</span>
	<span
		class="text-red-700"
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
		<p>Posted 2 videos at the same time.</p>
		<blockquote class="text-neutral-400 pl-4">I feel kinda anxious about that coz i feel what people is gonna perceive about me.</blockquote>
	</div>
	
	<div>
		<p>Accountability Problem.</p>
		<blockquote class="text-neutral-400 pl-4">I dont feel accountable to anyone or anything. I'm just drifting in this ocean called life.</blockquote>
	</div>

	<div>
		<p>Im incapable of building anything completely.</p>
		<blockquote class="text-neutral-400 pl-4">I always get bored in between and switch to a different one. There is no sense of consistency and perseverence.</blockquote>
	</div>

	<div>
		<p>Feels Good to communicate with her What i feel.</p>
		<blockquote class="text-neutral-400 pl-4">I was thinking of leaving coz i thought that would be the right decision. But later i realised that, staying will be more challenging and like challenges :)</blockquote>
	</div>

	<div>
		<p>I just have to be me when im recording.</p>
		<blockquote class="text-neutral-400 pl-4">I always try to overcomplicate, trying to make the video better by making it more animated. Hoping that its going to be engaging. But in reality its not doing much good. I have to be the way i am in videos.</blockquote>
	</div>

	<div>
		<p>Why should anyone give a fuck about what i say in videos.</p>
		<blockquote class="text-neutral-400 pl-4">In this age where everyone dying to get attention, what will i do to make them stop scrolling and watch my video.</blockquote>
	</div>

	<div>
		<p>Deep Appreciation.</p>
		<blockquote class="text-neutral-400 pl-4">Deep appreciation for how far i have come. Not everyone made it this far. But here iam. Deep Appreciation for all my friends and family members, i would be here without all of them.</blockquote>
	</div>

	<div>
		<p>I feel Devastated.</p>
		<blockquote class="text-neutral-400 pl-4">I feel devastated for putting my parents in this position. I can give them a far better life. EVerything is fucked. But i can dig myself out of this. Not a problem.</blockquote>
	</div>

	<div>
		<p>Progress is very slow.</p>
		<blockquote class="text-neutral-400 pl-4">In a very long time i feel like im lagging behind. In everything. I have to push the limits. I have potential. Im not utilising it in a good way. I have what it takes to be the best. Im the best.</blockquote>
	</div>

	<div>
		<p>Risk is my middle name.</p>
		<blockquote class="text-neutral-400 pl-4">I take such huge risks that i feel very excited. But if things go south, it could potentially kill me. It is exciting, but challenging at the same time. I dont want to leave this state of constant thrilling. </blockquote>
	</div>

	<div>
		<p>Beating myself down and not giving credit to myself.</p>
		<blockquote class="text-neutral-400 pl-4">I always dont give credit myself for doing something good. I think that the moment i give credit i become complacent. But that is not true. REcently istarted appreciating every second of my life, and it feel liberating. </blockquote>
	</div>

	<div>
		<p>Decision Paralysis.</p>
		<blockquote class="text-neutral-400 pl-4">Sometimes i get overwhelmed by the decisions i have to take. And i enter this state of stillness. Where i dont do anything, i just shuttle between different decisions. I feel like i can do it by there is resistance. </blockquote>
	</div>

	<div>
		<p>Group co working was transformational.</p>
		<blockquote class="text-neutral-400 pl-4">Doing co working with friends(fookers) was transformational. I felt like i was doing meaningful work after a long time. If not for that, i would have never pushed the limits. Way to go! </blockquote>
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
