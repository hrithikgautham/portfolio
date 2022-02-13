---
title: "Proof of History"
date: 2022-02-11
draft: false
tags: [blockchain, crypto, solana, PoH]
---

In a centralised system, the order of transactions determine the correctness of the system. for example, in a banking ecosystem, if you were to transact multiple times at the same time. the bank has a record of all your transactions and knows their order. This helps them to determine whether you have [double spent](https://en.wikipedia.org/wiki/Double-spending). Since, there is only one server, it keeps track of the timestamp of each transactions.

If Alice has $5 in her bank account. And she sends money to Bob as following:

1. $2 @ 10:59:01
2. $3 @ 10:59:02
3. $1 @ 10:59:03

Bank server can make a simple timestamp check to determine the order and validity of these transactions. After first transaction, Alice has $3 left. After second transaction, Alice has $0 left. The third transaction will not happen, because Alice has $0 in her account. Hence, the third transaction will be rejected.

Same is true when Alice is sending

This looks like a simple procedure the banks go through everytime we make any transaction.

Now think how validity of transactions can be checked in decentralised banks(hypothetically speaking). If there are more than one server and all of those server has to agree on the order and validity of the transactions, how can it be done?

Each server generates transaction with timestamp according to its own local clock. If these servers are not synchronised, then the order of the transaction will be compromised.

<!--  -->

This is what happens in bitcoin. Since there is no sysnchronisation in the node clocks and any node can generate transactions, simple timestamp verification will not work. Because, the order of the transactions cannot be gauranteed.

That is why Bitcoin has to spend extra energy to verify transactions through Proof of Work(PoW).
