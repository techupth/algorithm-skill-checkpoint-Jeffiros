/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
The big O of question-1 is a Linear search which is an O(n)
this method search the data one by one. So, smaller data do less steps than bigger ones. Relying on how much the data,
this method is considered the O(n). If we plot a graph from a count of loops occuring over the time this function is executed,
the graph turns out a linear pattern.
*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
In question-2, a Binary search is used which its Big O is an O(log(n)). 
Since the method is considered to search start with a middle value, if the result is not found, 
it will cut off half of the data which is not conform with the condition we assigned.
It will repeat the mentioned processes untill it find the answer then returns the result. 
If we use a total number of loops occuring in this method duting the execution of this function to plot a graph, 
the graph turns out a Logarithm pattern that is why this method is O(log(n)).  
*/

/* 
Which function is more efficient and why?
Answer:
For coding, it is better to use linear search since less lines and easier to understand.
For result, it the same.
For time complexity, the second one is better for less loops occuring in each execution.
So, in conclusion, Binary search is better though there will be more code lines than linear.
*/
