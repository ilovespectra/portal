import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from 'next/link'
import { useEffect, useState } from "react";

export default function Header() {
    const [walletAddress, setWalletAddress] = useState<string | null>(null)


    // First load only
    useEffect(() => {

        if (!walletAddress) {
            if (localStorage.getItem('userPublicKey')) {
                // console.log("We found a public key of a user, we'll continue with that: ", localStorage.getItem('userPublicKey'))
                setWalletAddress(localStorage.getItem('userPublicKey'))
            } else {
                return
            }
        }

        // TODO:
        // Display all of them in a nice card system
    }, [])

    return (
        <>
            <nav className="pt-3 pb-2 flex justify-between">
                <Link href="/">
                    <h1 className='text-6xl font-phenomenaBlack h-12 leading-8 cursor-pointer'> soap</h1>
                </Link>
                <ul className="flex items-center font-neueHaasUnicaRegular">
                    <Link href="/mobile">
                        <button className="bg-black hover:drop-shadow-md text-white font-bold py-2 w-40 rounded h-12">
                        {walletAddress ? `🔗 ${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` : "WALLET"}
                        </button>
                    </Link>
                    {/* <li className="pl-6">
                        <WalletMultiButton className='bg-black leading-none text-xl'>

                        </WalletMultiButton>
                    </li> */}
                </ul>
            </nav>
        </>
    )

}

// h-12 mb-12 leading-8 font-phenomenaBlack

// font-neueHaasUnicaRegular text-sm