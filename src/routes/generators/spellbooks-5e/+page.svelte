<script lang="ts">
  import { Classes, type ClassType } from '$lib/content/classes';
  import type { SchoolType, Spell as SpellType } from '$lib/content/spell';
  import { Schools } from '$lib/content/spell';
  import Number from '$lib/elements/number.svelte';
  import { Button, Hr } from 'flowbite-svelte';
  import spell_data from '../../../content/data/spells.json';
  import ToggleButton from '../../../lib/components/buttons/ToggleButton.svelte';
  import Spell from './spell.svelte';

  interface FilterData {
    schools: Partial<Record<SchoolType, boolean>>;
    classes: Partial<Record<ClassType, boolean>>;
    levels: Partial<Record<number, boolean>>;
  }

  let spell_list: SpellType[] = $state([]);
  let spell_max_amount = $state(Math.max(Math.floor(Math.random() * 50), 1));
  let spell_min_amount = $state(1);
  let filter_data: FilterData = {
    schools: {},
    classes: {},
    levels: {}
  };
  Schools.forEach((sch) => (filter_data.schools[sch] = true));
  Classes.forEach((cls) => (filter_data.classes[cls] = true));
  Array.from({ length: 10 }, (_, i) => i).forEach((level) => (filter_data.levels[level] = true));

  function generate() {
    spell_list = [];
    const spells = filter();
    const max = spells.length;
    if (max === 0) return;

    const amount = Math.max(
      Math.min(Math.floor(Math.random() * spell_max_amount), max),
      spell_min_amount
    );

    for (let i = 0; i < amount; i++) {
      const index = Math.floor(Math.random() * max);
      const item = spells[index];
      if (spell_list.includes(item)) {
        continue;
      }

      spell_list.push(item);
    }

    spell_list.sort((a, b) => a.spell.localeCompare(b.spell));
  }

  function filter() {
    return spell_data.filter(spellFilter);
  }

  function spellFilter(item: SpellType) {
    if (item === undefined) return false;
    const hasSchool = Schools.some(
      (sch) => filter_data.schools[sch] === true && item.school === sch
    );
    if (!hasSchool) return false;
    const hasClass = Classes.some(
      (cls) => filter_data.classes[cls] === true && item.classes.includes(cls)
    );
    if (!hasClass) return false;
    const hasLevel = Object.keys(filter_data.levels).some(
      (level) => filter_data.levels[parseInt(level)] === true && item.level === parseInt(level)
    );
    if (!hasLevel) return false;

    return true;
  }
</script>

<div class="flex flex-col">
  <div class="flex w-full flex-col items-center justify-center">
    <div class="w-3/5 p-2">
      <h2 class="p-5 text-4xl">Spellbook</h2>
      <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
      <section class="w-full">
        <h4>School</h4>
        <div class="flex flex-wrap content-evenly">
          {#each Schools as sch}
            <ToggleButton
              text={sch.toLowerCase()}
              bind:value={
                () => filter_data.schools[sch] ?? false,
                (value) => (filter_data.schools[sch] = value)
              }
            />
          {/each}
        </div>
        <h4>Classes</h4>
        <div class="flex flex-wrap content-evenly">
          {#each Classes as sch}
            <ToggleButton
              text={sch.toLowerCase()}
              bind:value={
                () => filter_data.classes[sch] ?? false,
                (value) => (filter_data.classes[sch] = value)
              }
            />
          {/each}
        </div>
        <h4>Levels</h4>
        <div class="flex flex-wrap content-evenly">
          <ToggleButton
            text="cantrip"
            bind:value={
              () => filter_data.levels[0] ?? false, (value) => (filter_data.levels[0] = value)
            }
          />
          {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as level}
            <ToggleButton
              text={level.toString()}
              bind:value={
                () => filter_data.levels[level] ?? false,
                (value) => (filter_data.levels[level] = value)
              }
            />
          {/each}
        </div>
        <h4>Amount</h4>
        <Number text="max" max={25} min={1} bind:value={spell_max_amount} />
        <Number text="min" max={25} min={1} bind:value={spell_min_amount} />
      </section>
      <section>
        <Button class="bg-red-800 hover:bg-red-600" onclick={generate}>Generate</Button>
      </section>
      {#if spell_list.length > 0}
      <section class="my-1">
        <h2 class="text-left text-xl">Spells</h2>
        <div class="bg-quaternary shadow-secondary rounded-lg p-3">
          {#each spell_list as spell}
            <Spell {spell} />
          {/each}
        </div>
      </section>
      {/if}
      <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
    </div>
  </div>
</div>
