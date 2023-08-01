Voting DApp - README This repository contains a decentralized application (DApp) for conducting voting on the Ethereum blockchain. Users can create polls, vote for options, and view the poll results using this application.

Prerequisites Before running the Voting DApp, make sure you have the following software installed on your machine:

Node.js npm (Node Package Manager) or yarn Git Getting Started To get started with the Voting DApp, follow the steps below:

Step 1: Clone the Repository Clone this GitHub repository to your local machine using the following command

git clone https://github.com/your-username/voting-dapp.git Step 2: Install Dependencies Navigate to the project's root directory and install the necessary dependencies by running one of the following commands, depending on your preferred package manager:

Using npm:

cd voting-dapp npm install Using yarn:

cd voting-dapp yarn install Step 3: Compile Smart Contracts To compile the smart contracts, run the following command:

Using npm:

npx hardhat compile

Using yarn:

yarn hardhat compile

Step 4: Deploy Smart Contracts Before deploying the smart contracts, make sure you have the appropriate Ethereum network set up in the hardhat.config.js file. For this example, we'll assume you have a network named sepolia defined in the configuration.

To deploy the smart contracts to the specified network, use the following command:

Using npm:

npx hardhat run --network sepolia script/deploy.js

Using yarn:

yarn hardhat run --network sepolia script/deploy.js Step 5: Start the React App Now that the smart contracts are deployed and ready to use, you can start the React app:

Using npm: Copy code npm start Using yarn: yarn start This command will start the development server, and you should be able to access the Voting DApp in your browser at http://localhost:3000.
