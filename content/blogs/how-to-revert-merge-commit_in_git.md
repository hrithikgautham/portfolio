---
title: "How to revert merge commit in git?"
date: 2021-10-15
draft: false
tags: [java]
---

# How to revert merge commit in git?

lets say you are in ```master``` branch. and there is one more branch called ```test```.

![git history](/git_history.png)

In the above image, the lowercase letters indicates the commit hashes.

```master``` branch is pointing to commit ```d```, and the ```HEAD``` is pointing to ```master```.

So your current working directory has changes of commit ```d```.

Branch ```test``` is pointing to commit ```f```.

You are at ```master```(Since ```HEAD``` is pointing to ```master```) branch and you want to merge ```test``` branch with master. So, you would run the command: 

```git merge test```

![git history2](/git_history_2.png)

let's assume the merge was successful and there were no merge conflicts. Then the above command would create an merge commit, let's call this merge commit ```g```. Now master is pointing to ```g```.

Now you realise that this merge was a mistake and you want to revert the merge commit ```g```, and go back to commit ```d``` in ```master``` or ```f``` in ```test``` branch.

Before that, lets understand how simple revert works in git.

If a commit has a single parent, then it's easy to revert it. 

For eg consider this history: ``` a----b  master(HEAD)```

Now: ```git revert b```. Will revert commit ```b``` in ```master```.

``` a-----b-----c  master(HEAD)``` will be the state after reverting ```b```. commit ```c``` will be exactly same as commit ```a```.

***NOTE: Reverting creates new commit just like merging. But the new commit will be deprived of the reverted commit changes.*** 

Now this is simple revert. Here the git knows that the commit before ```b``` was commit ```a```. Therefore reverting ```b``` makes the working directory look same commit ```a```. Meaning the changes introduced by commit ```b``` is removed.

Still the commit ```b``` changes is part of git history, but after reverting the changes are same as commit ```a```.

Now, trying to revert ```master``` commit ```g```, is not that simple. ```g``` has 2 parents, ```d```(```master```) and ```f```(```test```).

While reverting ```g```, we have to tell git where to revert back. Revert back to ```d``` or revert bck to ```f```.

If you git log, you'll find something like this

```

commit g
Merge: d f
Author: hrithik <hrithiktg.com>

```

This telll us that, the commit ```g``` was formed by merging ```d``` and ```f```.

If you wish to revert back to ```d```, you can run the command: 

```git revert g -m 1```

Here ```1``` represents commit ```d```, and ```2``` represent commit ```f```.

Similarly, to revert to ```f``` commit, you can run:

```git revert g -m 2```

***THANK YOU!!***
