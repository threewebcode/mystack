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

## Sequencer

The sequencer is made of transaction pool, state manger, ethereum manager and event logger. It also has an address. The address is ethereum cryptography address. 

The sequencer loads the transactions from the transaction pool and sends these working in progress transactions to the worker. The worker creates a transaction tracker for this transaction and updates the transaction pool. After the transaction is processed, it will be deleted from the transaction pool. 

## Storage

The posgresql is used as the database layer. The reset operation means the data are deleted from the block tablle. The fork id and trusted batch can also be resetted. When the block is added, the block table is inserted by a new record. The block table stores the block data which are related to l1 blockchain. The exit root table is used to house the global exit root data. The forced batch table stores the forced batch records. The virtual batch table is filled with batch virtualization data. The verified batch table has the records that are verified by l1 blockchain. 

The execution in the zkevm is counted per transaction. This uses a specific data struture to represent it. The trusted reorganization has a reason at the specific batch number. The interval of fork id is measured by the batch span between the from batch number and to batch number. The block number and batch number are the two important factors during the state synchronization. The batch is a data structure and contains necessary data elements. It is identified by batch number with transactions and state. The batch context is provided when processing the batch. The batch can be closed with a reason. The state root is calculated and outputed when the receipt of batch process is received. The batch is called verified batch if it knows the aggregator address. The batch is virtualized when it knows the sequencer address. The from batch number and to batch number can form a sequence. 

The batch can be opened and stored in the database through state interface. The batch is sent to zkevm for processing. The process response is converted and closed by the state object. The batch is named forced batch when the forced batch number is finalized. After the transactions in the batch are processed, the necessary data are constructed to fill the header and block. This block is l2 block and persisted into the database. The whole process is displayed in the genesis process. 

## Transaction Pool

The properties in the configuration are used to control the transaction pool's behaviors. The transaction pool has its own storage interface definition. The storage interface provides all methods to manage all aspects of the transaction. The storage implemenation manages the transaction table of posgresql database. 
