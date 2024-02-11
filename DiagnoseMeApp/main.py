import json
import os
import openai
from Prompting import profile

import google.generativeai as genai
from flask import Flask, jsonify, request, send_file, send_from_directory
'''
Version 3.0.0 don't forget to "pip install -r requirements.txt
python -c "import flask; print(flask.__version__)" to check flask version on local computer
'''



chat_session = [
    {
        "role" : "system",
        "content" : profile.first_message()
    }
]

chat_session_test = [
    {
        "role" : "system",
        "content" : "Only give out 1 word answers. Do not reuse words"
    }
]


app = Flask(__name__)

@app.route("/")
def index():
    return send_file('web/index.html')


@app.route("/", methods=["POST"])
def generate_api():
    if request.method == "POST":
        try:

            req_body = request.get_json()
            user_input = req_body['contents'][0]['parts'][0]['text']
            print(f"User input: {user_input}")

            #### uncomment for testing #####
            # return json.dumps({"text" : chat_session_test[0]})

            # open ai set up

            client = openai.OpenAI(api_key=os.environ['OPENAI_API_KEY'])
            print("client set up success")

            chat_session.append(
                {
                    'role' : 'user',
                    'content' : user_input
                }
            )

            print(chat_session)

            completion = client.chat.completions.create(
                model="gpt-3.5-turbo",
                temperature = 0.2,
                messages=chat_session,
                max_tokens=50
            )

            print("output: ", completion.choices[0].message.content)

            output_text = completion.choices[0].message.content

            chat_session.append(
                {
                    'role' : 'assistant',
                    'content' : output_text
                }
            )

            return json.dumps({ "text": output_text })

            # def stream():
            #     for chunk in response:
            #         for part in chunk.parts:
            #             print(f"Part from Gemini API: {part.text}")
            #             yield 'data: %s\n\n' % json.dumps({ "text": part.text })

            # return stream(), {'Content-Type': 'text/event-stream'}

        except Exception as e:
            return jsonify({ "error": str(e) })


@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('web', path)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)