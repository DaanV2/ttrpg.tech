<script>
  import { Hr } from 'flowbite-svelte';
  import SimpleCard from '../lib/components/cards/SimpleCard.svelte';
</script>

<svelte:head>
  <title>Homepage</title>
</svelte:head>

<div class="center-horizontal">
  <h1 class="p-5 text-4xl">Choose your adventure</h1>
  <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
  <div class="centered-column">
    <SimpleCard href="/calendar" title="Calendar" />
    <SimpleCard href="/tools" title="Tools" />
    <SimpleCard href="/generators" title="Generators" />
  </div>
</div>
