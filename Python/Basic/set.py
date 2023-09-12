# set = unordered + unindexed + no duplicate value

utensils = {"fork", "spoon", "knife", "knife"}

for x in utensils:
    print(x) # print again agian => different order :v and only 1 knife

# utensils.add("napkin")
# utensils.remove("knife") # no knife left
# utensils.clear() 

# for x in utensils:
#     print(x)

dishes = {"bowl", "plate", "cup", "knife"}

# utensils.update(dishes)

# for x in utensils:
#     print(x)

# dinner_table = utensils.union(dishes)
# for x in dinner_table:
#     print(x)

print(utensils.difference(dishes)) # utensils has but dishes does not
print(dishes.difference(utensils))
print(utensils.intersection(dishes)) # both have