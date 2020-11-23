import { prove, proof_to_hash, verify, keygen } from './index';

// const secret_key =
//   'c9afa9d845ba75166b5c215767b1d6934e50c3db36e89b127b8a622b120f6721';
// const public_key =
//   '0360fed4ba255a9d31c961eb74c6356d68c049b8923b61fa6ce669622e60f29fb6';
const { public_key, secret_key } = keygen();
const alpha = '73616d706c65';
const pi = prove(secret_key, alpha);
const beta = proof_to_hash(pi);
const res = verify(public_key, pi, alpha);
console.log(pi);
console.log(beta);
console.log(res);
