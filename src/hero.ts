import { AggregateRoot } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from './hero-killed-dragon.event';

export class Hero extends AggregateRoot {
  constructor(private id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    // logic
    // `apply()` method does not dispatch events yet.
    // Because there is no relationship between the model and the `EventPublisher` class.
    // `mergeObjectContexts()` method associates the model and the publisher.
    console.log(`hero killed an enemy: ${enemyId}`);
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }
}
