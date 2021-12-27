---
title: "Understanding DEX(Decentralised Exchange)."
date: 2021-12-27
draft: false
tags: [blockchain, crypto, ethereum, dex]
---

## **Glossary:**
```
DEX => Decentralised Exchange.
CEX => Centralised exchange.
ETF => Exchange traded funds.
NSE => National Stock exchange.
BSE => Bombay stock exchange.
NYSE => Newyork stock exchange.
SEBI => Security Exchange board of India.
LP => Liquidity Provider.
SEC => Security exchange commission.
```

Let's first understand how a traditional exchanges work. If you look at how **NSE/BSE/NYSE/NASDAQ** work, they use "ORDER BOOK" model to match the orders. NSE, BSE etc, are centralised exchanges(CEX).

![order book](/orderbook.png)

* list out the bid prices from highest to lowest.
* list out the ask prices from lowest to highest.
* if the bid price and the ask price match, the asset is transfered from seller to bidder, and the money flow in the opposite direction.

<br>

## **Market Makers.**
One of the main problems with order book model is **order matching**. The buyer and seller has to agre on the same price in order to execute the transaction. This is where the **Market Makers** come in.

These are market participants other than Brokers. They arbitrage and try to match the orders, in return for an almost risk free return. By doing so, they provide **liquidity**.

For eg: if a seller is trying to sell the asset for $10, and the buyer is willing to buy at $11. Market maker can buy the asset for $10 from the seller and sell it at $11 to the buyer. By doing this, they make a nice $1 risk free profit. Similar process happens in ETF as well.

All these operations will be taken care by the exchanges, a user doesnt have to worry about these steps. The user click a button, and all the steps runs in background, after 2 days(**T+2** setlement in NSE/BSE), the asset and funds gets credited to the respective parties.

Problems:
* Exchange can behave maliciously. Thanks to SEBI/SEC, we dont have these problems, **yet**.
* You have to pay transaction fee and tax. Exchanges are not going to execute your transaction for free.
<br><br><br>

## **Enter the world of Decentralised Exchange aka DEX.**

Since, there are no intermediaries in a decentralised world, there cannot be "Market Makers" to provide liquidity.
<br><br>

## **Concept of liquidity pools.**

In DEX, there is no money used to trade. Instead, there are swaps. One asset is swapped for another. If you think about it, the same thing happens in centralised exchange(CEX) as well. Except, we are swapping money for the asset. 

Lets consider two assets, asset ```A```, and asset ```B```;<br>
**NA** => Quantity of asset **A**.<br>
**NB** => Quantity of asset **B**.<br>

Before the asset **A** is swapped, we have to make sure there is enough amount of asset **B**, in order to facilitate the trade viceversa. Hence, there must be a pool of asset **A** and asset **B**.

To create a new pool, someone has to inject the 2 tradable assets(asset **A**, asset **B**). These participants are called ```Liquidity Providers```. They make the trade posible by providing the pair of assets(in this case, asset **A** and asset B**) to the pool. They get compensated, for providing liquidity for the exchange.

Liquidity pools are basically used to provide liquidity. This is equivalent to number of share available to trade in **centralised exchange(CEX)**. In **CEX**, people like you and me try to buy and sell shares, which provides liquidity to the exchange. More the number of shares available to trade, higher the liquidity.

Without Liquidity provders, **DEX** would not be possible. They get compensated by the trading fees given by traders to swap tokens.

<br>

## **Automated Market Makers(AMM):**

Automated market makers are algorithmic market makers. Market makers are substituted by a piece of code. Popular **AMM** is ```Constant Product Market Maker``` used by **UNISWAP**.

**NA * NB = K**   .................. ***(1)*** 
<br>
Where , "**K**" is a constant.<br>

A **Liquidity Provider**, will inject same value of both the assets into the pool. The constant is decided by the amount of liquidity provided by the initial liquidity provider.

## Example

Lets say **John Doe** comes to the exchange to trade asset **A** for asset **B**. John has **10 units of asset A** with him. And he would like to trade them for **Asset B**.

Exchange rate between asset **A** and **B** => ```1A = 2B```<br>
first **LP** comes in and provides **50 A** and **100 B**.<br>

```50 * 100 = 5000```

Here, the constant is ```5000```.

Ideally John is increasing the supply of asset **A**, the value of asset **A** should drop. Similarly, asset **B** is swapped out of the exchange after the trade, the supply is reduced for asset **B**, so the value should increase for asset **B** after the trade.

Lets calculate, Before trade:<br>

Initially, **NA = 50; NB = 100**;

John is trading **10A**. So, Using formula **(1)**:<br>
```
=> NA * NB = CONSTANT
=> (50 + 10) * XB = 5000
=> 60 * XB = 5000
=> XB = 5000 / 60
=> XB = 83.33
```

where **XB** is the final Quantity of Asset **B** in the pool after the trade.

Initially there were **100 B**, but after the trade there are **83.33 B**. The difference in the final and initial Quantity of asset **B** is given to the trader. In other words, **(XB - NB)** is swapped for **10 A**.

```
=> (XB - NB) = 100B - 83.33B
=> 16.67B
```

Therefore, John gets **16.67B** for **10 A**. You might wonder **why not 20 B for 10 A, since 1A = 2B?** That's because, as more and more **B** is removed from the pool, the exchange charges more and more. That's how the Constant product market maker never runs out of assets. When the trader keeps trading for a particular asset more, the price of that asset increases exponentially. Because, there is less and less of that asset remaining in the pool.

![cpmm curve](/CPMM.png)

State of the pool after John's trade:
```
NA = 60
NB = 83.33
NA * NB = 5000
```
The new exchange rate is,
```
=> 1A = (83.33/60)B
=> 1A = 1.38B
```

As you can see the value of **A** is reduced and value of **B** has appreciated.

If John wants to trade 10 A for B again, then,
```
=> NA = 60, NB = 83.33
=> NA * NB = CONSTANT
=> (60 + 10) * XB = 5000
=> 70 * XB = 5000
=> XB = 5000 / 70
=> XB = 71.42
```
John gets **11.91 B(XB - NB)** for **10 A**. He got even lesser that what he got in his first trade.

State of the pool after John's second trade:<br>
```
NA = 70
NB = 71.42
NA * NB = 5000
```
The new exchange rate is,<br>
=> 1A = (71.42/70)B <br>
=> 1A = 1.02B<br>

Now, the value of **A** and **B** are almost the same.

## References:

* **[How do LIQUIDITY POOLS work? (Uniswap, Curve, Balancer) | DEFI Explained](https://www.youtube.com/watch?v=cizLhxSKrAc&t=554s)**.
* **[What is a Liquidity Pool in Crypto? (Animated)](https://www.youtube.com/watch?v=dVJzcFDo498&t=3s)**.
* **[How to Calculate the Price of Trade on Uniswap: AMM Math Explained](https://www.youtube.com/watch?v=Af3NxB7r-Ws)**.