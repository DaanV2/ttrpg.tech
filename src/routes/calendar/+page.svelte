<script lang="ts">
  import { page } from '$app/state';
  import Month from '$lib/calendar/month.svelte';
  import { Hr } from 'flowbite-svelte';

  let day_indexes: number[] = $state([]);
  const days_in_week = 7;
  const days_in_month = days_in_week * 4;
  const months = [
    'Prima crescentis',
    'Secundus crescentis',
    'Tertium crescentis',
    'Quartus crescentis',
    'Prima summa',
    'Secundus summa',
    'Media summa',
    'Ultima secundi summa',
    'Ultima summa',
    'Prius decrescentes',
    'Secundus decrescentes',
    'Tertium decrescentes',
    'Quartus decrescentes'
  ];

  $effect.pre(() => {
    day_indexes = page.url.searchParams
      .getAll('day_index')
      .map(Number)
      .filter((i) => !isNaN(i));
  });

  // Either afterUpdate()
  $effect(() => {
    setTimeout(() => {
      if (day_indexes.length === 0) return;

      const lowest = Math.min(...day_indexes);
      const day = document.getElementById(`day_${lowest}`);
      console.log('scrolling to', lowest, day);
      if (day) day.scrollIntoView({ behavior: 'smooth' });
    }, 250);
  });
</script>

<svelte:head>
  <title>Calendar</title>
  <meta name="title" property="og:title" content="Calendar" />
  <meta name="type" property="og:type" content="website" />
  <meta name="description" property="og:description" content="A 13 month calendar" />
</svelte:head>

<div class="center-horizontal">
  <h1 class="p-5 text-4xl">Calendar</h1>
  <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />

  <div class="flex flex-col w-full items-center">
    {#each months as month, i}
      <Month name={`${i + 1}. ${month}`} start_day_index={i * days_in_month} />
    {/each}
  </div>
</div>
