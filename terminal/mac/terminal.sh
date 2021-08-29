#!/bin/bash
echo "Welcome to the CarrotScript Terminal vL.1.0. This is for Linux versions."
sleep 1
echo "Downloading Terminal..."
echo ""
wget https://carrotscript.github.io/terminal/linux/carrotscriptterminal.py
echo ""
echo "Downloading Terminal Interface"
wget https://carrotscript.github.io/terminal/mac/download.py
echo ""
echo "Creating Terminal..."
python3 download.py
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
