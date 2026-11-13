import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { rewriteLocaleInput, rewriteLocaleOutput } from "@/components/secret-islands/locale";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    scrollRestoration: true,
    // Browser URLs are /en/…; routes keep matching the unprefixed tree via ?lang= internally.
    rewrite: { input: rewriteLocaleInput, output: rewriteLocaleOutput },
  });
}
