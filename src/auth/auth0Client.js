import { createAuth0Client } from '@auth0/auth0-spa-js';

let client;

export async function getAuth0Client(options) {
  if (!client) {
    client = await createAuth0Client(options);
  }
  return client;
}