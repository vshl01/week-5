import {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

// Connect to devnet
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// Your wallet (sender) — load from secret key
const sender = Keypair.fromSecretKey(
  Uint8Array.from([
    /* your secret key array */
  ]),
);

// Recipient address
const recipient = new PublicKey("RecipientPublicKeyHere");

// Build the transaction
const transaction = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: recipient,
    lamports: 0.1 * LAMPORTS_PER_SOL, // 0.1 SOL
  }),
);

// Send and confirm
const signature = await sendAndConfirmTransaction(connection, transaction, [
  sender,
]);
console.log("SOL Transfer signature:", signature);
