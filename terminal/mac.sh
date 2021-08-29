#!/bin/bash
echo "Downloading Terminal..."
echo ""
wget https://carrotscript.github.io/terminal/carrotscriptterminal.py
echo ""
echo "Downloading Terminal Interface"
wget https://carrotscript.github.io/terminal/mac.py
echo ""
echo "Creating Terminal..."
python3 download.py
echo "Opening terminal... (Run carrotscript to pen terminal)"
carrotscript
source .bash_profile
