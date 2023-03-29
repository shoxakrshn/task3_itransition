import crypto from 'crypto';

export class KeyGeneration {
  static create() {
    return crypto.getRandomValues(new Uint8Array(32));
  }
}