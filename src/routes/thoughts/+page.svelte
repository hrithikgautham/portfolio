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
    class="layout-md flex justify-between items-start animate-slide-up"
    data-sveltekit-noscroll
    data-sveltekit-preload-code="eager"
  >
    <h1 class="font-bold text-primary-600 text-2xl mb-8 md:mb-4">
      
    </h1>
		<h1>
      
    </h1>
  </header>
	
<div class="layout-md animate-slide-up animation-delay-200">
  <p class="text-secondary-900 text-xl leading-tight font-light mb-12" id="sid-is">
    Yap<span class="g text-accent-600">,</span> Storytelling<span class="g text-accent-600">,</span
    ><br />
     and
    <span class="test border-dashed border-b-2 border-primary-400 everything-span text-primary-700">everything</span>
    <span class="text-warm-600">
      in-between
    </span>
  </p>

  <div class="space-y-6">
    <div class="card animate-fade-in animation-delay-400">
      <div class="space-y-4">
        <p class="text-secondary-700 leading-relaxed">
          This is my  <a class="link text-primary-600 hover:text-accent-600" href="/thoughts">thoughts</a>.
        </p>

        <p class="text-secondary-700 leading-relaxed">
          Everything and Anything i care about and i want to share to the outside world goes <em class="text-accent-600">here</em>.
        </p>
      </div>
    </div>

    <div class="card animate-fade-in animation-delay-600">
      <div class="space-y-6">
        <p class="text-secondary-700 leading-relaxed">
          I write down my thoughts everyday.
        </p>

        <p class="text-secondary-700 leading-relaxed">
          And Dump them here when i feel like it. Mostly weekly.
        </p>

        <p class="text-secondary-700 leading-relaxed">
          Most of what you read here will be compilation of my thoughts on a day to day basis.
        </p>
      
        <div class="space-y-3 mt-6">
          <h2 class="font-bold text-secondary-900 text-lg">Recent Reads:</h2>
          <div class="space-y-2">
            <div class="group">
              <a href="/thoughts/week-1(22-feb-25-to-03-mar-25)" class="flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                <span class="text-secondary-700 group-hover:text-primary-700">Week 1 (22-feb-25 to 03-mar-25)</span>
                <svg class="w-4 h-4 text-secondary-400 group-hover:text-primary-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="group">
              <a href="/thoughts/week-2(01-july-25-to-08-july-25)" class="flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                <span class="text-secondary-700 group-hover:text-primary-700">Week 2 (01-july-25 to 08-july-25)</span>
                <svg class="w-4 h-4 text-secondary-400 group-hover:text-primary-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-6 p-3 bg-warm-50 rounded-lg border-l-4 border-accent-400">
          <p class="text-secondary-600 italic">PS: I might talk about Pokemon, Cheetos, Counter Strike, Valorant here and there :)</p>
        </div>
      </div>
    </div>
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
