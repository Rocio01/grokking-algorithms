def find_smallest(arr)
  smallest = arr[0]
  smallest_index = 0
 for i in (0...(arr.length)) do 
  if arr[i] < smallest
    smallest = arr[i]
    smallest_index = i
   end
 end
  return smallest_index
end

def selection_sort(arr)
  new_arr = []

  for i in (0...arr.length) do
    smallest = find_smallest(arr)
  new_arr << (arr.delete_at(smallest))
  end
return new_arr
end
arr = [3, 2, 1, 5, 7, 6, -7]

# print(selection_sort(arr))
