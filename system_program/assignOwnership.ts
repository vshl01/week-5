/**
 * When a new program needs to own an account (like when you create a token account),
 * the System Program transfers ownership from itself to that program.
 * Once ownership is transferred, the System Program can no longer modify that account.
 */

import {
  Keypair,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  LAMPORTS_PER_SOL,
  Connection,
  PublicKey,
} from "@solana/web3.js";

async function assignOwner() {
  const account = Keypair.generate();
  const newOwner = new PublicKey("NewOwnerProgramIdHere");
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "finalized",
  );

  //   sender
  const payer = Keypair.fromSecretKey(
    Uint8Array.from([
      /* your secret key array */
    ]),
  );

  // Fund the account first
  const fundTx = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: payer.publicKey,
      toPubkey: account.publicKey,
      lamports: 0.01 * LAMPORTS_PER_SOL,
    }),
  );
  await sendAndConfirmTransaction(connection, fundTx, [payer]);
  console.log("Funded account:", account.publicKey.toBase58());

  /**
   * 
    - After you assign ownership to a program:

    - The private key CANNOT control it anymore.

    - Only that program can modify it.

    - It becomes a program-owned account.
   */

  // Assign ownership to a new program
  const assignTx = new Transaction().add(
    SystemProgram.assign({
      accountPubkey: account.publicKey,
      programId: newOwner,
    }),
  );

  // The account itself must sign
  const signature = await sendAndConfirmTransaction(connection, assignTx, [
    account,
  ]);
  console.log("Assign signature:", signature);
}

assignOwner();

/**
 *   On Solana:
 *      Program ID = Address of an account where executable = true
 *      @params -> it should be a deployed smart contract & The runtime can execute its code
 */
