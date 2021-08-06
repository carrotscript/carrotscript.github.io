import os
import http.server
import socketserver
port_value = input("What port do you want to create your local server in: ")
port = int(port_value)
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", port), Handler) as httpd:
    print("Web Server is running at http://localhost:%s" %port)
    print("Close this tab to exit")
    print("Logs:") 
    print("") 
    httpd.serve_forever()