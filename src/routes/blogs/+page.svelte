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
      <a href="/blogs">blogs</a>
    </h1>
		<h1>
      
    </h1>
  </header>
	
<div class="layout-md animate-slide-up animation-delay-200">
  <p class="text-secondary-900 text-xl leading-tight font-light mb-12" id="sid-is">
    Interesting<span class="g text-accent-600">,</span> Cool<span class="g text-accent-600">,</span
    ><br />
     and
    <span class="test border-dashed border-b-2 border-primary-400 everything-span text-primary-700">something </span>
    <span class="text-warm-600">
      extraordinary
    </span>
  </p>

  <div class="card animate-fade-in animation-delay-400 mb-6">
    <div class="space-y-4">
      <p class="text-secondary-700 leading-relaxed">
        This is my  <a class="link text-primary-600 hover:text-accent-600" href="/blogs">blogs</a>.
      </p>

      <p class="text-secondary-700 leading-relaxed">
        Something i did research on my own and built it.
      </p>

      <p class="text-secondary-700 leading-relaxed">
        Writing here coz i didn't find any other sources on these topics
      </p>
    </div>
  </div>

  <div class="card animate-fade-in animation-delay-600">
    <div class="space-y-4">
      <h2 class="font-bold text-secondary-900 text-lg">Recent Posts:</h2>
      <div class="space-y-2">
        <div class="group">
          <a href="/blogs/aura-hai" class="flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
            <div>
              <span class="text-secondary-900 font-medium group-hover:text-primary-700">Aura Hai</span>
              <p class="text-secondary-600 text-sm mt-1">Personal reflections on life, creativity, and growth</p>
            </div>
            <svg class="w-4 h-4 text-secondary-400 group-hover:text-primary-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
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
