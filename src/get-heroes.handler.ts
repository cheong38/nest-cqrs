import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HERO_REPOSITORY, HeroRepository } from './hero.repository';
import { Inject } from '@nestjs/common';
import { GetHeroesQuery } from './get-heroes.query';

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor(
    @Inject(HERO_REPOSITORY) private readonly repository: HeroRepository,
  ) {}

  async execute(query: GetHeroesQuery) {
    return await this.repository.findAll();
  }
}
