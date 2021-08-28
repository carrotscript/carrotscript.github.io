import sys, os

print("Welcome to the CarrotScript terminal.")
print("This terminal is experimental. Some features may not work.")
print('Type "help" for a list of commands')
command = input(">>> ")

if command == "help":
    print("Commands:")
    print("localhost")
    command = input(">>> ")
    
if command == "localhost":
    os.system("pip3 install carrotscript")
    print("Running...")
    from carrotscript import carrotscript
    