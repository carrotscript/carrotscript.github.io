
# This file creates the CarrotScript command line interface

import os


alias = 'alias carrotscript="python3 carrotscriptterminal.py"\n'
homefolder = os.path.expanduser('~')
bashrc = os.path.abspath('%s/.bash_profile' % homefolder)

with open(bashrc, 'r') as f:
  lines = f.readlines()
  if alias not in lines:
    out = open(bash_profile, 'a')
    out.write(alias)
    out.close()
