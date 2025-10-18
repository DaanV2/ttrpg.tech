<script lang="ts">
  import { afterNavigate, replaceState } from '$app/navigation';
  import { page } from '$app/state';
  import { flip } from 'svelte/animate';
  import { InitiativeState } from './character';
  import { Base64 } from '../../serialization/base64';
  import Creature from './creature.svelte';
    import { Hr } from 'flowbite-svelte';
    import SimpleCard from '../cards/SimpleCard.svelte';

  let initiatives: Array<InitiativeState> = $state([]);

  // Default initiatives if none are provided
  function getDefaultInitiatives(): Array<InitiativeState> {
    return [
      InitiativeState.create(1, {
        health: { current: 2, max: 10 },
        id: 'creature-1',
        name: 'Goblin'
      }),
      InitiativeState.create(2, {
        health: { current: 4, max: 15 },
        id: 'creature-2',
        name: 'Orc'
      }),
      InitiativeState.create(3, {
        health: { current: 6, max: 10 },
        id: 'creature-3',
        name: 'Goblin'
      }),
      InitiativeState.create(4, {
        health: { current: 8, max: 15 },
        id: 'creature-4',
        name: 'Orc'
      }),
      InitiativeState.create(5, {
        health: { current: 10, max: 10 },
        id: 'creature-5',
        name: 'Goblin'
      }),
      InitiativeState.create(6, {
        health: { current: 12, max: 15 },
        id: 'creature-6',
        name: 'Orc'
      })
    ];
  }

  function updateUrlParameters() {
    const encoded = Base64.encodeObject(initiatives);
    page.url.searchParams.set('initiatives', encoded);
    replaceState(page.url, page.state);
  }

  function loadFromUrlParameters() {
    const encoded = page.url.searchParams.get('initiatives');
    if (typeof encoded === 'string' && encoded.length > 0) {
      try {
        initiatives = Base64.decodeObject<Array<InitiativeState>>(encoded);
      } catch (error) {
        console.warn('Failed to decode initiatives from URL parameters:', error);
        initiatives = getDefaultInitiatives();
      }
    } else {
      initiatives = getDefaultInitiatives();
    }
  }

  function onUpdate() {
    initiatives = initiatives.sort((a, b) => a.initiative - b.initiative);

    updateUrlParameters();
  }

  // Load initiatives from URL on navigation
  afterNavigate(() => {
    loadFromUrlParameters();
  });

  // Initialize with default or URL data
  loadFromUrlParameters();

  // Update URL whenever initiatives change
  $effect(() => {
    if (initiatives.length > 0) {
      updateUrlParameters();
    }
  });
</script>

<div class="initative-tracker-container w-3/4 max-sm:w-full">
  {#each initiatives as state (state.creature.id)}
    <div animate:flip={{ duration: 300 }}>
      <Creature {state} onchange={onUpdate} />
    </div>
  {/each}
</div>
<Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
<SimpleCard title='add'/>
<SimpleCard title='import'/>

<style>
  .initative-tracker-container {
    display: grid;
    grid-template-columns: 1fr;
  }

  .initative-tracker-container > div {
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 640px) {
    .initative-tracker-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    /* Offset every second column item slightly downwards to create a staggered effect */
    .initative-tracker-container > div:nth-child(2n) {
      transform: translateY(3rem);
    }
  }
</style>
