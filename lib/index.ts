import assert from "assert";
import { Model } from "./Model";

class Bottle extends Model {
  @Model.Property
  foo?: string;
}

const b = new Bottle();
b.foo = "bar";
console.log(b.foo);
