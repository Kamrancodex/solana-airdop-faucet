# Solana Airdrop Web App

![Solana Airdrop Web App](/thumbnail.png)

A simple web-based application that allows users to request a 2 SOL airdrop on the Solana Devnet by entering their wallet address. Built using React, Tailwind CSS, and Solana's Web3.js.

---

## Features

- **Solana Devnet Airdrop**: Users can input a Solana wallet address and receive 2 SOL on the Devnet for testing purposes.
- **Real-time Feedback**: Provides real-time feedback to users on success or failure.
- **Minimalist UI**: A modern, gradient-styled UI with grid layout and responsive design.
- **Error Handling**: Handles invalid addresses and network errors gracefully.
- **Airdrop Confirmation**: Verifies the airdrop on the blockchain before informing the user of success.

---

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Blockchain**: Solana Web3.js
- **Network**: Solana Devnet

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone <your-github-repo-link>
   cd <your-project-name>
   ```

2. **Install the dependencies**:

   ```bash
   npm install
   ```

3. **Run the app locally**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## How It Works

- **User Input**: The user enters a valid Solana wallet address.
- **Airdrop Request**: Upon clicking "Request Airdrop", the app connects to the Solana Devnet and sends 2 SOL to the specified address.
- **Success/Failure Notification**: The app provides real-time feedback via a success modal or error message.

---

## Screenshot

![Solana Airdrop Web App Screenshot](image-url)

---

## Contributions

Contributions are welcome! Feel free to fork the repository and submit pull requests for enhancements or bug fixes.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [Solana Web3.js Documentation](https://solana-labs.github.io/solana-web3.js/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
