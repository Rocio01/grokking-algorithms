
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

def miniMaxSum(arr)
  # Write your code here
  sort_arr = arr.sort
  sum = sort_arr.reduce(:+)
  maxSum = sum - sort_arr[0];
  miniSum = sum - sort_arr[sort_arr.length - 1];
  print(miniSum," ", maxSum)

end
arr = [3, 2, 1, 5, 7, 6, 7, ]
# puts(miniMaxSum(arr))

def birthdayCakeCandles(candles)
  # Write your code here
  result = 0
  for i in candles
     if i == candles.max
     result += 1
     end
    
  end
  result

end

def birthdayCakeCandles2(candles)
  # Write your code here
 maxElement = candles.max
#  puts(candles.count(maxElement))
    

end
# puts(birthdayCakeCandles2(arr))


def two_sum(nums, target)
    result = []
   
    (0..(nums.length - 1)).each do |i|
      w = i + 1 
     (w..(nums.length - 1)).each do |w|
        if nums[i] + nums[w] == target
          result.push(i,w)
        end
      end
    end
    return result
  end

# print(two_sum([2,7,11,15], 9))
def reverse(x)
  result = ((x).to_s.reverse).to_i
     if (result < -2147483648 || result > 2147483647)
        return 0
     end
     if x < 0
      return result * -1
     end
     if x === 0
      return 0
     end
  return result
end

print(reverse(214))