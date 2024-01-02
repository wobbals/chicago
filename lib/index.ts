import { Model } from "./Model";
import { StoredProperty } from "./StoredProperty";
import assert from "assert";

class Bottle extends Model {
  @StoredProperty({ required: false })
  foo?: string;

  @StoredProperty({ required: true })
  bar!: string;

  public get documentKey(): string {
    return `bottle`;
  }
}

const b = new Bottle();
b.foo = "bar";
console.log(b.foo);
assert(b.foo === "bar");

console.log(b.bar);
