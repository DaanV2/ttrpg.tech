<script>
  import SimpleCard from '$lib/components/cards/SimpleCard.svelte';
    import { Hr } from 'flowbite-svelte';
</script>

<svelte:head>
  <title>Generators</title>
</svelte:head>

<div class="center-horizontal divide-dashed">
  <h1 class="p-5 text-4xl">Generators</h1>
  <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
  <div class="centered-column flex w-full flex-wrap">
    <SimpleCard
      href="/generators/spellbooks-5e"
      title="Spellbooks 5e"
      text="Generate spellbooks for D&D 5e (2024)"
    />
  </div>
</div>
