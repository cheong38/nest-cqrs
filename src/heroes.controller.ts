import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { KillDragonCommand } from './kill-dragon.command';
import { GetHeroesQuery } from './get-heroes.query';

class HeroKillBody {
  dragonId: string;
}

@Controller('heroes')
export class HeroesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async getAll() {
    return await this.queryBus.execute(new GetHeroesQuery());
  }

  @Post(':id/kill')
  async kill(@Param('id') heroId: string, @Body() body: HeroKillBody) {
    await this.commandBus.execute(new KillDragonCommand(heroId, body.dragonId));
  }
}
