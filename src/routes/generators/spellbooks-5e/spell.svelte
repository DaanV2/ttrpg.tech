<script>
  import { fade } from 'svelte/transition';

  /** @type {{ spell: import("../../../lib/content/spell").Spell }} */
  let { spell: item } = $props();
</script>

<div transition:fade class="hover:bg-quaternary-highlight transition-colors">
  <a
    href={item.link}
    class="text-wrap text-left text-primary"
    title="{item.level === 0 ? 'Cantrip' : `Level ${item.level}`} {item.school} for {item.classes}"
    >{item.spell}</a
  >
</div>
