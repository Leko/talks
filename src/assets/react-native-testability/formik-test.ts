import assert from "assert";
import { formikOptions } from "./MyForm";

it("nameが未入力の場合必須エラーが起こること", () => {
  const errors = formikOptions.validate({ name: "" });
  assert.strictEqual(errors.name, "Required");
});
