import { Logger } from "../types/logger";
import { PublicConfig, publicConfig } from "./core/config";
import { logger } from "./core/logger";
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

  readonly _publicConfig: PublicConfig;
  get publicConfig() {
    return this._publicConfig;
  }

  private _logger: Logger;
  get logger() {
    return this._logger;
  }

  constructor(publicConfig: PublicConfig) {
    this._publicConfig = publicConfig;
    this._logger = logger(this);
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
