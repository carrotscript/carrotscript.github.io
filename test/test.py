import cgi
form = cgi.FieldStorage()
searchterm =  form.getvalue('box')

f = open("demofile.txt", "a")
f.write("Great!!!")
f.close()
