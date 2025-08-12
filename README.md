# React Chat UI

A modern, responsive chat interface built with React.js and Tailwind CSS, featuring a clean design with message bubbles, contact lists, and real-time messaging capabilities.

## 🚀 Features

- 💬 **Modern Chat Interface** - Clean and intuitive messaging experience
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Beautiful UI Components** - Custom-designed with Tailwind CSS
- 👥 **Contact Management** - Organized contact list with search functionality
- 🔍 **Smart Search** - Find contacts and messages quickly
- 📞 **Call History** - Track incoming, outgoing, and missed calls
- 🎯 **Filter Options** - Filter conversations by type (All, Missed, Incoming)
- ⚡ **Fast Performance** - Built with Vite for optimal performance

## 📸 Screenshots

### Main Chat Interface
![Chat Interface](./assets/chat-interface.png)

### Contact List
![Contact List](./assets/contact-list.png)

### Mobile Responsive View
![Mobile View](./assets/mobile-view.png)

## 🛠️ Built With

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **React Icons** - Icon library
- **PostCSS** - CSS processing tool

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/razabhatti546/octet-ChatUI.git
   cd octet-ChatUI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
src/
├── components/
│   ├── LeftSidebar.jsx      # Contact list and navigation
│   ├── RightSidebar.jsx     # Contact directory
│   ├── ChatHeader.jsx       # Chat header with contact info
│   ├── ChatMessages.jsx     # Message display area
│   ├── MessageBubble.jsx    # Individual message component
│   └── MessageInput.jsx     # Message composition area
├── App.jsx                  # Main application component
├── index.css               # Global styles and Tailwind imports
└── main.jsx                # Application entry point
```

## 🎨 Components

### LeftSidebar
- Contact list with search functionality
- Message/Calls toggle
- Filter options (All, Missed, Incoming)
- Contact selection and status indicators

### RightSidebar
- Alphabetical contact directory
- Quick navigation
- Recent contacts section
- Contact search functionality

### ChatMessages
- Message bubbles with timestamps
- Incoming/outgoing message styling
- Scrollable message history

### MessageInput
- Text input with emoji support
- File attachment options
- Voice message capability
- Send button with gradient styling

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Inter font family
- Custom color gradients
- Extended spacing and sizing utilities

### Vite Configuration
Optimized for React development with:
- Fast hot module replacement
- Optimized build process
- PostCSS integration

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Raza Bhatti** - [razabhatti546](https://github.com/razabhatti546)

## 🙏 Acknowledgments

- Thanks to the React and Tailwind CSS communities
- Icons provided by React Icons
- Built with modern web development best practices

---

⭐ **Star this repository if you found it helpful!**