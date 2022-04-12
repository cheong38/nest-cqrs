import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { KillDragonCommand } from './kill-dragon.command';
import { HERO_REPOSITORY, HeroRepository } from './hero.repository';
import { Inject } from '@nestjs/common';

// Every application state change is driven by the occurrence of a `Command`.
// The logic is encapsulated in handlers.
// We can simply add behaviour like logging or persisting commands in the database.
@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(
    @Inject(HERO_REPOSITORY) private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: KillDragonCommand) {
    const { heroId, dragonId } = command;
    console.log(command);
    const hero = this.publisher.mergeObjectContext(
      await this.repository.findOneById(heroId),
    );

    hero.killEnemy(dragonId);
    // We need to `commit()` events since they are not being dispatched immediately.
    hero.commit();
  }
}
