# Welcome to CarrotScript!

CarrotScript is a online free programming language. Just copy and paste one line of code, and you are ready to use it. Here, we will learn about CarrotScript.

## Plugin

You can add the CarrotScript Library to your website with one line of code:

```
<head>
<!-- Add this line of code in the header: -->
<script src="https://carrotscript.github.io/plugin.js"></script>
</head>
```
Then it loads all the commands. Then you can use CarrotScript like this at the end of your ``` body ``` tag:

```
<script>
<!-- Type CarrotScript with JavaScript here-->
</script>
```

## Using CarrotScript

So lets see how we can use CarrotScript:

### Something simple

Lets start with something called a ``` post ``` tag. It is one of the most simple tags, and will post data.

For example, lets say I have a varible called ``` hi ```. We can post data using CarrotScript so we can retrive that data even after the user logs off the website. Lets see how we can do this.

```
var hi = "test";
post("Test", hi);
```

We have the JS variable, and use a CarrotScript command to post the data. The command's stuff in the perentesis are called *parameters*. They are seprated by commas. Parameter 1 tells the name of the data your storing, and the second is the value of the data your storing. Okay then, now open your HTML page. You just stored some data!

### The console

You may be familiar with the console. Open your HTML page, and right-click. Click "Inspect". You should see something like this:

<img width="1440" alt="Screen Shot 2021-07-27 at 1 39 33 PM" src="https://user-images.githubusercontent.com/87620301/127201778-1124b915-7209-48d1-915b-542ba27c8c34.png">

Click the button "console" at the top. You should see something like this:

<img width="554" alt="Screen Shot 2021-07-27 at 1 42 59 PM" src="https://user-images.githubusercontent.com/87620301/127202222-9de455d9-860e-4ab9-81fd-2934c3c8fdea.png">

This is good for debugging CarrotScript. It will give you warnings and errors with CarrotScript. 
