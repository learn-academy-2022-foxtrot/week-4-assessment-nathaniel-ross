# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# PROCESS:
# use def for a new method called odd_or_even
# use modulo num % 2 == 0 to determine if odd or even
# use string interpolation #{} on num for our return to grab the value and put it in our string "#{num} is odd/even"
# print new method with each num

def odd_or_even(num)
    if num % 2 == 0 then
        "#{num} is even"
    else "#{num} is odd"
    end
end

p odd_or_even(num1)
# output: "7 is odd"
p odd_or_even(num2)
# output: "42 is even"
p odd_or_even(num3)
# output: "221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# PROCESS:
# use def for a new method called vowel_eater calling str
# delete all vowels (including uppercase) using str.delete "aeiouAEIOU"
# surprisingly this is all I needed to make it work! (this feels like I'm missing something 🤔)

def vowel_eater str
    str.delete "aeiouAEIOU"
end

p vowel_eater(beatles_album1)
# output: "Rbbr Sl"
p vowel_eater(beatles_album2)
# output: "Sgt Pppr"
p vowel_eater(beatles_album3)
# output: "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# PROCESS
# use def for new method palin_string calling on (str)
# make if statement for if the string equals string.reverse it's a palindrome, as it'd be the same forward or backward.
# have it print using string interpolation that "#{} is a palindrome"
# create elsif for the opposite
# create else for catchall printing "error!"
# code is not working correctly because the inputs have the first letter capitalized which would make Racecar not the same as racecaR
# using downcase! we can permanantly make the strings all lowercased so we can properly see if they are the same forward and backward now
# now our return is undercased so now we can use .capitalize in our string interpolation to return a properly capitalized output.

def palin_string(str)
    if str.downcase! == str.reverse
        p "#{str.capitalize} is a palindrome"
    elsif 
        p "#{str.capitalize} is not a palindrome"
    else
        p "Error!"
    end
end

palin_string(palindrome_tester1)
# output: "Racecar is a palindrome"
palin_string(palindrome_tester2)
# output: "Learn is not a palindrome"
palin_string(palindrome_tester3)
# output: "Rotator is a palindrome"

nums = [1,2,3]

nums.each do |value|
    p value *5
end