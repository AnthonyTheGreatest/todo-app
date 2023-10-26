# Create new branch:
# git checkout -b new-branch

# Make the script executable:
# chmod +x commit.sh

# Check if a commit message argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <commit message>"
    exit 1
fi

# Function for committing with a custom message
commit() {
    # Add all changes, commit with the provided message, and push to the current branch
    git add .
    git commit -m "$1"
    git checkout main
    git merge dev
    git branch -d dev
    git push
    git checkout -b new-branch
}

# Call the commit function with the provided commit message
commit "$1"