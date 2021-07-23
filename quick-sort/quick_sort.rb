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

def quick_sort(arr)

  if arr.length < 2
    return arr
  else  
    pivot = arr[0]
    less = arr.select {|n| n < pivot}
    greater = arr.select {|n| n > pivot}
  
    quick_sort(less) + [pivot] + quick_sort(greater);
  end


end

my_arr = [100, 2, 20, 4, 5, -10, -1000]



puts(quick_sort(my_arr))
 