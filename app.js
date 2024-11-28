// chaper 25

// // q1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName.Greet the user using his full name.

// // taking user inputs for first and last name

// var firstName = prompt("what is your first name?");
// var lastName = prompt("what is your last name?");

// // merging these two strings

// var fullName = firstName + lastName;

// // greeting the user using his full name.

// alert("Welcome to our website " + fullName)

// // 2. Write a program to take a user input about his favorite mobile phone model.Find and display the length of user input in your browser

// // taking user input about his fav mobile
// var favMobile = prompt("What is your favorite mobile phone model?")

// // finding the length of user input
// var userinputlength = favMobile.length;

// // // displaying the length of user input
// alert("My fav mobile phone model is : " + favMobile + " The length of user input is " + userinputlength)

// // 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

// var word = "Pakistani"

// // finding the index of letter "n"  in word

// var index = word.indexOf("n")

// // displaying the result

// alert(
//     "word : " + word +
//     " Index of word 'n' is  " + indexOfLetterN
// )

// // 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var word = "Hello World";

// // finding the last index of letter "l" in word

// var lastIndexOf = word.lastIndexOf("l");

// // displaying the result

// alert("Word : " + word + " last index of letter 'l' is  " + lastIndexOf);

// // 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var word = "pakistani";

// // finding and displaying the character at 3rd index

// for (var i = 0; i < word.length; i++) {
//     alert("Word : " + word + " character at 3rd index is  " + word[3])
// }

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = 'hyderabad'
// var newCity = city.replace('hyder','islam')
// document.write(newCity)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message = 'Ali and Sami are best friends. They play cricket and football together';
// var newMessage = message.replace(/and/g , '&')
// document.write(newMessage)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var str = '472'
// var num = +(str)

// document.write('type of str'+typeof(str))
// document.write('type of num'+typeof(num))

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var user = prompt('write any thing')

// var capUser = user.toUpperCase()

// document.write(capUser)

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var a = 'javascript'
// var b = a.slice(0,1).toUpperCase()
// var c = a.slice(1,999)
// var f = b+c
// console.log(f);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// var userName=prompt('write the user name')
// if(userName.includes('!')||userName.includes('@')||userName.includes('$')||userName.includes('-')||userName.includes('_')||userName.includes('#')||userName.includes('&')||userName.includes('*')||userName.includes('/')||userName.includes('~')||userName.includes('`')){
//     alert('Write a valid username')
// }
// else{
//     alert('username accepted')
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

// var  A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// document.write(A)
// var b = prompt('search any product').toLocaleLowerCase()
// if (A.includes(b)){
//     alert("the item is available")
// }else{
//     alert('item is not available')
// }

// 16. Write a program to convert the following string to an
// array using string split method.

// var university = 'University of Karachi';
// for (var i = 0; i < university.length; i++) {
//     document.write(university[i]+'<br/>')
// }

// 17. Write a program to display the last character of a user
// input.

// var a = 'pakistan'
// var b = a.charAt(a.length-1)
// document.write(b)

// chapter26-30

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a = 3.5232
// var b = Math.round(a)
// var c = Math.floor(a)
// var d = Math.ceil(a)
// document.write(`value = ${a} <br/> round value = ${b} <br/> floor value = ${c} <br/> ceil value = ${d}`)

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a = +prompt("write any negative decimal number")
// var b = Math.round(a)
// var c = Math.floor(a)
// var d = Math.ceil(a)
// document.write(`value = ${a} <br/> round value = ${b} <br/> floor value = ${c} <br/> ceil value = ${d}`)

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var value = Math.random()*6
// value = Math.round(value)

// document.write(`dice value = ${value}`)

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var a = Math.random()*2
// a= Math.round(a)

// if(a==1){
//     document.write (`head = ${a}`)
// }else if (a==2){
//     document.write(`tails = ${a} `)
// }

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var a = Math.random()*100
// a= Math.round(a)
// document.write(`Random number from 1 to 100 is ${a}`)

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var a = Math.random()*10
// a= Math.round(a)
// var b = prompt("write the secret number from 1 to 10")
// if (b==a){
//     alert("congratulations")
// }else{
//     alert("better luck next time   ")
// }
