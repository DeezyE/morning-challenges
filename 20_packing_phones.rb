
# 2. A business called “The Company” created a new phone called the companyPhone that needs packing to send away for sale. The Company needs to know how many phones in their pretty new packaging (rectangular prisms) that measures: with  width 5cm, length 7.4cm, and depth 4cm we can fit into a box that is 32cm wide,  43cm long and 22.1cm high.   (think about writing some pseudo code first that steps through all the commands you need to write. Keep it as simple as you can.

# pseudo
# take first side of small box and work out how many times it goes into first side of big box without partial leftovers. record that number
# divide 2nd side of box by 2nd side of small box. record number
# divide last side. record number
# add all numbers output the total result.

# repeat by testing other box side first. output numbers

# repeat by testing final side first. output numbers

prism = [5, 7.4, 4]
box = [32, 43, 22.1]

(0..2).each do |num|
rotatedPrism = prism.rotate(num)
  (0 ..2).each do |num|
    rotatedBox = box.rotate(num)
    result = (rotatedBox[0] / rotatedPrism[0]).floor*(rotatedBox[1] / rotatedPrism[1]).floor*(rotatedBox[2] / rotatedPrism[2]).floor
    puts ""
    puts "Placing the #{rotatedPrism[0]}cm side of the phone box against the #{rotatedBox[0]}cm side of the box will yield #{result} phones in the box"
  end
end



# side1 = (box[0] / prism[0]).floor
# side2 = (box[1] / prism[1]).floor
# side3 = (box[2] / prism[2]).floor
# total = side1 * side2 * side3
# puts "You can fit #{total} boxes if you stack the #{prism[0]}cm side of the prism along the #{box[0]}cm side of the box"
# puts""
# side1 = (box[0] / prism[1]).floor
# side2 = (box[1] / prism[2]).floor
# side3 = (box[2] / prism[0]).floor
# total = side1 * side2 * side3
# puts "You can fit #{total} boxes if you stack the #{prism[1]}cm side of the prism along the #{box[0]}cm side of the box"
# puts""
# side1 = (box[0] / prism[2]).floor
# side2 = (box[1] / prism[0]).floor
# side3 = (box[2] / prism[1]).floor
# total = side1 * side2 * side3
# puts "You can fit #{total} boxes if you stack the #{prism[2]}cm side of the prism along the #{box[0]}cm side of the box"
# puts""
