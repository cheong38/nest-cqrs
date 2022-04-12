import { Hero } from './hero';

export const HERO_REPOSITORY = Symbol('HERO_REPOSITORY');

export interface HeroRepository {
  findOneById(heroId: string): Promise<Hero>;

  persist(hero: Hero): Promise<void>;
}
