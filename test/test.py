import cgitb cgitb.enable()
start_response('200 OK', [('Content-Type', 'text/html')])

print("Hello world!")
