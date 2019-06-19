# Regex or Regular Expressions
This is a Regular expressions review done by me using the code given by Alura for the Regex Course. None of the code inside js or css belongs to me neither the ind

Links

- [Regular Expressions](#regular-expressions)
- [Matching Simple number Sequence](#matching-simple-number)
- [Quantifiers](#quantifiers)
  - [Quantifiers with range of repetitions](#quantifiers-with-range-of-repetitions)
- [Classes](#classes)
- [Anchors](#anchors)
- [Groups](#groups)

Resources:
- <a href="https://regex101.com/">Regex101 (Regex online platform)</a>
- <a href="http://repl.it/languages/javascript">Repl with Javascript</a>

### Regular Expresssions

Regex or Regular expressions are strings that given a string and using a Regex Engine will try to match patterns in the target string, returing it's matches.
To create those patterns to be matched we need special characters called <strong>Meta Characters</strong>:

- "." : The dot means any character
- "*" : asterisk is related to the quantity of chars, zero, one or more times to be matched.
- "{}" : Braces are used to match specific characters to be matched
- \ : To match specific characters that can be meta-chars also.
- "?": To match zero or one time a specific character.

### Matching simple number sequence

Ok, let's start finding patterns, how about finding 3 numbers? For example the sequence of numbers: <p>123 456</p>

```
\d\d\d
```
This would match two results [123,456]. That's because \d matches digits from [0-9].


### Quantifiers
But what if the number were 123456789?
It would become unreadable very quickly to use \d to all 9 numbers. To cases like these we can use <strong>quantifiers</strong>.
<p>Quantifiers helps us matching repeated characters and it uses the following notation:</p>

```
\d{9}
```
Here we would match the previous string 123456789 but without repeating "\d" nine times. The same would follow for characters, the string <i>aaa</i> could be matched by:

```
a{3}
```

### Quantifiers with range of repetitions

Now we can match repeated patterns, but only when we know exactly how many repetitions will appear in the target string. How about <strong>when we can't say the exact number of repetitions</strong>?
<p>Then we can use the quantifiers with arguments. Let's say for example we want to match an ip address, which are four triplets of numbers: ddd.ddd.ddd.ddd</p>

```
\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}
```
Here we can se two numbers inside the quantifiers, I'll call them arguments.
The first argument is the minimum amount expected by the pattern and the second argument has the max number of repetitions expect by the param.

### Quantifiers with zero or one match
There is also a situation when we can have a one repetition or not have it all. To these situations we can use the <i>?</i> meta-character.
Imagine we can have 3 triplets of numbers separated <strong>or not</strong> by dots, something like this: "ddd?.ddd?.ddd".
<p>Here is how we could match this pattern:</p>

```
/d{3}\.?\d{3}\.?\d{3}
```

<p>With this regex we can match either if we have the dots separating the triplets of numbers.</p>

### Classes

Ok but how we would handle the previous example if the separating character could be something else than a dot, maybe a comma?
In this situation when we have a range of characters to be handled in a part of our string we can use a what is called as <strong>classes</strong> in Regex.
<p>To define clases we use brackets to define characters we want to match. <strong>Remember</strong>: Charaters inside the brackets are no longer meta-characters but literally the characters.
<p>The pattern that could match either dots or commas when separting the previous example would be like.</p>

```
/d{3}[.,]?\d{3}[,.]?\d{3}
```

Inside the brackets we see the set of chars that we expect to receive. Classes helps us to make regex expressions more readable for sure.

### Anchors 
Here is a list of anchors: 

- \b word boundary, match something between words.
- ^ beginning, match expressions in the beginning.
- $ ending, match expressions in the end of your target.
- \B non boundary, match everything not in the beginning neither in the end of words.

Anchors are used widely in regex because patterns usually that usually require it have a specific part of the pattern to be matched. Check this html anchor tag:

```
<a href="http://www.google.com.br">LINK</a>
```

To match it's closing tag correctly we must use it the ^ and $ anchors:

```
^<a .+?(?=>)>\w+<\/a>$
```
With this expression we say that an anchor starts with "<a href" then we have multiple chars after it, stopping when finding a ">" getting only word chars as the link name and closing with a "<\/a>$" remembering that the \/ is to scape the the forward slash.

### Groups
When finding patterns, we usually have parts of our target that have a specific meaning, and having them separately is usally useful.

([\w\s]+)\|(\d\d\/\d\d\/\d\d\d\d)\|([\w\s]+)\|(\d+)\|(\d{5}-\d{3})\|([\w\s]+)

### Not selecting groups

### Dealing with greedy quantifiers

### Backreference

### Uses of Regex in JS functions