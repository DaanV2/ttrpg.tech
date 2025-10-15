<script lang="ts">
  import Day from './day.svelte';
  import { calculate_day, calculate_day_of_year, days, getId } from './month-functionts';

  let { name, start_day_index } = $props();
</script>

<div class="w-full lg:w-3/5 mx-auto border-primary my-4 rounded-xl border p-3 py-2 shadow-2xs dark:shadow-secondary">
  <h2 class="px-4 text-lg font-bold" id={getId(name)} title={name.slice(3)}>{name}</h2>
  <div class="grid w-full grid-cols-8 gap-1">
    {#each Array(4) as _, week_index}
      <div class="flex h-full w-auto justify-end px-4 py-2">
        {week_index + Math.floor(start_day_index / 7) + 1}
      </div>
      {#each days as d, day_index}
        <Day
          day_index={calculate_day(week_index, day_index)}
          day_name={d}
          month_name={name}
          day_of_year={calculate_day_of_year(week_index, day_index, start_day_index)}
        />
      {/each}
    {/each}
  </div>
</div>
