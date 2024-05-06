const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: './index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output filename
  },
  resolve: {
    fallback: {
      "crypto": false,
      "os": false ,
      "path": false
    }
  },
  plugins: [
    new Dotenv()
],  
  mode: 'development' // Set mode to development
};

