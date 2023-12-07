import { atom } from "recoil";

export const mobStateAtom = atom({
  key: "mobState",
  default: "",
});

export const skillIDAtom = atom({
  key: "skillID",
  default: "",
});

export const cancelableAtom = atom({
  key: "cancelable",
  default: "yes",
});

export const targetAtom = atom({
  key: "target",
  default: "",
});

export const conditionTypeAtom = atom({
  key: "conditionType",
  default: "",
});

export const conditionValueAtom = atom({
  key: "conditionValue",
  default: "",
});
