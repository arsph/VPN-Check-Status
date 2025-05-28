# VPN Status Checker

A modern web application that allows users to check their VPN connection status, traffic usage, and expiration time. Built with React and styled using Tailwind CSS.

## Features

- 🔍 Real-time VPN status checking
- 📊 Traffic usage monitoring
- ⏰ Expiration time tracking
- 📱 Responsive design
- 🔄 Automatic status updates
- 🔒 Secure authentication

## Tech Stack

- React.js
- Axios for API requests
- Tailwind CSS for styling
- Heroicons for UI icons

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/arsph/VPN-Check-Status
cd v2check
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Usage

1. Open the application in your web browser
2. Paste your Vless link in the input field
3. Click the "Check" button to view your VPN status
4. View your:
   - User information
   - Remaining traffic
   - Expiration time
   - Connection status

## API Integration

The application integrates with a backend API to fetch VPN status information. Make sure to configure the following environment variables:

```env
VITE_API_URL=your_api_url
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
