import assert from "assert";

export class Model {
  private unsavedChanges: Map<string | symbol, any>;

  constructor() {
    this.unsavedChanges = new Map<string | symbol, any>();
  }

  save(): void {
    console.log("saveMe");
  }

  public static Property(target: Object, propertyName: string | symbol): void {
    console.log(target, propertyName);
    assert(target instanceof Model);
    Object.defineProperty(target, propertyName, {
      set(value: any) {
        console.log("override set", propertyName, value);
        target.unsavedChanges.set(propertyName, value);
        // this[propertyName] = value;
      },
      get() {
        console.log("override get", typeof target);
        return this.unsavedChanges.get(propertyName);
      },
    });
  }
}
