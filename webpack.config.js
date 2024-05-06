const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
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
    new webpack.DefinePlugin({
        'process.env': {
            API_KEY: JSON.stringify(process.env.API_KEY)
            // Add other environment variables here...
        },
    }),
    // Use dotenv-webpack only in development mode
    process.env.NODE_ENV === 'development' ? new Dotenv() : null
],  
  mode: 'production' // Set mode to development
};

