import { add, subtract, multiply, divide, toPower } from "./index.js"
import assert from "assert"

assert.strictEqual(add(5, 6), 11, "The add function is wrongly implemented")
assert.strictEqual(divide(20, 4), 5, "The divide function is wrongly implemented")
assert.strictEqual(multiply(2, 3), 6, "The multiply function is wrongly implemented")
assert.strictEqual(subtract(10, 5), 5, "The subtract function is wrongly implemented")
assert.strictEqual(toPower(5, 5), 3125, "The toPower function is wrongly implemented")
assert.strictEqual(divide(5, 0), "Division through zero is not possible! You dumb ass.", "The divide function when you divide through 0 has an issue")