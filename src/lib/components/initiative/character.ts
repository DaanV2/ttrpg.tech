export interface InitiativeState {
  creature: Creature;
  initiative: number;
}

export interface Creature {
  id: string;
  name: string;
  health: NumberTracker;
}

export interface NumberTracker {
  current: number;
  max: number;
}

export namespace InitiativeState {
  export function create(initiative: number, creature: Creature): InitiativeState {
    return {
      creature: Creature.clone(creature),
      initiative: initiative
    };
  }
}

export namespace Creature {
  export function create(init: Omit<Creature, 'id'>): Creature {
    return {
      ...init,
      id: crypto.randomUUID()
    };
  }

  export function clone(creature: Creature): Creature {
    return {
      id: creature.id,
      name: creature.name,
      health: {
        current: creature.health.current,
        max: creature.health.max
      }
    };
  }
}
