import { PublicConfig, publicConfig } from "./core/config";
import { builder as repositoriesBuilder } from "./repository";
import { builder as usecasesBuilder } from "./usecase";

/**
 * @description
 * 依存性の注入を行う Context です （俗にいうDIコンテナ）
 */
class Context {
  private _repositories!: ReturnType<typeof repositoriesBuilder>;
  get repositories() {
    return this._repositories;
  }

  private _usecases!: ReturnType<typeof usecasesBuilder>;
  get usecases() {
    return this._usecases;
  }

  readonly publicConfig: PublicConfig;
  constructor(publicConfig: PublicConfig) {
    this.publicConfig = publicConfig;
  }

  readonly isBrowser = !!globalThis.window;

  init() {
    this._repositories = repositoriesBuilder(this);
    this._usecases = usecasesBuilder(this);
  }
}

const context = new Context(publicConfig);
context.init();

export { context, type Context };
