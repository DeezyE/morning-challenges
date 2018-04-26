# Dictionary
#
# You've done this one before. This time, complete the challenge
# without using a hash. Arrays only.
#
# Extend the Dictionary class.
#
# It should have three methods:
# .add_word(word, definition) -> Should store a word and definition
# .lookup(word) -> Should return a definition
# .total_words -> Should return the number of words stored
#
# Difficulty:
# 6/10
#
# Example:
# dictionary = Dictionary.new
# dictionary.add_word('ruby', 'A precious stone')
# dictionary.total_words -> should return 1
# dictionary.lookup('ruby') -> should return 'A precious stone'
#
# Check your solution by running the tests:
# ruby tests/26_dictionary_array_test.rb
#

class Dictionary
  def initialize
    @dictionary_array = []
  end

  def add_word(word, definition)
    @dictionary_array = @dictionary_array.push(word,definition)
  end

  def total_words
    @dictionary_array.length/2
  end

  def lookup(word)
    index = 0
    @dictionary_array.each do |item|
      if word == item
        return @dictionary_array[index+1]
      else
        index += 1
      end
    end
  end

end

# dictionary = Dictionary.new
#
#
# dictionary.add_word("car","It's a vehicle")
# dictionary.add_word("chicken","is burd")
# dictionary.add_word("gun","is happines")
# dictionary.add_word("sun","a star")
# dictionary.total_words
# dictionary.lookup("gun")
