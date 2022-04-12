import { HeroRepository } from './hero.repository';
import { Injectable } from '@nestjs/common';
import { Hero } from './hero';

@Injectable()
export class InMemoryHeroRepository implements HeroRepository {
  async findOneById(heroId: string): Promise<Hero> {
    return new Hero(heroId);
  }

  async persist(hero: Hero): Promise<void> {
    // Do nothing
    return Promise.resolve(undefined);
  }
}
