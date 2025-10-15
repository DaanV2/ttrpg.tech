<script lang="ts">
  let { href = undefined, title = undefined, text = undefined, children = undefined } = $props();
</script>

<a
  {href}
  class="bg-tertiary text-tertiary-text border-tertiary hover:bg-tertiary-highlight flex w-full max-w-sm cursor-pointer flex-col rounded-lg border p-4 shadow-md sm:p-6 md:p-8"
>
  {#if title && title.length > 0}
    <h5 class="text-tertiary-text mb-2 text-2xl font-bold tracking-tight">{title}</h5>
  {/if}
  {#if text && text.length > 0}
    <p class="text-tertiary-text mb-2 tracking-tight">{text}</p>
  {/if}
  {@render children?.()}
</a>
