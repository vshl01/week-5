// when we run this on cli it creates a mint token from our key pair
/**
 * @param PRIVATE_KEY = 5AVrh2JnU1rvSRjGLzdTxp7EnVALizrDYfcqQzAcx1Bo6sf1RjSN6x1TFRiZ4doy2wnMuTbEtgAwMqgYD6ybfvdy
 * @param MINT_ADDRESS = J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU
 */

/**
    - spl-token create-token --owner my-wallet.json 
      output: Creating token J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU under program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

        Address:  J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU
        Decimals:  9

        Signature: 3oYi2Rhe5ngbf78ZvaxXQLwtBEQuq6pUd83z8LTGFp6GD92NfRkktGaQEhV4rwdWccEC6Y3nFqJKVoTqpDtfc6co
 */

// 1)   system program created a new account first here
//      - J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU

// 2)   Deducted 0.0014616 SOL from your wallet

// 3)   Allocated 82 bytes of space

// 4)   Assigned ownership of this account to: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

/**
 * @params Create an ata account on my key pair 
 * this command takes the mint address for you default keypair `spl-token create-account`
 * 
vishal@Vishals-MacBook-Pro ~ % spl-token create-account J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU
Creating account 9z3Br1MmKwhvyaeG49aqpSXCAppUngtVXpmLy7DMVs9T

Signature: bSrLy9pt4AHmuA6ey8NgFNxjHcQ4eJ4UAP9gyiWs75dKXCUzPky71VURUgMU6sdGSCGjRr5YEKL97d5MTzgyY74


       - You created a Token Account (ATA) for:

       - Mint: J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU

       - Owner: your current CLI wallet (~/my-wallet.json)

       - Token Account Address: 9z3Br1MmKwhvyaeG49aqpSXCAppUngtVXpmLy7DMVs9T

@params this actually means 
this is an ATA 9z3Br1MmKwhvyaeG49aqpSXCAppUngtVXpmLy7DMVs9T
that can only hold this mint token J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU
( only made for this specific mint `J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU` )
 */
