/**
 * 
@params CREATING A KEYPAIR
vishal@Vishals-MacBook-Pro ~ % solana-keygen new --outfile my-wallet.json
Generating a new keypair

For added security, enter a BIP39 passphrase

NOTE! This passphrase improves security of the recovery seed phrase NOT the
keypair file itself, which is stored as insecure plain text

BIP39 Passphrase (empty for none): 

Wrote new keypair to my-wallet.json
=========================================================================
pubkey: 6k9JePVEUqDXKjizDfNtChf4RBTMnkuy4pdvVWUm2Hym
=========================================================================
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
innocent inner yard wise floor tumble sand radio use retreat safe blanket
=========================================================================
vishal@Vishals-MacBook-Pro ~ % 
 */

/**
->  cat my-wallet.json                           
->  [208,66,32,31,160,41,87,80,105,235,140,236,236,34,196,0,56,35,53,221,124,170,187,62,243,125,141,186,48,76,227,138,
    85,87,204,141,69,255,161,224,168,138,201,141,116,250,17,40,136,45,24,33,133,228,113,104,180,243,240,86,45,239,140,36]

@parms Command to pvt key from this array of bytes :

node -e "const fs=require('fs'); const bs58=require('bs58').default; const secret=Uint8Array.from(JSON.parse(fs.readFileSync(process.env.HOME+'/my-wallet.json','utf8'))); console.log(bs58.encode(secret));"
5AVrh2JnU1rvSRjGLzdTxp7EnVALizrDYfcqQzAcx1Bo6sf1RjSN6x1TFRiZ4doy2wnMuTbEtgAwMqgYD6ybfvdy
 */

/**
@params CREATING A MINT TOKEN 
vishal@Vishals-MacBook-Pro ~ % solana config set --keypair ~/my-wallet.json
Config File: /Users/vishal/.config/solana/cli/config.yml
RPC URL: https://api.devnet.solana.com 
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: /Users/vishal/my-wallet.json 
Commitment: confirmed 
vishal@Vishals-MacBook-Pro ~ % spl-token create-token --owner my-wallet.json              
Creating token J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU under program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

Address:  J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU
Decimals:  9

Signature: 3oYi2Rhe5ngbf78ZvaxXQLwtBEQuq6pUd83z8LTGFp6GD92NfRkktGaQEhV4rwdWccEC6Y3nFqJKVoTqpDtfc6co

vishal@Vishals-MacBook-Pro ~ % x
 */
