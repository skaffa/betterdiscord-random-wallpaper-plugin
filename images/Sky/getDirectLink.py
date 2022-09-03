import os
import sys

for file in os.listdir('.'):
    if not file == "getDirectLink.py":
        print('\'https://github.com/skaffa/betterdiscord-random-wallpaper-plugin/raw/main/images/Aenami/' + file + '\',')
