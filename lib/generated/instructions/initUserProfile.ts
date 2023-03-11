/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category InitUserProfile
 * @category generated
 */
export const initUserProfileStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'InitUserProfileInstructionArgs'
)
/**
 * Accounts required by the _initUserProfile_ instruction
 *
 * @property [_writable_] userProfile
 * @property [_writable_, **signer**] authority
 * @category Instructions
 * @category InitUserProfile
 * @category generated
 */
export type InitUserProfileInstructionAccounts = {
  userProfile: web3.PublicKey
  authority: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const initUserProfileInstructionDiscriminator = [
  148, 35, 126, 247, 28, 169, 135, 175,
]

/**
 * Creates a _InitUserProfile_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category InitUserProfile
 * @category generated
 */
export function createInitUserProfileInstruction(
  accounts: InitUserProfileInstructionAccounts,
  programId = new web3.PublicKey('4ytc1xagmoutbU1ppmEPMUuFFM7Eso3c2ZRk4nBrkGYq')
) {
  const [data] = initUserProfileStruct.serialize({
    instructionDiscriminator: initUserProfileInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.userProfile,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
