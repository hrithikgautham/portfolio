<script lang="ts">
    import "@fontsource/newsreader/400-italic.css";
    import "../app.css";
  
    import { browser, dev } from "$app/environment";
  
    import { fly } from "svelte/transition";
  
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import type { LayoutData } from "./$types";
  
    export let data: LayoutData;
    export const prerender = true;

    const isMobile = browser && /Android|iPhone/i.test(navigator.userAgent);
    const reducedMotion =
      browser && matchMedia("(prefers-reduced-motion: reduce)").matches;
  </script>
  
  
  
  {#if isMobile || reducedMotion}
    <!--
      Disable page transitions on mobile due to a browser engine bug.
      Also disable them for reduced-motion users.
    -->
    <main>
      <slot />
    </main>
  {:else}
    {#key data.pathname}
      <main
        in:fly={{ x: -10, duration: 350, delay: 350 }}
        out:fly={{ y: 5, duration: 350 }}
      >
        <slot />
      </main>
    {/key}
  {/if}
  
  <Footer />