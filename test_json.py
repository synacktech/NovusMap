import json
import requests

# Checks for JSONDecode Errors, finds shit like missing brackets
def syntax_check():
    data = None
    with open("templates/!data.json") as json_file:
        data = json.loads(json_file.read())
    print(data)

# Checks that all keys match all image names
def content_check():
    data = None
    with open("templates/!data.json") as json_file:
        data = json.loads(json_file.read())
    templates = data["Templates"]

    for key, value in templates.items():
        image = value["name"]
        image = image[:-4]
        if key != image:
            raise AssertionError

# Checks that all the image paths given actually exist
def image_check():
    url = "https://raw.githubusercontent.com/synacktech/NovusMap/master/templates/"
    data = None
    with open("templates/!data.json") as json_file:
        data = json.loads(json_file.read())
    templates = data["Templates"]

    for key, value in templates.items():
        image_path = value["name"]
        image_path = f"{url}{image_path}"
        response = requests.get(image_path)
        if response.status_code != 200:
            raise AssertionError

def test_syntax():
    syntax_check()

def test_content():
    content_check()

def test_image():
    image_check()
