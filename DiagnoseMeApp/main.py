import json
import os
import openai
from Prompting import profile

from flask import Flask, jsonify, request, send_file, send_from_directory
'''
Version 3.0.0 don't forget to "pip install -r requirements.txt
python -c "import flask; print(flask.__version__)" to check flask version on local computer
'''

d, m = profile.first_message()
disease = [d]
message = [m]

print("Disease: ", disease[0])

guess = [""]
disease_state = [disease]
message_state = [message]

chat_session = [
    {
        "role" : "system",
        "content" : message[0]
    }
]

chat_session_test = [
    {
        "role" : "system",
        "content" : "Only give out 1 word answers. \n Do not reuse words"
    }
]


app = Flask(__name__)

@app.route("/")
def index():
    return send_file('web/index.html')

@app.route("/reset", methods=["GET"])
def reset():
    print("Resetting session")

    d, m = profile.first_message()
    disease[0] = d
    message[0] = m

    print("Disease: ", disease[0])

    # chat_session = [
    #     {
    #         "role" : "system",
    #         "content" : message[0]
    #     }
    # ]

    # chat_session.clear()
    # chat_session.append(
    #     {
    #         "role" : "system",
    #         "content" : message_state[0]
    #     }
    # )
    return json.dumps({"text" : "Chat session reset"})

@app.route("/disease", methods=["GET"])
def get_json():
    print("GET request received")

    with open('disease_distances.json') as f:
        disease_json = json.load(f)

    print("Guess: ", guess[0])

    distance = disease_json[disease[0]][guess[0]]

    if (distance <= 0.0):
        stars = 5
    elif (distance <= 2.5):
        stars = 4
    elif (distance <= 3.2):
        stars = 3
    elif (distance <= 4.0):
        stars = 2
    elif (distance <= 4.373):
        stars = 1
    else:
        stars = 0
    
    return json.dumps({"distance" : distance, "rating" : stars, "guess" : guess[0], "disease" : disease[0]})

@app.route("/guess", methods=["POST"])
def post_guess():
    print("POST request received")

    req_body = request.get_json()
    guess[0] = req_body['guess']
    print(f"User input: {guess[0]}")

    return json.dumps({"text" : "You guessed: " + guess[0]})


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

            print("Current Chat Session: " , chat_session)

            completion = client.chat.completions.create(
                model="gpt-3.5-turbo",
                temperature = 0.2,
                messages=chat_session,
                max_tokens=1000
            )

            print(completion)

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