// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Staking {
    mapping(address => uint256) public stakes;
    mapping(address => uint256) public rewardBalance;

    uint256 public totalStakes;
    uint256 public rewardRate = 100; // Simplified reward rate

    event Staked(address indexed user, uint256 amount, uint256 total);
    event Withdrawn(address indexed user, uint256 amount, uint256 total);
    event RewardPaid(address indexed user, uint256 reward);

    function stake() external payable {
        require(msg.value > 0, "Cannot stake 0");
        stakes[msg.sender] += msg.value;
        totalStakes += msg.value;
        emit Staked(msg.sender, msg.value, stakes[msg.sender]);
    }

    function withdraw(uint256 _amount) external {
        require(stakes[msg.sender] >= _amount, "Insufficient stake");
        stakes[msg.sender] -= _amount;
        totalStakes -= _amount;
        payable(msg.sender).transfer(_amount);
        emit Withdrawn(msg.sender, _amount, stakes[msg.sender]);
    }

    function claimReward() external {
        uint256 reward = stakes[msg.sender] * rewardRate / 100;
        require(reward > 0, "No reward available");
        rewardBalance[msg.sender] += reward;
        emit RewardPaid(msg.sender, reward);
    }
}
