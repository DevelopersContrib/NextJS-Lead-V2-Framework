#!/bin/bash

# Script to switch to Node.js 20 for this project
echo "Switching to Node.js 20 for NextJS Lead V2 Framework..."

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node.js 20
nvm use 20

# Verify the version
echo "Current Node.js version: $(node --version)"
echo "Current npm version: $(npm --version)"

echo "✅ Project is now using Node.js 20!"
echo "💡 Tip: Run 'nvm use' in this directory to automatically switch to Node.js 20"
