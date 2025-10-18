<script>
  import { Hr } from 'flowbite-svelte';
  import SimpleCard from '../../lib/components/cards/SimpleCard.svelte';
</script>

<svelte:head>
  <title>Tools</title>
</svelte:head>

<div class="center-horizontal divide-dashed">
  <h1 class="p-5 text-4xl">Tools</h1>
  <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
  <div class="centered-column flex w-full flex-wrap">
    <SimpleCard
      href="/tools/tablelizer"
      title="Tablelizer"
      text="Turn any list of items into a rollable table"
    />
    <SimpleCard
      href="/tools/initiative"
      title="Initiative tracker"
      text="track your combat initiative"
    />
  </div>
</div>
