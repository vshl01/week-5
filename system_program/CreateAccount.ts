// All normal wallets (system accounts) lie under: System Program
// Program ID: 11111111111111111111111111111111
// In code -> programId: SystemProgram.programId

import {
  Keypair,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  LAMPORTS_PER_SOL,
  Connection,
} from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com", "finalized");

async function crateAccount() {
  const payer = Keypair.fromSecretKey(
    new Uint8Array([
      34, 210, 232, 198, 138, 84, 216, 34, 5, 100, 61, 245, 172, 70, 89, 57,
      225, 91, 18, 253, 33, 168, 80, 129, 147, 21, 133, 198, 94, 94, 228, 10,
      123, 171, 170, 49, 116, 51, 2, 54, 12, 216, 137, 31, 223, 103, 212, 224,
      1, 97, 203, 202, 228, 0, 239, 189, 178, 68, 82, 164, 11, 110, 41, 73,
    ]),
  );
  // First create and fund a new account with no space
  const newAccount = Keypair.generate();
  console.log(payer.publicKey.toBase58());
  const fundTx = new Transaction().add(
    /** 
     * This `SystemProgram.createAccount` is diffrent from cli `solana key-gen new`
     * because :
     * -> cli only Generates a new keypair locally `solana key-gen new`
     * -> & `SystemProgram.createAccount` creates account on chain means
     * 
     * @params 
           - You are allocating space on blockchain

           - You are funding it with lamports

           - You are paying rent

           - You are sending a transaction
     */
    SystemProgram.createAccount({
      fromPubkey: payer.publicKey,
      newAccountPubkey: newAccount.publicKey,
      lamports: 0.1 * LAMPORTS_PER_SOL,
      space: 0,
      programId: SystemProgram.programId,
    }),
  );
  await sendAndConfirmTransaction(connection, fundTx, [payer, newAccount]);
  console.log("Funded account:", newAccount.publicKey.toBase58());
}

crateAccount();

/**
 * @params 
 * Keypair ≠ On-chain Account
 * 
 * Solana requires both signatures.
 * 1️⃣ payer → (paying fees + funding)
   2️⃣ newAccount → must sign because it's being created


   On Solana:
        - A keypair can exist without an on-chain account.

        - But it cannot receive SOL or store data until funded.
 */

/**
 * @params Rent or min SOL required 

1. Creating user wallet (just keypair) : 💰 Cost: 0 SOL (local only)

2. Funding user wallet on-chain : 💰 Cost: however much SOL you send

3. Creating program accounts (PDAs etc.) : 💰 Cost: rent-exempt amount based on space

*/
