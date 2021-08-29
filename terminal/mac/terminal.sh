#!/bin/bash
echo "Welcome to the CarrotScript Terminal vM.1.0. This is for Mac versions."
echo "In 3 seconds, you should be given the downloading process."
sleep 3
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
