
# QR Code Generator using Node.js

The **QR Code Generator** is a Node.js project that allows users to generate QR codes from input strings, passwords, or website URLs. This project is built with Node.js, Express.js for the server, Joi for input validation, prompt-sync for user interaction, and various middlewares to enhance functionality. The generated QR codes can be scanned to reveal the input string or access the specified website.


## Features

- **QR Code Generation**: Create QR codes for input strings, passwords, or website URLs.

- **Input Validation**: Use Joi validation to ensure the input data is correct.

- **User Interaction**: Utilize prompt-sync for user-friendly input and interaction.

## Getting Started

To run the QR Code Generator project, follow these steps:

1. Clone or download this repository to your local machine.

2. Navigate to the project directory.

3. Install the required Node.js packages using npm:

   ```bash
   npm install
   ```

4. Start the Node.js server:

   ```bash
   npm start
   ```

5. Open a web browser and access the following URL:

   ```
   http://localhost:3000
   ```

6. Follow the on-screen instructions to generate QR codes from input strings, passwords, or website URLs.

## Usage

1. **QR Code Generation**:
   - Enter the input string, password, or website URL you want to encode into a QR code.
   - Choose the appropriate type: String, Password, or URL.
   - The QR code will be displayed on the web page.

2. **QR Code Scanning**:
   - Use any QR code scanning app or device to scan the generated QR code.
   - If it contains a string or password, the scanned content will be displayed.
   - If it's a website URL, the device will navigate to that URL.

## Project Structure

- `server.js`: The main Node.js server file using Express.js.
- `routes/`: Contains route handlers for generating QR codes.
- `middlewares/`: Includes custom middleware functions for input validation and QR code generation.
- `public/`: Stores HTML and client-side JavaScript files for user interaction.
- `qr_codes/`: Stores generated QR code images.

## Contributing

Contributions to this project are welcome. You can contribute by opening issues, providing feedback, or submitting pull requests to enhance the QR Code Generator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Enjoy using the QR Code Generator for your QR code generation needs! 📲🔍🚀
