#!/bin/bash
echo "Welcome to the CarrotScript Terminal vL.1.0. This is for Linux versions."
echo "In 3 seconds, you should be given the downloadin process."
sleep 3
echo "Downloading Terminal..."
echo ""
wget https://carrotscript.github.io/terminal/linux/carrotscriptterminal.py
sleep 1
echo ""
echo "Downloading Terminal Interface"
wget https://carrotscript.github.io/terminal/linux/download.py
sleep 1
echo ""
echo "Creating Terminal..."
python3 download.py
sleep 1
source .bashrc
sleep 1
echo "Removing non-nessasary files..."
rm download.py
sleep 1
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo "Opening terminal... (Run carrotscript to open terminal)"
sleep 1
python3 carrotscriptterminal.py
