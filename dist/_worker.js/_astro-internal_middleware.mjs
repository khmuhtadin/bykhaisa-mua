globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_C6AnYfo5.mjs';
import './chunks/astro/server_HpJcxaXv.mjs';
import { s as sequence } from './chunks/index_B-chLYvN.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
