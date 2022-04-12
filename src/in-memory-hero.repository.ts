import { HeroRepository } from './hero.repository';
import { Injectable } from '@nestjs/common';
import { Hero } from './hero';

const HERO_FIXTURES: Hero[] = [new Hero('1'), new Hero('2'), new Hero('3')];

@Injectable()
export class InMemoryHeroRepository implements HeroRepository {
  async findAll(): Promise<Hero[]> {
    return [...HERO_FIXTURES];
  }

  async findOneById(heroId: string): Promise<Hero> {
    return new Hero(heroId);
  }

  async persist(hero: Hero): Promise<void> {
    // Do nothing
    return Promise.resolve(undefined);
  }
}
