#!/bin/bash

# SquareView Website Deployment Script
# This script deploys the website to Coolify

set -e

REPO_URL="https://github.com/inarashinzo/squareview-website.git"
APP_DIR="/home/inara/squareview-deploy"
COOLIFY_IP="192.168.139.108"

echo "🚀 Starting deployment of SquareView Website..."
echo "📦 Repository: $REPO_URL"
echo ""

# Check if Coolify server is accessible
if ! timeout 2 curl -s "http://$COOLIFY_IP:8000" > /dev/null 2>&1; then
    echo "⚠️  Coolify server at $COOLIFY_IP is not accessible."
    echo "📋 Please deploy manually using the Coolify web interface:"
    echo "   1. Access Coolify at http://$COOLIFY_IP:8000"
    echo "   2. Create a new 'Static' application"
    echo "   3. Set repository: $REPO_URL"
    echo "   4. Set branch: main"
    echo "   5. Set build command: npm install && npm run build"
    echo "   6. Set start command: npm run preview"
    echo "   7. Set port: 4173"
    exit 1
fi

# Clone or update the repository
if [ -d "$APP_DIR" ]; then
    echo "📥 Updating existing deployment..."
    cd "$APP_DIR"
    git pull origin main
else
    echo "📥 Cloning repository..."
    git clone "$REPO_URL" "$APP_DIR"
    cd "$APP_DIR"
fi

# Install dependencies and build
echo "🔧 Installing dependencies..."
npm ci

echo "🏗️  Building application..."
npm run build

echo "✅ Deployment complete!"
echo ""
echo "🌐 The website should be accessible at:"
echo "   http://$COOLIFY_IP:4173"
