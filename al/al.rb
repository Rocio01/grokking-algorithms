
def plusMinus(arr)
  # Write your code here
  arr_length = arr.length.to_f
  positives = []
  negatives = []
  zeros = []
  
  arr.each do |i|
    if i.positive?
     positives << i     
    
    elsif i.negative?
    negatives << i

    else  
    zeros << i
    end

  end
  puts (positives.length.to_f / arr_length).round(6)
  puts (negatives.length.to_f / arr_length).round(6)
  puts (zeros.length.to_f / arr_length).round(6)
end

# puts(plusMinus(arr))

def staircase(n)
  # Write your code here
  i = 0
  x = n 
  hash = "#"
   while i < n 
    i += 1
    x -= 1
    puts(" " * x + hash * i)
   end

end
# puts(staircase(6))
