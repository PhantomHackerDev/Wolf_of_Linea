'use client';

import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

import Notification from "../Notification";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

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
  "0x8817bD2F86541673DaC4F8AA83d66684515e897c";
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

      alert("YES");
            
      try {
        let hash = await writeContractAsync({
          abi: STAKING_CONTRACT_ABI,
          address: STAKING_CONTRACT_ADDRESS,
          functionName: "stake",
          args: [BigInt(depositAmount)*BigInt(10**WOLF_TOKEN_DECIMAL), BigInt(stakingDuration)],
        });
        toast(
          <Notification
            type={"success"}
            msg={`Successfully Purchased.\n ${hash}`}
          />
        );
      } catch (error: any) {
        toast(
          <Notification type={"fails"} msg={`${error.message || error}`} />
        );
      }
    };

  return (
    <>
      <div className="flex flex-row justify-between">
        <p className="text-gray-300 text-4xl mb-4 md:mb-0">Staking</p>
        <button
          onClick={() => open()}
          className="bg-white bg-opacity-15 px-3 h-[53px] tracking-wider font-shareTech mx-auto text-[20px]   rounded-lg font-normal text-white"
        >
          Connect
        </button>
      </div>
      <div className="flex md:flex-row flex-col py-5 space-y-3">
        <div className="md:w-1/2 w-full bg-white pt-4 bg-opacity-[5%] mx-3 rounded-2xl  px-5 py-0">
          <div className="flex text-[27px] text-white justify-between text-center rounded-lg items-center ">
            <select className="bg-transparent w-[70%] py-3 text-center rounded-lg focus:border-gray-400 border-gray-500 border  outline-none " value={stakingDuration} onChange={(e) => {setStakingDuration(Number(e.target.value))}}>
              <option className="bg-[#0e1238] py-2 bg-opacity-90" value={1}>1  month</option>
              <option className="bg-[#0e1238] py-2 bg-opacity-90" value={3}>3 month</option>
              <option className="bg-[#0e1238] py-2 bg-opacity-90" value={6}>Half year</option>
              <option className="bg-[#0e1238] py-2 bg-opacity-90" value={12}>One year</option>
            </select>
            <Image
              src="/image/deposit.png"
              alt="astronaut"
              width={100} height={100}
              className="w-[30%] h-auto ml-2 my-auto"
            />
          </div>
          <div className="mt-3 grid px-0">
              <div className="flex">
                <input
                  type="text"
                  value={depositAmount}
                  onChange={(e) => {
                    setDepositAmount(e.target.value);
                  }}
                  className="w-[70%] text-white outline-none text-[20px] bg-transparent p-2 focus:border-gray-400 border-gray-500 border rounded-lg"
                ></input>
                <button
                  className="m-auto focus:border-gray-400  hover:bg-opacity-30 active:bg-opacity-15 bg-white bg-opacity-20 rounded-lg  border-gray-500 border  ml-2 py-[5px] text-[15px] px-[12px]  w-[30%]"
                >
                  max
                </button>
              </div>
            <button
              className="mt-3 hover:bg-opacity-30 active:bg-opacity-15 bg-white bg-opacity-20 rounded-lg m-auto py-[10px] text-[20px] rouned-[10px] w-full"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full mx-3 rounded-2xl  px-5 py-2 h-[250px] bg-[#272A2F]">
          <div className="flex text-[27px] text-white justify-between text-center rounded-lg items-center ">
            <div className="font-mono">Unstake</div>
            <Image
              src="/image/withdraw.png"
              alt="astronaut"
              width={100} height={100}
              className="w-[30%] h-auto ml-2 my-auto"
            />
          </div>
          <div className="mt-3 grid px-0">
            <div className="flex">
              <input
                type="text"
                value={withdrawAmount}
                onChange={(e) => {
                  setWithdrawAmount(e.target.value);
                }}
                className="w-full text-white outline-none text-[20px] bg-transparent p-2 border-white border rounded-lg"
              ></input>
              <button
                  className="m-auto ml-2 py-[5px] text-[15px] px-[12px] rounded-[20px] w-[15%]"
                >
                  max
                </button>
            </div>
            <button
              className="mt-3 hover:bg-opacity-30 active:bg-opacity-15 bg-gray-600 bg-opacity-20 rounded-lg m-auto py-[10px] text-[20px] rouned-[10px] w-full"
              onClick={() => {
                
              }}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} style={{ paddingTop: "90px" }} />
    </>
  )
}

export default StakingForm