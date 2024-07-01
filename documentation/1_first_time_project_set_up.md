### Node.js and npm

If you haven't installed Node.js and npm, follow these steps:

1. Go to [Node.js official website](https://nodejs.org/en/download/).
2. Choose the appropriate version (v18.18.2) for your OS and download it.
3. Run the installer and follow the installation process.

**OR**

Alternatively, install multiple Node.js using NVM [NodeWithNVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

To verify the installation, open your terminal and run:

```bash
node -v
npm -v
```

If "node -v" or "npm -v" does not return a version, then please go back to step one and ensure node.js is installed properly.

## Setting up the Project

1. Clone the repository:

```bash
git clone https://github.com/JokiestJoke/Tabletop-Buddy.git
```

2. Navigate to the project directory:

```bash
cd tabletop-buddy
```

3. Checkout to stage branch (this will be the working branch):

```bash
git checkout stage
```

5. Install the required dependencies for the client:

```bash
cd ..
cd client
npm install
```
