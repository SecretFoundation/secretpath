const abi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "VRF_routing_code_hash",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "VRF_routing_info",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "increaseTaskId",
    inputs: [{ name: "_newTaskId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "payoutBalance",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "postExecution",
    inputs: [
      { name: "_taskId", type: "uint256", internalType: "uint256" },
      { name: "_sourceNetwork", type: "string", internalType: "string" },
      {
        name: "_info",
        type: "tuple",
        internalType: "struct Gateway.PostExecutionInfo",
        components: [
          { name: "payload_hash", type: "bytes32", internalType: "bytes32" },
          { name: "packet_hash", type: "bytes32", internalType: "bytes32" },
          {
            name: "callback_address",
            type: "bytes20",
            internalType: "bytes20",
          },
          { name: "callback_selector", type: "bytes4", internalType: "bytes4" },
          {
            name: "callback_gas_limit",
            type: "bytes4",
            internalType: "bytes4",
          },
          { name: "packet_signature", type: "bytes", internalType: "bytes" },
          { name: "result", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "requestRandomness",
    inputs: [
      { name: "_numWords", type: "uint32", internalType: "uint32" },
      { name: "_callbackGasLimit", type: "uint32", internalType: "uint32" },
    ],
    outputs: [{ name: "requestId", type: "uint256", internalType: "uint256" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "secret_gateway_signer_address",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "send",
    inputs: [
      { name: "_payloadHash", type: "bytes32", internalType: "bytes32" },
      { name: "_userAddress", type: "address", internalType: "address" },
      { name: "_routingInfo", type: "string", internalType: "string" },
      {
        name: "_info",
        type: "tuple",
        internalType: "struct Gateway.ExecutionInfo",
        components: [
          { name: "user_key", type: "bytes", internalType: "bytes" },
          { name: "user_pubkey", type: "bytes", internalType: "bytes" },
          { name: "routing_code_hash", type: "string", internalType: "string" },
          {
            name: "task_destination_network",
            type: "string",
            internalType: "string",
          },
          { name: "handle", type: "string", internalType: "string" },
          { name: "nonce", type: "bytes12", internalType: "bytes12" },
          {
            name: "callback_gas_limit",
            type: "uint32",
            internalType: "uint32",
          },
          { name: "payload", type: "bytes", internalType: "bytes" },
          { name: "payload_signature", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    outputs: [{ name: "_taskId", type: "uint256", internalType: "uint256" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "taskId",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "task_destination_network",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tasks",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "payload_hash_reduced",
        type: "bytes31",
        internalType: "bytes31",
      },
      { name: "completed", type: "bool", internalType: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgradeHandler",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "FulfilledRandomWords",
    inputs: [
      {
        name: "requestId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TaskCompleted",
    inputs: [
      {
        name: "taskId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "callbackSuccessful",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "logNewTask",
    inputs: [
      {
        name: "task_id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "source_network",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "user_address",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "routing_info",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "payload_hash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "info",
        type: "tuple",
        indexed: false,
        internalType: "struct Gateway.ExecutionInfo",
        components: [
          { name: "user_key", type: "bytes", internalType: "bytes" },
          { name: "user_pubkey", type: "bytes", internalType: "bytes" },
          { name: "routing_code_hash", type: "string", internalType: "string" },
          {
            name: "task_destination_network",
            type: "string",
            internalType: "string",
          },
          { name: "handle", type: "string", internalType: "string" },
          { name: "nonce", type: "bytes12", internalType: "bytes12" },
          {
            name: "callback_gas_limit",
            type: "uint32",
            internalType: "uint32",
          },
          { name: "payload", type: "bytes", internalType: "bytes" },
          { name: "payload_signature", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "InvalidInitialization", inputs: [] },
  { type: "error", name: "NotInitializing", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
];

module.exports = abi;
