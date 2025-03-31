#!/usr/bin/env node

import { Command } from "commander";
import yoctoSpinner from "yocto-spinner";

async function main() {
  const program = new Command("better-auth");

  program.action(() => console.log("hello world !!"));
  program.description("Better Auth CLI");

  const spinner = yoctoSpinner({ text: "preparing schema..." }).start();

  setTimeout(() => {
    spinner.success("Success!");
  }, 2000);

  program.parse();
}

main();
