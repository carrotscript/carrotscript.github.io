import sys, os

print("Welcome to the CarrotScript vBETA.1 terminal.")
print("This terminal is experimental. Some features may not work.")
print('Type "help" for a list of commands')
command = input(">>> ")

if command == "help":
    print("Commands:")
    print("localhost [Start a localhost:XXXX test development server]")
    print("exit() [Exit current session]")
    command = input(">>> ")
    
if command == "localhost":
    os.system("pip3 install carrotscript")
    print("Running...")
    from carrotscript import carrotscript
    
if command == "exit()":
    pass
    
else:
    print("404: Command not  found")
    command = input(">>> ")
