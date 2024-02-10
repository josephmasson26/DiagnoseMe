import json
import os

import google.generativeai as genai
from flask import Flask, jsonify, request, send_file, send_from_directory
'''
Version 3.0.0 don't forget to "pip install -r requirements.txt
python -c "import flask; print(flask.__version__)" to check flask version on local computer
'''

API_KEY = 'AIzaSyC-_7mZuoHuxGrWS4P750XVMHiuxUuPocU'

genai.configure(api_key=API_KEY)

app = Flask(__name__)

@app.route("/")
def index():
    return send_file('web/index.html')


@app.route("/", methods=["POST"])
def generate_api():
    if request.method == "POST":
        try:
            req_body = request.get_json()
            content = req_body.get("contents")
            model = genai.GenerativeModel(model_name=req_body.get("model"))
            response = model.generate_content(content, stream=True)
            print(f"Response from Gemini API: {response}")  # Add this line
            print(os.environ['API_KEY'])

            def stream():
                for chunk in response:
                    for part in chunk.parts:
                        print(f"Part from Gemini API: {part.text}")
                        yield 'data: %s\n\n' % json.dumps({ "text": part.text })

            return stream(), {'Content-Type': 'text/event-stream'}

        except Exception as e:
            return jsonify({ "error": str(e) })


@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('web', path)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)