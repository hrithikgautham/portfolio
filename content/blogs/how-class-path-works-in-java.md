---
title: "How ClassPath Works in Java?"
date: 2021-09-26
draft: false
tags: [java]
---

**classpath** is an environment variable or a file which has all the dependancies related to a java project.

if you have a single file ```Main.java```:

```
class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
  }
} 
```

you can easily compile this in terminal using the commands:

```
javac Main.java
java Main
```

**javac** command compiles the code and creates a .class(bytecode) file. which can later be run using **java** command.

create a folder structure as shown:
```./main/Main.java```

```
package main;

class Main {
	
	public static void main(String[] args) {
		System.out.println("Hello World");
	}
}
```

```Main.java``` just prints ```Hello World!``` text.

now create a ```Person.java``` file in ```./main/classes/Person.java```:

```
package main.classes;

public class Person {
	public String name;
	public int age;

	public void printName() {
		System.out.println("my name is " + this.name);
	}
}
```

Use the ```Person.java``` class in Main.java:

```
package main;
import main.classes.Person;

class Main {
	
	public static void main(String[] args) {
		System.out.println("Hello World");
		
		Person person1 = new Person();
		person1.name = "John";
		person1.age = 28;

		person1.printName();
	}
}
```

Run the following command in terminal to create ```.class``` files in ```./bin``` folder.

```javac -d bin ./main/*.java  ```

this command will create a ./bin folder, which will contain all the .class files necessary to run the program.

now ./bin folder has 2 class files

**./bin/main/Main.class**
**./bin/main/classes/Person.class**

# Now lets run the program.

execute the following command in terminal to run the program:

```java -cp ./bin/ main/Main```

**-cp** flag is used to specifybthe classpath.
In this case it is *./bin/**. because we have the root of the project in **./bin** folder.

***Note: Your **-cp** or **CLASSPATH** should point to the folder which has your compiled root project folder.***

you can also run the program without **-cp**. for that you have to set **CLASSPATH** evironment variable to **./bin/**.

```
export CLASSPATH=./bin/
java main/Main
```

This technique can be used for and complex java projects. If you are using eclipse editor, the editor maintains **.classpath** file, which stores the path to the **.class** files.

***Thank You!***