<script>
  import SimpleCard from '$lib/components/cards/SimpleCard.svelte';
    import { Hr } from 'flowbite-svelte';
</script>

<svelte:head>
  <title>Generators | TTRPG Tools</title>
  <meta property="og:title" content="Generators | TTRPG Tools" />
  <meta property="og:description" content="Generate spellbooks and other resources for tabletop RPGs." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ttrpgtools.org/generators/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Generators | TTRPG Tools" />
  <meta name="twitter:description" content="Generate spellbooks and other resources for tabletop RPGs." />
  <meta name="description" content="Generate spellbooks and other resources for tabletop RPGs." />
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
