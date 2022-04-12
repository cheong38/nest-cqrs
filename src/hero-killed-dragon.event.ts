// We introduce `Events` to make application reactive.
// Events are asynchronous.
// Events are dispatched either by models or directly using `EventBus`.
// In order to dispatch events, models have to extend the `AggregateRoot`class.
export class HeroKilledDragonEvent {
  constructor(
    public readonly heroId: string,
    public readonly dragonId: string,
  ) {}
}
