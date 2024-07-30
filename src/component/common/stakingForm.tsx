'use client';

import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

// import Notification from "../Notification";
import { toast } from "react-toastify";

import {
  useAccount,
  useBalance,
  useWriteContract,
  useReadContract,
} from "wagmi";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import Web3 from "web3";

//// RPC URL
const LINEAR_RPC_URL = "https://linea.decubate.com";

/////////////// contract data   ///////////////////////
import STAKING_CONTRACT_ABI from "../../utils/STAKING_CONTRACT_ABI.json";
import WOLF_TOKEN_CONTRACT_ABI from "../../utils/WOLF_TOKEN_CONTRACT_ABI.json";

const STAKING_CONTRACT_ADDRESS =
  "0x67A2b4AD4aAa6d9D1C83eB0dc71Fa757F86fCC9a";
const WOLF_TOKEN_CONTRACT_ADDRESS =
  "0x7C92b9Fb20B6E60ff67Ee6C0B8314cF72be2235A";

const WOLF_TOKEN_DECIMAL = 18;
const WOLF_TOKEN_TICKER = "WOLF";

const StakingForm = () => {

  //web3 
  const [web3, setWeb3] = useState<Web3 | null>(null);
  
  //UI
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [withdrawAmount, setWithdrawAmount] = useState<string>("");
  const [stakingDuration, setStakingDuration] = useState<number>(1);
  const [isNFT, setIsNFT] = useState<boolean>(false);

  const [boostNFTNumber, setBoostNFTNumber] = useState<number>(1);
  const [boostNFTNumberForDeposit, setBoostNFTNumberForDeposit] = useState<number>(1);

  const { open } = useWeb3Modal();
  const { address, isConnected, chainId } = useAccount();

  const usdtBalance = useBalance({
    address: address,
    token: WOLF_TOKEN_CONTRACT_ADDRESS,
    chainId,
  });

  const { writeContractAsync } = useWriteContract();

  useEffect(() => {
    if (!isConnected) return;
    if (chainId === 59144) {
      setWeb3(new Web3(LINEAR_RPC_URL));
      setDepositAmount("0");
      setWithdrawAmount("0");
    }
  }, [isConnected, chainId]);

    const handleDeposit = async () => {
      if (!isConnected || chainId !== 59144 || web3 === null)
        return;
      let tmpDepositAmount = parseFloat(depositAmount);
      if (isNaN(tmpDepositAmount) || tmpDepositAmount <= 0) {
        return;
      }

      if(isNFT) {
        try {
          let hash = await writeContractAsync({
            abi: STAKING_CONTRACT_ABI,
            address: STAKING_CONTRACT_ADDRESS,
            functionName: "stakeNFT",
            args: [BigInt(boostNFTNumberForDeposit), BigInt(stakingDuration * 30 * 24 * 60 * 60 * 1000)],
          });
          toast.success(`Successfully Purchased.\n ${hash}`, {
            position: "top-right",
            autoClose: 3000,
          });
    
        } catch (error: any) {
          toast.error('User rejected the request.', {
            position: "top-right",
            autoClose: 3000,
          });
        }
      } else {
        try {
          let hash = await writeContractAsync({
            abi: STAKING_CONTRACT_ABI,
            address: STAKING_CONTRACT_ADDRESS,
            functionName: "stake",
            args: [BigInt(depositAmount)*BigInt(10**WOLF_TOKEN_DECIMAL), BigInt(stakingDuration * 30 * 24 * 60 * 60 * 1000)],
          });
          toast.success(`Successfully Purchased.\n ${hash}`, {
            position: "top-right",
            autoClose: 3000,
          });

        } catch (error: any) {
          toast.error('User rejected the request.', {
            position: "top-right",
            autoClose: 3000,
          });
        }
      }
            
      
    };

    const handleUnstake = async () => {
      if (!isConnected || chainId !== 59144 || web3 === null)
        return;

      if(isNFT) {
        try {
          let hash = await writeContractAsync({
            abi: STAKING_CONTRACT_ABI,
            address: STAKING_CONTRACT_ADDRESS,
            functionName: "unstakeNFT",
          });
          toast.success(`Successfully Purchased.\n ${hash}`, {
            position: "top-right",
            autoClose: 3000,
          });
        } catch (error: any) {
          toast.error('User rejected the request.', {
            position: "top-right",
            autoClose: 3000,
          });
        }
      } else {
        try {
          let hash = await writeContractAsync({
            abi: STAKING_CONTRACT_ABI,
            address: STAKING_CONTRACT_ADDRESS,
            functionName: "unstake",
          });
          toast.success(`Successfully Purchased.\n ${hash}`, {
            position: "top-right",
            autoClose: 3000,
          });
        } catch (error: any) {
          toast.error('User rejected the request.', {
            position: "top-right",
            autoClose: 3000,
          });
        }
      }
    }

  return (
    <>
      <div className="flex flex-row justify-between">
        <p className="text-gray-300 text-4xl mb-4 md:mb-0">Staking</p>
        <p><input type="checkbox" onClick={() => setIsNFT(!isNFT)} /> <span className="cursor-pointer" onClick={() => setIsNFT(!isNFT)}>NFT Staking</span></p>
      </div>
      <div className="flex md:flex-row flex-col py-5">
        
        <div className="md:w-1/2 w-full bg-white py-4 bg-opacity-[5%] mx-3 rounded-2xl  px-5">
          <div className="flex text-[27px] text-white justify-between text-center rounded-lg items-center ">
            <select className="bg-transparent w-[70%] py-3 text-center rounded-lg focus:border-gray-400 border-gray-500 border  outline-none " value={stakingDuration} onChange={(e) => {setStakingDuration(Number(e.target.value))}}>
              <option className="bg-[#0e1238] py-2 bg-opacity-90" value={1}>1  month</option>
              <option className="bg-[#0e1238] py-2 bg-opacity-90" value={4}>4 month</option>
              <option className="bg-[#0e1238] py-2 bg-opacity-90" value={6}>Half year</option>
              <option className="bg-[#0e1238] py-2 bg-opacity-90" value={12}>Full year</option>
            </select>
            <Image
              src="/image/deposit.png"
              alt="astronaut"
              width={100} height={100}
              className="w-[30%] h-auto ml-2 my-auto"
            />
          </div>
          <div className="mt-3 grid px-0">
          {
                  isNFT ? (
                  <select className="bg-transparent w-full  py-3 text-center rounded-lg focus:border-gray-400 border-gray-500 border  outline-none " value={boostNFTNumberForDeposit} onChange={(e) => {setBoostNFTNumberForDeposit(Number(e.target.value))}}>
                    <option className="bg-[#0e1238] py-2 bg-opacity-90" value={1}>Boost NFT 1</option>
                    <option className="bg-[#0e1238] py-2 bg-opacity-90" value={2}>Boost NFT 2</option>
                  </select>
                  )
                  :
                  (
                    <div className="flex">
              
                    <input
                      type="text"
                      value={depositAmount}
                      onChange={(e) => {
                        setDepositAmount(e.target.value);
                      }}
                      className="w-full text-white outline-none text-[20px] bg-transparent p-2 focus:border-gray-400 border-gray-500 border rounded-lg"
                    ></input>
                    {/* <button
                      className="m-auto focus:border-gray-400  hover:bg-opacity-30 active:bg-opacity-15 bg-white bg-opacity-20 rounded-lg  border-gray-500 border  ml-2 py-[5px] text-[15px] px-[12px]  w-[30%]"
                    >
                      max
                    </button> */}
                  </div>
                  )
                }
              
            <button
              className="mt-3 hover:bg-opacity-30 active:bg-opacity-15 bg-white bg-opacity-20 rounded-lg m-auto py-[10px] text-[20px] rouned-[10px] w-full"
              onClick={handleDeposit}
            >
              Stake now
            </button>
          </div>
        </div>

        <div className="md:w-1/2 w-full bg-white py-4 bg-opacity-[5%] mx-3 rounded-2xl  px-5">
          <div className="flex text-[27px] text-white justify-between text-center rounded-lg items-center ">
            <p className="bg-transparent w-[70%] py-3 text-center rounded-lg ">
              Unstaking
            </p>
            <Image
              src="/image/withdraw.png"
              alt="astronaut"
              width={100} height={100}
              className="w-[30%] h-auto ml-2 my-auto"
            />
          </div>
          <div className="mt-3 grid px-0">
              <div className="flex">
                {
                  isNFT ? (
                  <select className="bg-transparent w-full  py-3 text-center rounded-lg focus:border-gray-400 border-gray-500 border  outline-none " value={boostNFTNumber} onChange={(e) => {setBoostNFTNumber(Number(e.target.value))}}>
                    <option className="bg-[#0e1238] py-2 bg-opacity-90" value={1}>Boost NFT 1</option>
                    <option className="bg-[#0e1238] py-2 bg-opacity-90" value={2}>Boost NFT 2</option>
                  </select>
                  )
                  :
                  (
                    <p
                      className="text-[20px] p-2 rounded-lg "
                    >Normal token</p>
                  )
                }
                
              </div>
            <button
              className="mt-3 hover:bg-opacity-30 active:bg-opacity-15 bg-white bg-opacity-20 rounded-lg m-auto py-[10px] text-[20px] rouned-[10px] w-full"
              onClick={handleUnstake}
            >
              Unstake now
            </button>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default StakingForm
