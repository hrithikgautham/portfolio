<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Hrithik TG"
	description="Founder, and a novice film-maker. Engineering high-impact solutions for people."
/>

<p class="layout-md text-black text-xl leading-tight font-light mb-16" id="sid-is">
	Founder<span class="g">,</span> Engineer<span class="g">,</span
	><br />
	novice film-maker and<br />
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
			I'm Founder of  <a class="link" href="https://dubluclub.com">Dublu Club</a>.
		</p>

		<p>
			I am a generalist and care deeply about <em>people around me who care</em>, I am also
			interested in <em>cars</em>.
		</p>
	</div>

	<div class="space-y-5">
		<p>
			Previously, I worked at <a class="link" href="https://cisco.com"
				>Cisco</a
			> and 
			<a class="link" href="https://alpha-grep.com">AlphaGrep</a> as a Software Engineer.
		</p>

		<!-- <p>
			I graduated from Northeastern University, where I worked as research assistant under <a
				class="link"
				rel="external"
				href="https://github.com/nikbearbrown">Prof. Nik Brown</a
			>, and studied Software Engineering, Information Systems. I was
			<a
				class="link"
				rel="external"
				href="https://coe.northeastern.edu/news/2024-coe-outstanding-graduate-student-awards/"
			>
				awarded outstanding graduate student
			</a>
			and
			<a
				class="link"
				rel="external"
				href="https://coe.northeastern.edu/news/2024-lux-veritas-virtus-inductees/"
			>
				Lux. Veritas. Virtus. society, a prestigious honor that recognizes exceptional graduate
				students
			</a>
			I am a fitness enthusiast, enjoy making (very?) short-films(
			<a class="link" href="https://www.youtube.com/watch?v=W0twZGBfyNs">1</a>,
			<a class="link" href="https://www.youtube.com/watch?v=y8tsd-As4xo">2</a>).
		</p> -->

		<p>Other interests: Running, math, reading, cinematography.</p>
	</div>

	<!-- <div class="space-y-5">
		<img
			alt="Candid Photograph of Siddhartha Bariker talking to someone in a conference."
			src="/assets/images/self.webp"
			class=""
			loading="lazy"
		/>
	</div> -->
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
