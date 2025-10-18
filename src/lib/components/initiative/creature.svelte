<script lang="ts">
  import type { InitiativeState } from './character';
  import Healthtracker from './healthtracker.svelte';

  export let state: InitiativeState;
  export let onchange: () => void = () => {};

  // compute a width sized to the content (in ch units) so the input grows/shrinks
  // with the numeric value. Add a small fractional padding so the cursor doesn't
  // sit on the edge.
  $: {
    const raw = state?.initiative ?? '';
    // ensure a string for length measurement; allow empty value
    const str = raw === null || raw === undefined ? '' : String(raw);
    // at least 1 character width; add 0.5ch for visual padding
    inputWidthCh = Math.max(1, str.length) + 0.5;
  }
  let inputWidthCh: number;
</script>

<div class="w-full rounded-lg border-2 border-gray-300 p-4 flex items-center justify-between">
  <input class="text-2xl font-semibold text-left" bind:value={state.creature.name} {onchange} />
  <div class="flex items-center gap-4">
    <input
      alt="initiative"
      title="initiative"
      type="number"
      class="initiative-input rounded-md border border-gray-400 p-1"
      bind:value={state.initiative}
      onchange={onchange}
    />
    <Healthtracker tracker={state.creature.health} {onchange} />
  </div>
</div>

<style>
  .initiative-input {
    width: 60px;
    height: 60px;
    font-size: 1.25rem;
    text-align: center;
  }
</style>
