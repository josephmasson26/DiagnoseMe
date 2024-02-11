![logo](https://github.com/josephmasson26/DiagnoseMe/assets/122403630/78efe57d-1eae-4af5-ab3c-6671acb88eec)

# DiagnoseMe

DiagnoseMe is an interactive chatbot application designed to simulate patient interactions. It leverages the power of AI to generate responses based on a variety of medical conditions, providing a user-friendly interface for medical students to practice their diagnostic skills.

## Features

- **Interactive Chatbot:** Simulates patient interactions, providing a realistic environment for medical students to practice their diagnostic skills.
- **AI-Powered Responses:** Utilizes OpenAI's ChatGPT to generate responses based on a variety of medical conditions.
- **User-Friendly Interface:** Provides a smooth and intuitive user experience, making it easy for users to interact with the chatbot.

## Installation

### Frontend

1. Clone the repository to your local machine.
2. Navigate to the `DiagnoseMeApp` directory.
3. Run `npm install --force` to install the necessary dependencies.
4. Start the application with `npm start`.

### Backend

1. Install the necessary Python packages with `pip install openai flask`.
2. Start the server with `python3 main.py`.

## Usage

After starting the application, interact with the chatbot by typing your queries into the chat interface. The chatbot will respond with AI-generated responses based on the input.

## Built With

- **Flask:** A lightweight web server used to host the OpenAI API. Flask's simplicity and flexibility make it a great choice for serving our AI-generated responses.
- **Electron:** A framework for creating native applications with web technologies like JavaScript, HTML, and CSS. Electron is used to build the user interface of DiagnoseMe, providing a smooth and intuitive user experience.
- **OpenAI's ChatGPT:** An AI model developed by OpenAI. ChatGPT is used to generate the responses for our simulated patient, providing realistic and varied interactions for users.
- **JavaScript:** The primary programming language used in DiagnoseMe. JavaScript powers the interactive elements of the application, including the chatbot interface.
- **HTML/CSS:** Used to structure and style the user interface of DiagnoseMe.
- **npm:** A package manager for JavaScript, used to manage the project's dependencies.

## Note

While developing DiagnoseMe, we explored various AI models for generating responses. We initially considered using Google's Gemini but ultimately decided to use OpenAI's ChatGPT due to its superior performance in generating realistic and varied interactions.

## Acknowledgements

This project makes use of numberous React components. We thank the developers of these components and acknowledge their impact on this project.

[React Fade-In](https://www.npmjs.com/package/react-fade-in)

[Gooey Button](https://www.julienthibeaut.xyz/lab/button-gooey)

[React-Chatbot-Kit](https://www.npmjs.com/package/react-chatbot-kit)

[React-Stars](https://www.npmjs.com/package/react-stars)


## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
