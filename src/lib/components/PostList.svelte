<script lang="ts">
    import { ArrowUpRight } from "lucide-svelte";
  
    import { formatTime, type Post } from "$lib/post";
  
    export let posts: Post[];
  </script>
  
  <div class="grid gap-y-3">
    {#each posts as item}
      <a
        href={`writing/${item.slug}`}
        class="block -mx-3 px-3 py-2 hover:bg-neutral-100"
      >
        <div class="mb-0">
          <div class="text-lg text-black">
            {@html item.rendered.title}
            <ArrowUpRight size={18} class="inline text-neutral-400" />
          </div>
        </div>
  
        <div class="flex justify-between items-start">
          <div class="text-sm text-black">
            {formatTime("%B %-d, %Y", item.date)}
          </div>
          <div class="text-sm text-black">
            {item.tags.join(", ")}
          </div>
        </div>
  
        <div class="text-md leading-snug text-neutral-500">
          {@html item.rendered.description}
        </div>
      </a>
    {/each}
  </div>