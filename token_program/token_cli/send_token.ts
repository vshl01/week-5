/**
 * 
vishal@Vishals-MacBook-Pro ~ % spl-token transfer J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU 10 DRt3A3LgVzrTdC1ZrvL1ZotbfhaEKtM6yQFVvrtG5tuH --fund-recipient
Transfer 10 tokens
  Sender: 9z3Br1MmKwhvyaeG49aqpSXCAppUngtVXpmLy7DMVs9T
  Recipient: DRt3A3LgVzrTdC1ZrvL1ZotbfhaEKtM6yQFVvrtG5tuH
Error: "Error: The recipient address is not funded. Add `--allow-unfunded-recipient` to complete the transfer."
vishal@Vishals-MacBook-Pro ~ % spl-token transfer J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU 10 DRt3A3LgVzrTdC1ZrvL1ZotbfhaEKtM6yQFVvrtG5tuH --fund-recipient --allow-unfunded-recipient
Transfer 10 tokens
  Sender: 9z3Br1MmKwhvyaeG49aqpSXCAppUngtVXpmLy7DMVs9T
  Recipient: DRt3A3LgVzrTdC1ZrvL1ZotbfhaEKtM6yQFVvrtG5tuH
  Recipient associated token account: 3tiRvibQ6oSo3C7wKE6TKGVqUfvGCVi3CcTyT8bXUCXm

Signature: 2tE73kgL2zdXS2FwkBuuayvQvrmSYALSCm4iwnFo85ooJqedTfcDaPhq6iVeZnXz8yzwHWShCLpi6BoTdgMjn399

vishal@Vishals-MacBook-Pro ~ % 
 */

// what happend here is this pub key `DRt3A3LgVzrTdC1ZrvL1ZotbfhaEKtM6yQFVvrtG5tuH` of mine has 0Sol
// so its saying Add `--allow-unfunded-recipient` to complete the transfer.The recipient address is not funded.

/**
 * After when i ran this 
 * spl-token transfer J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU 10 DRt3A3LgVzrTdC1ZrvL1ZotbfhaEKtM6yQFVvrtG5tuH --fund-recipient --allow-unfunded-recipient
        - an ATA for this mint `J3744UZ5HBFr8oB3aK7gSQJqZ3phoZgJ6M92uCKptcLU`  has been created on this account `DRt3A3LgVzrTdC1ZrvL1ZotbfhaEKtM6yQFVvrtG5tuH`
        - Transfer 10 tokens
            Sender: 9z3Br1MmKwhvyaeG49aqpSXCAppUngtVXpmLy7DMVs9T
            Recipient: DRt3A3LgVzrTdC1ZrvL1ZotbfhaEKtM6yQFVvrtG5tuH
            Recipient associated token account: 3tiRvibQ6oSo3C7wKE6TKGVqUfvGCVi3CcTyT8bXUCXm
        - here `3tiRvibQ6oSo3C7wKE6TKGVqUfvGCVi3CcTyT8bXUCXm` this key is ATA of that account
          where the owner is the pub key to whom i send the SOL ie `DRt3A3LgVzrTdC1ZrvL1ZotbfhaEKtM6yQFVvrtG5tuH`
*/
