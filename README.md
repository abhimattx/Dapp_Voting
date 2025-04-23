# Voting DApp

A decentralized blockchain application built on Ethereum for secure and transparent voting. This DApp allows users to create polls, cast votes, and view real-time results through a React-based frontend connected to a Solidity smart contract.

---

## 🚀 Features

### Application Features:
- Create voting polls with multiple candidates.
- Conduct time-limited voting sessions.
- Ensure a secure one-vote-per-address mechanism.
- View real-time voting results and status tracking.

### Smart Contract Highlights:
- Candidate registration system.
- Voter validation to prevent duplicate voting.
- Configurable voting duration.
- Owner-only administrative functions.
- Real-time status and results retrieval.

---

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or later recommended)
- npm or yarn package manager
- [MetaMask](https://metamask.io/) browser extension
- Ethereum test network (Sepolia) ETH for deployment

---

## 📖 Getting Started

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/voting-dapp.git
cd voting-dapp
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory with the following variables:
```
API_URL=your_ethereum_node_url
Private_Key=your_wallet_private_key
```

### 4️⃣ Compile Smart Contracts

```bash
npx hardhat compile
```

### 5️⃣ Deploy to Test Network

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### 6️⃣ Start the React Frontend

```bash
npm start
# or 
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

- **`contracts`** - Solidity smart contracts
    - `Voting.sol` - Main voting contract
- **`scripts`** - Deployment and interaction scripts
- **`test`** - Contract test files

---

## 🧪 Testing

Run the test suite with:

```bash
npx hardhat test
```

---

## 🚢 Deployment

The `deploy.js` script deploys the Voting contract with initial candidates (`Abhishek`, `Tony`, `Kirill`, `Rashid`) and a 90-minute voting duration.

---

## 🛠 Technical Stack

- **Smart Contracts**: Solidity 0.8.19
- **Development Environment**: Hardhat
- **Testing Framework**: Mocha/Chai
- **Frontend**: React.js
- **Blockchain Interaction**: ethers.js
- **Network**: Ethereum Sepolia Testnet

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute, raise issues, or suggest improvements! 🎉
