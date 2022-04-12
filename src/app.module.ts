import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './heroes.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { KillDragonHandler } from './kill-dragon.handler';
import { HERO_REPOSITORY } from './hero.repository';
import { InMemoryHeroRepository } from './in-memory-hero.repository';

@Module({
  imports: [CqrsModule],
  controllers: [AppController, HeroesController],
  providers: [
    AppService,
    KillDragonHandler,
    {
      provide: HERO_REPOSITORY,
      useClass: InMemoryHeroRepository,
    },
  ],
})
export class AppModule {}
