import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { KillDragonCommand } from './kill-dragon.command';

class HeroKillBody {
  dragonId: string;
}

@Controller('heroes')
export class HeroesController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post(':id/kill')
  async kill(@Param('id') heroId: string, @Body() body: HeroKillBody) {
    await this.commandBus.execute(new KillDragonCommand(heroId, body.dragonId));
  }
}
