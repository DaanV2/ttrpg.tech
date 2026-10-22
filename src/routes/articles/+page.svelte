<script>
  import SimpleCard from '$lib/components/cards/SimpleCard.svelte';
    import { Hr } from 'flowbite-svelte';
</script>

<svelte:head>
  <title>Articles | TTRPG Tools</title>
  <meta property="og:title" content="Articles | TTRPG Tools" />
  <meta property="og:description" content="Articles about tabletop RPGs." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ttrpgtools.org/articles/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Articles | TTRPG Tools" />
  <meta name="twitter:description" content="Articles about tabletop RPGs." />
  <meta name="description" content="Articles about tabletop RPGs." />
</svelte:head>

<div class="center-horizontal divide-dashed">
  <h1 class="p-5 text-4xl">Articles</h1>
  <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
  <div class="centered-column flex w-full flex-wrap">
    <SimpleCard
      href="/articles/things-to-consider-for-worldbuilding"
      title="Things to Consider for Worldbuilding"
      text="Tips and advice for building your own worlds for TTRPGs"
    />
  </div>
</div>
