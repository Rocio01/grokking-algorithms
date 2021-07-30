graph = {}

graph["you"] = %w(alice bob claire)
graph["bob"] = %w(anuj peggy)
graph["alice"] = %w(peggy)
graph["claire"] = %w(thom jonny)
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []



def person_is_seller(name)
   name[-1] === "m"
end


def search(name, g)
  search_queue = []
  search_queue.push(name)
  searched = []
 
  while search_queue.length 
    person = search_queue.shift()
    unless searched.include?(person)
      if person_is_seller(person)
        puts("#{person} is a mango seller")
        return true
      else  
        search_queue += g[person];
        searched.push(person)
      end
    end    
  end
  return false
end

puts(search("you", graph))

