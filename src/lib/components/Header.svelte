
  
  <header
    class="layout-md flex justify-between items-start"
    data-sveltekit-noscroll
    data-sveltekit-preload-code="eager"
  >
    <h1 class="font-bold text-black text-2xl mb-12 md:mb-6">
      <a href="/">Hrithik TG</a>
    </h1>
    <h1>
      <a href="/thoughts" class="font-bold text-neutral-500 test hover:underline">thoughts</a>
    </h1>
  </header>
  
  <style lang="postcss">
    .test {
		font-family: 'Tiempos Headline Light' !important;
	}

    nav {
      @apply flex items-start text-neutral-500 justify-end space-x-6 text-lg py-0.5;
    }
  
    .page-title {
      @apply font-light;
    }
  
  
    @media (max-width: 420px) {
      nav {
        @apply flex-col items-end space-x-0;
      }
    }
  </style>
