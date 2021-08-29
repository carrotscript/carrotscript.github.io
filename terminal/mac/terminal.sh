#!/bin/bash
echo "Welcome to the CarrotScript Terminal vM.1.0. This is for Mac versions."
echo "In 3 seconds, you should be given the downloading process."
sleep 3
echo "Downloading Terminal..."
echo ""
wget https://carrotscript.github.io/terminal/linux/carrotscriptterminal.py
sleep 1
echo ""
echo "Downloading Terminal Interface"
wget https://carrotscript.github.io/terminal/mac/download.py
sleep 1
echo ""
echo "Creating Terminal..."
python3 download.py
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
