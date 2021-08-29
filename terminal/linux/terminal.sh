#!/bin/bash
echo "Downloading Terminal..."
echo ""
wget https://carrotscript.github.io/terminal/carrotscriptterminal.py
echo ""
echo "Downloading Terminal Interface"
wget https://carrotscript.github.io/terminal/download.py
echo ""
echo "Creating Terminal..."
python3 download.py
echo "Opening terminal... (Run carrotscript to pen terminal)"
python3 carrotscriptterminal.py
source .bashrc
