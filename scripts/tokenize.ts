import { CohereClient} from 'cohere-ai'
const client = new CohereClient({token: process.env.COHERE_API_KEY})


const text ="'An async function that is called with the arguments from the tool call and produces a result. If not provided, the tool will not be executed automatically.',\n            },\n          ],\n        },\n      ],\n    },\n    {\n      name: 'toolChoice',\n      isOptional: true,\n      type: '\"auto\" | \"none\" | \"required\" | { \"type\": \"tool\", \"toolName\": string }',\n      description:\n        'The tool choice setting. It specifies how tools are selected for execution. The default is \"auto\". \"none\" disables tool execution. \"required\" requires tools to be executed. { \"type\": \"tool\", \"toolName\": string } specifies a specific tool to execute.',\n    },\n    {\n      name: 'maxTokens',\n      type: 'number',\n      isOptional: true,\n      description: 'Maximum number of tokens to generate.',\n    },\n    {\n      name: 'temperature',\n      type: 'number',\n      isOptional: true,\n      description:"

const response = await client.tokenize({
    model: 'command',
    text: text
})

console.log(`length: ${response.tokens.length}`)