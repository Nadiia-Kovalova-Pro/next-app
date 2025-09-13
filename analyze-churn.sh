#!/bin/bash

# analyze-churn.sh
# Script to identify the most frequently changed files in the Git repository.
# Analyzes git logs and outputs a ranked list of high-churn files.

# Usage: ./analyze-churn.sh [number]
# - number: Optional. Number of top files to display (default: 10)

# Set default number of files to display
NUM=${1:-10}

echo "Analyzing Git history for file changes..."
echo "Top $NUM most changed files:"
echo ""

# Get list of changed files from git log, count occurrences, sort by frequency
git log --pretty=format: --name-only | \
grep -v '^$' | \
sort | \
uniq -c | \
sort -nr | \
head -$NUM | \
awk '{print $1 " changes: " $2}'

echo ""
echo "Analysis complete."