import http.server
import socketserver
import os

PORT = 8000

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        if path.endswith('.js'):
            return 'application/javascript'
        return super().guess_type(path)

web_dir = os.path.join(os.path.dirname(__file__))
os.chdir(web_dir)

Handler = MyHttpRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Server started at localhost:", PORT)
    httpd.serve_forever()
