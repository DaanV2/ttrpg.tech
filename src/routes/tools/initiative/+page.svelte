<script lang="ts">
  import { Hr } from 'flowbite-svelte';
  import InitiativeTracker from '../../../lib/components/initiative/initiative-tracker.svelte';
</script>

<svelte:head>
  <title>Initiative tracker</title>
</svelte:head>

<div class="flex w-full flex-col">
  <div class="flex w-full flex-col items-center justify-center">
    <h2 class="p-5 text-4xl">Initiative tracker</h2>
    <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />

    <div class="flex w-full flex-col items-center justify-center gap-4">
      <InitiativeTracker />
    </div>
  </div>
</div>
