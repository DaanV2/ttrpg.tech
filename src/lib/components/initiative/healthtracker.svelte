<script lang="ts">
  import type { NumberTracker } from './character';

  let { tracker = { current: 1, max: 1 } as NumberTracker, onchange } = $props();
  let hClass = $derived(healthColor(tracker));

  function healthColor(t: NumberTracker): string {
    const ratio = t.current / t.max;
    if (ratio >= 0.5) {
      return 'bg-green-700';
    }
    return 'bg-red-700';
  }

  function updateCurrent(event: Event) {
    const target = event.target as HTMLInputElement;
    tracker.current = parseInt(target.value) || 0;
    onchange();
  }

  function updateMax(event: Event) {
    const target = event.target as HTMLInputElement;
    tracker.max = parseInt(target.value) || 1;
    onchange();
  }
</script>

<div class="{hClass} rounded-md p-1 shadow-2x healthtracker">
  <input alt="current health" title="current health" type="number" class="tracker-input" value={tracker.current} oninput={updateCurrent} />
  <hr class="fill h-1 rounded-sm border-white" />
  <input alt="max health" title="max health" type="number" class="tracker-input" value={tracker.max} oninput={updateMax} />
</div>

<style>
  .healthtracker {
    transition: background-color 0.6s ease;
    height: 60px;
    width: 60px;
  }

  .tracker-input {
    color: white;
    text-align: center;
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    font-size: inherit;
    height: 20px;
  }

  .tracker-input:focus {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    border-width: 0px;
    border-color: transparent;
  }

  /* Remove number input spinner arrows */
  .tracker-input::-webkit-outer-spin-button,
  .tracker-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .tracker-input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
</style>
