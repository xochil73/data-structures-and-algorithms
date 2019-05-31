![CF](http://i.imgur.com/7v5ASc8.png) Code Challenge 16- Fizz-Buzz-Tree
==============================================

## Authors: Xochil Squaglia


### Links and Resources
* [repo](https://github.com/xochil73/data-structures-and-algorithms/blob/master/code-challenges/401/fizzbuzz_tree/README.md)

### Challenge
* Take in a tree as an argument and with vanilla javaScript, determine whether or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
  -If the value is divisible by 3, replace the value with “Fizz”
  -If the value is divisible by 5, replace the value with “Buzz”
  -If the value is divisible by 3 and 5, replace the value with “FizzBuzz”

### Approach
* Use recursion to traverse the tree root, left, right.  If the value is divisible by 3, return fizz, if it's divisible by 5, return buzz and if it's divisible by 3 & 5, return fizzbuzz 

### Solution
![whiteboard](assets/fizz_buzz.jpg)



### Big O
* 0(n)
* 0(H)