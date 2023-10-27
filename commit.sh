#!/bin/bash

# Create a new branch
# git checkout -b new-branch

# Make the script executable
# chmod +x commit.sh

# Prompt the user for a commit message
read -p "Enter your commit message: " commit_message

# Check if a commit message was provided
if [ -z "$commit_message" ]; then
    echo "Commit message is empty. Please provide a commit message."
    exit 1
fi

# Function for committing with the custom message
commit() {
    git add .
    git commit -m "$commit_message"
    git checkout main
    git merge new-branch
    git branch -d new-branch
    git push
    git checkout -b new-branch
}

# Call the commit function
commit