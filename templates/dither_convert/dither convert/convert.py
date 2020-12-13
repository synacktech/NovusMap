from PIL import Image as pillow
import os, time

#list of all pixelcanvas colours
colours = {
    'white':      (255, 255, 255, 255),
    'light grey': (228, 228, 228, 255),
    'grey':       (136, 136, 136, 255),
    'black':      ( 34,  34,  34, 255),
    'pink':       (255, 167, 209, 255),
    'red':        (229,   0,   0, 255),
    'orange':     (229, 149,   0, 255),
    'brown':      (160, 106,  66, 255),
    'yellow':     (229, 217,   0, 255),
    'lime':       (148, 224,  68, 255),
    'green':      (  2, 190,   1, 255),
    'cyan':       (  0, 211, 221, 255),
    'light blue': (  0, 131, 199, 255),
    'blue':       (  0,   0, 234, 255),
    'violet':     (207, 110, 228, 255),
    'purple':     (130,   0, 128, 255)
}

#list of colours which clash when dithered
clashes = (
    ["white", "grey"], ["white", "black"], ["white", "red"], ["white", "brown"],
    ["white", "green"], ["white", "blue"], ["white", "purple"],
    ["light grey", "black"], ["light grey", "red"], ["light grey", "brown"],
    ["light grey", "green"], ["light grey", "blue"], ["light grey", "purple"],
    ["grey", "cyan"], ["grey", "blue"], ["grey", "purple"],
    ["black", "pink"], ["black", "orange"], ["black", "yellow"], ["black", "lime"], 
    ["black", "green"], ["black", "cyan"], ["black", "light blue"], ["black", "violet"],
    ["pink", "red"], ["pink", "brown"], ["pink", "green"], ["pink", "cyan"], ["pink", "light blue"], ["pink", "blue"],
    ["red", "orange"], ["red", "yellow"], ["red", "lime"], ["red", "green"], ["red", "cyan"], ["red", "light blue"],
    ["orange", "green"], ["orange", "cyan"], ["orange", "light blue"], ["orange", "blue"], ["orange", "purple"],
    ["brown", "yellow"], ["brown", "light green"], ["brown", "cyan"], ["brown", "blue"], ["brown", "purple"],
    ["yellow", "green"], ["yellow", "cyan"], ["yellow", "light blue"], ["yellow", "blue"], ["yellow", "violet"], ["yellow", "purple"],
    ["lime", "light blue"], ["lime", "blue"], ["lime", "violet"], ["lime", "purple"],
    ["green", "blue"], ["green", "violet"], ["green", "purple"],
    ["cyan", "blue"], ["cyan", "violet"], ["cyan", "purple"],
    ["light blue", "purple"]
)

#finds the average of two colours
def average(first,second):
    red = (first[0] + second[0]) / 2
    green = (first[1] + second[1]) / 2
    blue = (first[2] + second[2]) / 2
    return (red, green, blue)

#generates a list of possible dithers
dithList = []
for cOne in colours:
    for cTwo in colours:
        dither = average(colours[cOne],colours[cTwo])
        #omits dither if it's already in the list or it clashes
        if [dither,cTwo,cOne] in dithList or [cOne, cTwo] in clashes or [cTwo, cOne] in clashes:
            pass
        else:
            dithList.append([dither,cOne,cTwo])

#generates greyscale dithers from all possible ones
greyscaleDithers = []
for colour in dithList:
    if colour[0][0] == colour[0][1] and colour[0][1] == colour[0][2]:
        greyscaleDithers.append(colour)

#finds the distance between two colours
def distance(point, target):
    dx = point[0] - target[0]
    dy = point[1] - target[1]
    dz = point[2] - target[2]

    #uses pythagoras (getting the root isn't required)
    return dx**2 + dy**2 + dz**2

def closest(pixel, pallete):
    #haha, small D
    smallD = [9999999,{}]
    for colour in pallete:
        newD = distance(pixel, colour[0])
        
        if newD < smallD[0]:
            smallD = [newD,colour]
        #useful for white pixels
        if newD == 0:
            break
    
    return smallD[1]

def ditherGet(pixel, x, y):
    #determines if a pixel is grey, and chooses a pallete accordingly
    if pixel[0] == pixel[1] and pixel[1] == pixel[2]:
        colour = closest(pixel, greyscaleDithers)
    else:
        colour = closest(pixel, dithList)

    #returns colour[1] if it's an even amount of pixels from the origin and colour[2] if it's odd, creates a hash pattern
    return colour[((x+y) % 2) + 1]


#loads file
name = input("Please enter file name:\n")
filename = os.getcwd() + "/templates/" + name + ".png"
try:
    image = pillow.open(filename)
except:
    #provides error message
    print("Sorry, there was an error loading your file. Make sure you spelt it right and that it's a png file")
    time.sleep(10)
    quit()

#generates a new image
newImg = pillow.new("RGBA", image.size, "white")
pArray = newImg.load()
print("\nOkay, converting...")

#conversion process
for y in range(image.height):
    for x in range(image.width):
        #done for each pixel
        reduced = ditherGet(image.getpixel((x,y)), x, y)
        pArray[x,y] = colours[reduced]
    
    if y % 10 == 0:
        #gives update every ten rows
        print("Completed row", str(y), "out of", str(image.height),"("+str(round(y*100/image.height))+"%)")

print("Finished conversion")

while True:
    #checks if an image with that name already exists
    if (name+".png") in os.listdir(os.getcwd() + "/products/"):
        name = name + "-"
    else:
        newImg.save("products/"+name+".png","png")
        break

print("Saved file as",name+".png in products")
time.sleep(5)
quit()
