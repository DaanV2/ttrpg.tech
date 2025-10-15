<script lang="ts">
  let { text = '', value = $bindable(true) } = $props();
  let selected = $derived(value);
</script>

<button
  class="m-1 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus-within:ring-4 focus-within:outline-hidden hover:bg-tertiary-highlight-800 focus-within:ring-primary-300"
  class:border-tertiary={selected}
  class:bg-tertiary={selected}
  class:border-secondary={!selected}
  class:bg-secondary={!selected}
  onkeypress={(e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      selected = !selected;
      value = selected;
    }
  }}
  onclick={() => {
    selected = !selected;
    value = selected;
  }}
>{text}</button>
