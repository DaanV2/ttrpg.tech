<script lang="ts">
  import { page } from '$app/state';
  import { Popover } from 'flowbite-svelte';
  import { slide } from 'svelte/transition';
  import { allMoonsAt } from './day-functions';

  interface Props {
    /** The name of the day */
    day_name: string;
    /** The name of the month this day belongs to */
    month_name: string;
    /** The index of the day in the month */
    day_index: number;
    /** The index of the day in the year */
    day_of_year: number;
  }

  let { day_name, month_name, day_index, day_of_year }: Props = $props();
  let highlight_day = $state(false);

  $effect.pre(() => {
    highlight_day = page.url.searchParams.has('day_index', `${day_of_year}`);
  });

  const [moon1, moon2, moon3] = allMoonsAt(day_of_year);

  function highlightDay() {
    if (highlight_day) {
      const url = new URL(window.location.href);
      url.searchParams.delete('day_index', `${day_of_year}`);
      window.history.pushState({}, '', url);
      highlight_day = false;
    } else {
      const url = new URL(window.location.href);
      url.searchParams.append('day_index', `${day_of_year}`);
      window.history.pushState({}, '', url);
      highlight_day = true;
    }
  }

  function onkeyboard(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      highlightDay();
    }
  }
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="day sm flex flex-col min-h-[70px] w-full aspect-square p-2 shadow-2xs"
  class:vip={highlight_day}
  id={`day_${day_of_year}`}
  title={`${day_name}, ${day_index}th day of the month: ${month_name.slice(3).trim()}`}
  tabindex={day_of_year + 1}
  aria-labelledby={`highlight or unhighlight day: ${day_of_year}`}
  aria-roledescription="highlight"
  ontouchstart={highlightDay}
  onclick={highlightDay}
  onkeydown={onkeyboard}
>
  <h4 class="text-sm font-medium">{day_of_year}</h4>
  <div class="non_critical mt-auto">{moon1}{moon2}{moon3}</div>
</div>
<Popover
  transition={slide}
  transitionParams={{ duration: 200 }}
  class="w-64 bg-white text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
>
  <div class="p-3">
    <div class="flex flex-row items-end gap-2 py-2">
      <div class="mb-2 flex items-center justify-between text-4xl">{moon1}</div>
      <div class="mb-2 flex items-center justify-between text-3xl">{moon2}</div>
      <div class="mb-2 flex items-center justify-between text-2xl">{moon3}</div>
    </div>
    <h2 class="text-base leading-none font-semibold text-gray-900 dark:text-white">
      {day_name}
    </h2>
    <ul class="mb-4 py-2 text-sm font-light">
      <li>{day_index}th day of the month</li>
      <li>{day_of_year}th day of the year</li>
      <li>month: {month_name.slice(3).trim()}</li>
    </ul>
  </div>
</Popover>

<style>
  .non_critical {
    font-size: small;
  }

  @media (max-width: 1000px) {
    .non_critical {
      font-size: x-small;
    }
  }

  @media (max-width: 500px) {
    .non_critical {
      visibility: hidden;
    }
  }

  .day:hover {
    background-color: var(--color-tertiary-highlight);
    color: var(--color-tertiary-text);
  }

  .vip {
    background-color: #ffc61bbb;
    color: var(--white);
    transition: background-color 0.5s ease-in-out;
  }
</style>
