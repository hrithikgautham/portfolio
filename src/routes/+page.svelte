<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { browser, dev } from "$app/environment";
</script>

<Seo
	title="Hrithik TG"
	description="Founder, and a novice film-maker. Engineering high-impact solutions for people."
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
  


<div class="layout-md mb-16">
	<div class="hero-section animate-slide-up">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-secondary-900">
			<span class="animate-fade-in" style="animation-delay: 0.2s;">Founder</span><span class="g">,</span> 
			<span class="animate-fade-in" style="animation-delay: 0.4s;">Engineer</span><span class="g">,</span><br />
			<span class="animate-fade-in" style="animation-delay: 0.6s;">novice film-maker and</span><br />
			<span class="test border-dashed border-b-2 everything-span animate-bounce-subtle text-accent-600" style="animation-delay: 0.8s;">everything</span>
			<span class="text-primary-600">
				<span class="italic test">in</span>-<span class="test">between.</span>
			</span>
		</h1>
		
		<div class="flex flex-wrap gap-3 mt-6 animate-slide-up" style="animation-delay: 1s;">
			<div class="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
				🚀 Building the future
			</div>
			<div class="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
				🎬 Creative storyteller
			</div>
			<div class="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
				💡 Problem solver
			</div>
		</div>
	</div>
</div>

<div class="layout-md space-y-12">
	<!-- About Section -->
	<section class="card animate-slide-up" style="animation-delay: 1.2s;">
		<div class="flex items-start space-x-3 mb-4">
			<div class="w-2 h-16 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
			<div>
				<h2 class="heading2">About Me</h2>
				<div class="space-y-3 text-lg text-secondary-700">
					<p class="leading-relaxed">
						I'm Founder of <a class="link" href="https://dubluclub.com">Dublu Club</a>, where we're building innovative solutions for the future.
					</p>
					<p class="leading-relaxed">
						Passionate about <em>cars</em> and the intersection of technology and creativity.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Experience Section -->
	<section class="card animate-slide-up" style="animation-delay: 1.4s;">
		<div class="flex items-start space-x-4 mb-6">
			<div class="w-2 h-16 bg-gradient-to-b from-accent-500 to-secondary-500 rounded-full"></div>
			<div>
				<h2 class="heading2">Experience</h2>
				<div class="space-y-4">
					<div >
						<div class="text-secondary-600 font-medium">Software Engineer</div>
						<div>
							<p class="text-lg text-secondary-700 leading-relaxed">
								Previously worked at <a class="link" href="https://cisco.com">Cisco</a> and 
								<a class="link" href="https://alpha-grep.com">AlphaGrep</a>, building scalable solutions and innovative products.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Interests Section -->
	<section class="card animate-slide-up" style="animation-delay: 1.6s;">
		<div class="flex items-start space-x-4 mb-6">
			<div class="w-2 h-16 bg-gradient-to-b from-secondary-500 to-primary-500 rounded-full"></div>
			<div>
				<h2 class="heading2">Interests & Hobbies</h2>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
					<div class="text-center p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300">
						<div class="text-2xl mb-2">🏃‍♂️</div>
						<div class="text-sm font-medium text-primary-700">Running</div>
					</div>
					<div class="text-center p-3 bg-accent-50 rounded-xl hover:bg-accent-100 transition-colors duration-300">
						<div class="text-2xl mb-2">📐</div>
						<div class="text-sm font-medium text-accent-700">Math</div>
					</div>
					<div class="text-center p-3 bg-secondary-50 rounded-xl hover:bg-secondary-100 transition-colors duration-300">
						<div class="text-2xl mb-2">📚</div>
						<div class="text-sm font-medium text-secondary-700">Reading</div>
					</div>
					<div class="text-center p-3 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors duration-300">
						<div class="text-2xl mb-2">🎬</div>
						<div class="text-sm font-medium text-warm-700">Cinematography</div>
					</div>
				</div>
			</div>
		</div>
	</section>
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
