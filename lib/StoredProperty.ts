import { Model } from "./Model";
import assert from "assert";

export type StoredPropertyOptions = {
  required?: boolean;
};

export function StoredProperty(options?: StoredPropertyOptions): any {
  console.log("StoredProperty", options);
  return function (this: Model, target: Object, propertyName: string | symbol) {
    console.log("Call StoredProperty", options, target, propertyName);

    assert(target instanceof Model);
    Object.defineProperty(target, propertyName, {
      set(this: Model, value: any) {
        assert(this instanceof Model);
        this._unsavedChanges.set(propertyName, value);
      },
      get(this: Model) {
        assert(this instanceof Model);
        const result =
          this._unsavedChanges.get(propertyName) ??
          this._savedChanges.get(propertyName);

        if (options?.required) {
          assert(result, "required property is nullish");
        }
        return result;
      },
    });
  };
}
