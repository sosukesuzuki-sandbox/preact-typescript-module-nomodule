import { h, render } from "preact";

render(
  h("a", { href: "/" }, "Hello, preact-typescript-module-nomodule example"),
  document.querySelector(".root")!
);
