def sum(arr)
  if arr.empty?
    return 0 
  else
     arr[0] + sum(arr[1..-1])
  end
end

def items_list_count(arr)
  if arr.empty?
    return 0
  else
    1 + items_list_count(arr[1..-1])
  end
end

def max_number(arr)
  return nil if arr.empty?
  if arr.length === 1
    return arr[0]
  else 
     max = max_number(arr[1..-1])
     if arr[0] > max
      return arr[0]
     else
      return max
     end

  end

end

my_arr = [1, 2, 3, 4, 5]
empty_arr = []

puts(sum(my_arr))
puts(items_list_count(my_arr))
puts(max_number(my_arr))
puts(max_number(empty_arr))