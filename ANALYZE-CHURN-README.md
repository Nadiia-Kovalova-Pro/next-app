# Git Churn Analyzer

This script analyzes the Git history of the repository to identify the most frequently changed files, helping to spot high-churn areas that might need refactoring or attention.

## Usage

1. Ensure you are in the root directory of your Git repository.
2. Run the script with optional parameter for number of files:

   ```bash
   ./analyze-churn.sh [number]
   ```

   - `number`: (Optional) Number of top files to display. Default is 10.

## Example

```bash
./analyze-churn.sh 5
```

This will display the top 5 most changed files.

## Output

The script outputs a ranked list in the format:
```
X changes: path/to/file
```

Where `X` is the number of times the file has been changed.

## Requirements

- Git must be installed and the current directory must be a Git repository.
- Bash shell (compatible with macOS zsh).

## Troubleshooting

- If the script doesn't run, ensure it's executable: `chmod +x analyze-churn.sh`
- If no output or errors, check that you're in a Git repository with commits.
- For large repositories, the analysis might take time due to processing git log.