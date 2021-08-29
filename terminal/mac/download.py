
# This file creates the CarrotScript command line interface

import os
from os.path import expanduser

alias = 'alias carrotscript="python3 carrotscriptterminal.py"\n'
home = expanduser("~")
os.chdir(home)
f = open(".bash_profile", "a")
f.write(alias)
f.close()
