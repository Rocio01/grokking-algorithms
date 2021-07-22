def binary_search(arr, item) 
  min = 0
  max = (arr.length) - 1
  msm = "Number not founded"

 while min <= max do
      mid = (min + max) / 2
      guess = arr[mid]

      if guess < item 
          min += 1
      elsif guess == item
        return mid

      elsif guess > item
        max -= 1

    
    end
  
  end
  msm
end

my_arr = [4,6,5,7,8,9,3];

print(binary_search(my_arr, 4));
