(1) Difference between Dom Selector  
- getElementById : It take a id name as a parameter and return exactly on element with that id .
- getElementsByClassName : It take a class name as a parameter and returns a HtmlCollection of element belong to that class 
- querySelector : We can use Css selector as parament and it return the first matched element belong to the Selector 
- querySelectorAll : We can use Css selector as parament and it return a Nodelist of all matched parameter 

All this are basic Dom selector and we use them according to our need .

(2) Creating and Inserting new Element in DOM

- Crating new Element : To create a New element use use ```createElement('tagname')``` . 
- Insert new Element : To insert a newly crated element first we get the parent element(where we wanna insert) then ```parent.appendChild(newChild)```
: to insert at last 
or ```parent.prepend(newChild)``` : to insert at first .

(3) Event Bubbling : When an event occur(like we add event Listener and it detect mouse click,mouse enter or mouse leave etc) first it occur on the target element then then it started to go up to the Dom(propogate), like ```Child->Parent->Parent of Parent```
and go on and crate a DOM tree till root . 

(4)
Event Delegation : Instent of adding event listener for every child we can add event listener to parent element and then we can use `e.target` to get the exact child which cause the event . 
  - it need less event listener so less memory
  - It will still work even if a new Child add to the parent ELement . 

(5)
preventDefault() : Its stop the deafault action of elements . For example if we have form and we add a button inside it , Then everytime we click that button it will try to submit the form and that cause refresh the page . To prevent this deafault behavior we use preventDeafult ; 

stopPropagation() : When an event occurfirst it occur on the target element then then it started to go up to the Dom . To stop this bubbling up to the parent or upward elements we use stopPropagation .
