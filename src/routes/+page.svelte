<script>
  import { Hr } from 'flowbite-svelte';
  import SimpleCard from '../lib/components/cards/SimpleCard.svelte';
</script>

<svelte:head>
  <title>Homepage</title>
</svelte:head>

<div class="center-horizontal">
  <title>TTRPG.tech</title>
  <meta property="og:title" content="TTRPG.tech" />
  <meta property="og:description" content="Tools and generators for tabletop RPGs." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ttrpg.tech/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="TTRPG.tech" />
  <meta name="twitter:description" content="Tools and generators for tabletop RPGs." />
  <meta name="description" content="Tools and generators for tabletop RPGs." />
  <h1 class="p-5 text-4xl">Choose your adventure</h1>
  <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
  <div class="centered-column">
    <SimpleCard href="/calendar" title="Calendar" />
    <SimpleCard href="/tools" title="Tools" />
    <SimpleCard href="/generators" title="Generators" />
  </div>
</div>
