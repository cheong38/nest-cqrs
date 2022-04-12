// Each action is called a `Command`.
// When a command is dispatched, the application reacts to it.
// Commands are consumed by `Command Handlers`.
export class KillDragonCommand {
  constructor(
    public readonly heroId: string,
    public readonly dragonId: string,
  ) {}
}
