# The Company is currently wanting to produce another 500 units of product sku 276834, which is a lamp with a circular base. Unfortunately, a staff member forgot to order the plywood to make the base and didn’t account for the cost of this wood.
# Plywood can be purchased in 1200 X 2400 mm sheets at a cost of $28.47 per sheet.
# Each lamp base is a circle with a diameter of 320mm.
# What is the total cost of ordering the plywood for the bases, and how much plywood is wasted?
#
# find square of circle 320mm
# ply w / 320
# ply h / 320
# leftover recorded
# number of bases per sheet
# 500 / number of sheets
#
# qty cost boardH boardW wastagePerCircle(21.5%) areaOfBoard

qty = 500
boardCost = 28.47
boardH = 2400
boardW = 1200
circleDiam = 320

def circlesPerBoard (qty,boardCost,boardH,boardW, circleDiam)
  circlesPerBoard = ((boardW / circleDiam).floor)*((boardH / circleDiam).floor)
  puts circlesPerBoard
end
