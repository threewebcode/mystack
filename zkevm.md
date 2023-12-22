# Polygon zkEVM

## Ethererum Manager

What is the trusted batch? What is the global exit root? The state and pool can be reorganized when the state does not match. The trusted batch may be approved by the prover. 

what is the sequence? From the data structure's perspective, it includes state, batch data, batch number and timestamp. This is managed by the smart contract.

The global exit root is managed by the specific contract on the l1 blockchain. This value can be retrieved from the smart contract. 

The configuration is defined to represent the values used for l1 blockchain. The gas statetion and explorer scan are deserved for attention. All possible errors are created to describe the bad situation of interacting with l1 blockchain. A few smart contracts are deployed on the l1 blockchain. The function list are declared as variables which are the function signatures. 

What is the event order? To some extent, it is equal to the event type. There are 3 main smart contracts controlled by the ethereum manager. The client is constructed to operate with l1 blockchain. The client has the smart contract elements. The events are queried and processed to get the data from the l1 blockchain. 

As for the data from l1 blockchain, most of data comes from the smart ciontract's states while some are from the system level. 

## Ethereum Transaction Manager

The settings of ethereum transaction manager are fetched from the configuration object. Each field of the configuration structure is one item in the setting. The aspects of transaction manager are composed of transaction onchain operation, transaction storage operation and transaction state operation. These three facets are declared as interface type. The actual job of transaction manager is done by the client structure type. The client type depends on the ethereum manager instance, storage instance and state manager instance. When the transaction is added, the transaction is persisted into database firstly. The transaction from the request becomes the monitored transactin. The monitored transaction can be filtered by the conditions of id, ownder and status. 
