export interface Repository {}

export interface RepositoryGenerator<C, O, T extends Repository> {
  (config: Readonly<C>, option: Readonly<O>): T;
}
