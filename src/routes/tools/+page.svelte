<script>
  import { Hr } from 'flowbite-svelte';
  import SimpleCard from '../../lib/components/cards/SimpleCard.svelte';
</script>

<svelte:head>
  <title>Tools</title>
  <meta property="og:title" content="Tools | TTRPG.tech" />
  <meta property="og:description" content="Discover useful tools for tabletop RPGs on TTRPG.tech." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ttrpg.tech/tools/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Tools | TTRPG.tech" />
  <meta name="twitter:description" content="Discover useful tools for tabletop RPGs on TTRPG.tech." />
  <meta name="description" content="Discover useful tools for tabletop RPGs on TTRPG.tech." />
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
  </div>
</div>
