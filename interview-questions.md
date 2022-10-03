# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming (OOP), like the name implies is coding based around objects, everything is stored in side of objects. Functional programming focuses on procedure of functions.

Researched answer: In object-oriented programming, everything is structured around classes and objects. Classes are blueprints for how objects are built, and the data for these objects are prioritized over the operations. This is the opposite of functional programming where the functionality of operations are prioritized. 

2. What is the difference between a Float and an Integer in Ruby?

Your answer: In Ruby, Float and Integers are similar but if you use Float, you'll see the decimal place on your outputs. If you divide 3 / 4 as integers your return will be 0. However if you put a decimal on at least one integer to make it a Float, your return will be more accurate as it has a decimal value. If you were to do 3.0 / 4 as a Float your return will be 0.75

Researched answer: Float and Integer are two datatypes in Ruby that represent numbers. Integer assumes that you want a rounded value so it will round to the nearest whole number. Float is the more accurate datatype and will include decimals to give you the more accurate number when dealing with decimal places in your number.

3. Ruby has an implicit return. What does that mean?

Your answer: Implicit return is when you get a return without actually putting a "return" in your code. Ruby utilizes this to minimize code. In Ruby, for a function everything needs to be sandwiched inside of a 'def' and an 'end'. Normally you'd want to type return in the middle to get your return but Ruby assumes that and allows you to just type what you want to return in the middle without using the actual "return" in the code.

Researched answer: In Ruby, an implicit return is where you get a return without actually typing in 'return'. Ruby automatically returns the result of the last value evaluated. If you wanted to stop and return a specific value instead of just the last value evaluated, you would then use 'return' which would be an explicit return instead.

4. What is a block in Ruby?

Your answer: Blocks in ruby are functions enclosed in 'do' and 'end'  or enclosed in curly braces {}. Inside these blocks you can use a mulititude of methods for iteration.

Researched answer: Blocks in ruby are anonymous functions that can be defined in two ways: either enclosed in 'do' and 'end' tags or in curly braces {}. Inside of thse blocks you can multiple arguments which are defined between two pipes ||. 

1. How do you extract a value in a Ruby hash?

Your answer: You can extract a value in a Ruby hash by simply logging the hash name with the key name attributed to the value after a colon and in brackets, for instance if you had a hash set up for a burrito:
    hash burrito_info = {type: 'California', price: '$10'}
if you wanted to extract the value 'type' you would do:
    burrito_info[:type]
That would then extract 'California' from the hash 🌯 🌯

Researched answer: In Ruby, calling the hash name followed by a colon and a key name in brackets (hash[:keyname]) can be used to retrieve the value attributed to the keyname. However we can also use '.extract' to access specific data from hashes, and sub-hashes.

## Looking Ahead: Terms for Next Week

1. PostgreSQL: PostgreSQL is an open source object-relational database system. It is an extension of SQL (Structured Query Language) and is used to store large and complicated data safely. PostgreSQL has been around for a very long time, it was developed in 1986 at UC Berkeley and has become known as a very reliable and safe way to store data

2. Ruby on Rails: Ruby on Rails or simply Rails is an open source server-side web application framework designed on top of Ruby. Rails provides a pre-built structure to help make web development simpler. Some examples of applications created with Rails are Hulu, Airbnb, Kickstarter, and SoundCloud.

3. ORM: ORM or Object Relational Mapping is a technique used in Object Oriented Programming that lets you query and manipulate data inside a database library. It creates a virtual object database that can make it easier for the developer. Some examples of Object Relational Mappers used for Ruby are ActiveRecord and DataMapper

4. Active Record: Active Record is a an ORM as mentioned in the previous question. It's a layer of Ruby code that runs between the logic side of your code and the actual database.

5. Migrations: Migrations are tools used when defining changes to your applications database. For ruby it's useful in that you don't have to write your modifications code in SQL, as migrations will describe the changes using a Ruby DSL
