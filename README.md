# AdminVault Transaction Decoder

A web application built with Next.js that allows users to decode transaction data for AdminVault smart contract interactions.

## Overview

This tool helps developers and users decode the raw transaction data from AdminVault contract interactions into human-readable format. It supports all functions defined in the AdminVault contract, including:

- Role management operations
- Pool management
- Fee configuration
- Action management

## Features

- 🔍 Decode raw transaction data (0x-prefixed hexadecimal)
- 📋 Display function name and parameters in a readable format
- 🎨 Dark/Light mode support
- 💻 Responsive design
- ⚡ Built with Turbopack for fast development

## Tech Stack

- Next.js 15.0
- React 19
- TypeScript
- Tailwind CSS
- ethers.js v6
- Turbopack

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/brava-admin-decoder.git
cd brava-admin-decoder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Navigate to the main page
2. Paste your transaction data (starting with 0x) into the text area
3. Click "Decode" button
4. View the decoded function name and parameters

## Project Structure
```
src/
├── app/ # Next.js app directory
│ ├── layout.tsx # Root layout component
│ ├── page.tsx # Main page component
│ └── globals.css # Global styles
├── components/ # React components
│ └── TransactionDecoder.tsx
├── constants/ # Contract ABIs and other constants
│ └── contracts.ts
└── utils/ # Utility functions
└── decoder.ts # Transaction decoding logic
```


## Development

- Use `npm run dev` to start the development server with Turbopack
- Use `npm run lint` to run ESLint
- Use `npm run build` to create a production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Smart contract interaction via [ethers.js](https://docs.ethers.org/v6/)