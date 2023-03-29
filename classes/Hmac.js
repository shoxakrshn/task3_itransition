import crypto from 'crypto';

export class Hmac {
  constructor(key) {
    this.key = key;
  }

  computeHMAC(data) {
    const hmac = crypto.createHmac('sha256', this.key);
    hmac.update(data);
    console.log('HMAC: '+ hmac.digest('hex'));
    return hmac.digest('hex');
  }
}