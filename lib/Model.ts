import assert from "assert";

export abstract class Model {
  protected _unsavedChanges: Map<string | symbol, any>;
  protected _savedChanges: Map<string | symbol, any>;
  protected _loaded = false;

  constructor() {
    this._unsavedChanges = new Map<string | symbol, any>();
    this._savedChanges = new Map<string | symbol, any>();
  }

  public abstract get documentKey(): string;
}
