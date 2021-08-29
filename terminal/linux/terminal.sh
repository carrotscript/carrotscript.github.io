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
source .bashrc
echo "Removing non-nessasary files..."
rm download.py
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo "Opening terminal... (Run carrotscript to open terminal)"
echo "Status: 200 OK"
python3 carrotscriptterminal.py
