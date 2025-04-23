/**
 * Voting DApp - Smart Contract Deployment Script
 * This script deploys the Voting contract to the specified network
 * with predefined candidates and a voting duration.
 */

async function main() {
  console.log("🚀 Starting deployment process...");

  try {
    // Get the contract factory
    const Voting = await ethers.getContractFactory("Voting");
    console.log("✅ Contract factory initialized");

    // Define deployment parameters
    const candidates = ["Abhishek", "Tony", "kirill", "Rashid"];
    const votingDurationMinutes = 90;
    
    console.log(`📋 Deploying with candidates: ${candidates.join(', ')}`);
    console.log(`⏱️ Voting duration: ${votingDurationMinutes} minutes`);

    // Deploy the contract
    console.log("⏳ Deploying contract...");
    const Voting_ = await Voting.deploy(candidates, votingDurationMinutes);
    
    // Wait for deployment to finish
    await Voting_.deployed();
    
    console.log(`✅ Contract successfully deployed to: ${Voting_.address}`);
    console.log("🔗 Transaction hash:", Voting_.deployTransaction.hash);

    // Log deployment details for verification
    const network = await ethers.provider.getNetwork();
    console.log(`🌐 Network: ${network.name} (chainId: ${network.chainId})`);
    
    return Voting_;
  } catch (error) {
    console.error("❌ Deployment failed:", error.message);
    throw error;
  }
}

// Execute deployment
main()
  .then(() => {
    console.log("✨ Deployment completed successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
