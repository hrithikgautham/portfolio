
  
<header
    class="layout-md flex justify-between items-center py-6"
    data-sveltekit-noscroll
    data-sveltekit-preload-code="eager"
  >
    <div class="animate-slide-down">
      <h1 class="font-bold text-3xl mb-0">
        <a href="/" class="text-primary-600 hover:text-primary-700 transition-all duration-300 test">
          Hrithik TG
        </a>
      </h1>
    </div>
    
    <nav class="flex items-center space-x-6 animate-slide-down" style="animation-delay: 0.1s;">
      <a href="/blogs" class="nav-link test">
        <span>blogs</span>
        <div class="nav-indicator"></div>
      </a>
      <a href="/thoughts" class="nav-link test">
        <span>thoughts</span>
        <div class="nav-indicator"></div>
      </a>
    </nav>
  </header>
  
  <style lang="postcss">
    .test {
		font-family: 'Tiempos Headline Light' !important;
	}

    .nav-link {
      @apply relative text-secondary-600 font-semibold text-lg;
      @apply hover:text-primary-600 transition-all duration-300;
      @apply py-2 px-1;
    }
    
    .nav-indicator {
      @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600;
      @apply transition-all duration-300 ease-out;
    }
    
    .nav-link:hover .nav-indicator {
      @apply w-full;
    }
    
    .nav-link.active .nav-indicator {
      @apply w-full bg-accent-500;
    }
    
    .nav-link.active {
      @apply text-accent-600;
    }
  
    @media (max-width: 768px) {
      header {
        @apply flex-col items-start space-y-4;
      }
      
      nav {
        @apply flex-row space-x-4;
      }
    }
    
    @media (max-width: 420px) {
      nav {
        @apply flex-col space-x-0 space-y-2 items-start;
      }
      
      .nav-link {
        @apply text-base;
      }
    }
  </style>
