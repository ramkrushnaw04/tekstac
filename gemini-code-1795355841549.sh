#!/bin/bash

# Create the directory and navigate into it
mkdir -p Mercuryproject
cd Mercuryproject || exit

# Create and populate module1
cat << 'EOF' > module1
Linux is an open source operating system
Linux is a Unix based operating system
The various Linux distributions are fedora, ubuntu, debian linux, etc.
EOF

# Create and populate module2
cat << 'EOF' > module2
raj:500:admin:/home/raj:/bin/bash
ajay:600:user:/home/ajay:/bin/bash
dane:700:admin:/home/dane:/bin/sh
gokul:800:user:/home/gokul:/bin/sh
EOF

# Check if module1 exists, copy lines with "operating system" to OSfile, and display it
if [ -f "module1" ]; then
    grep "operating system" module1 > OSfile
    cat OSfile
fi

# Check if module2 exists, find admin users with /bin/sh shell, and save usernames to Adminusers
if [ -f "module2" ]; then
    awk -F: '$3 == "admin" && $5 == "/bin/sh" {print $1}' module2 > Adminusers
fi
```[cite: 1]

### Key Details for Tekstac Evaluation
* **Directory & File Paths:** Creating `OSfile` and `Adminusers` inside `Mercuryproject` matches standard VPL directory structures where the script initializes the workspace first[cite: 1]. *(Note: If your automated test cases look for `OSfile` and `Adminusers` in the root/current working directory instead of inside `Mercuryproject`, remove `cd Mercuryproject` and prefix the file paths with `Mercuryproject/module1` and `Mercuryproject/module2`.)*
* **Exact Spacing:** Ensure there are no trailing spaces after the text lines in `module1` and `module2` when pasting into the VPL editor, as automated diff checkers are strict about exact character matches[cite: 1].
* **Shell Filter (`$5 == "/bin/sh"`):** Using `awk` with `:` as the field separator (`-F:`) prevents `/bin/bash` from accidentally matching a loose `sh` substring search[cite: 1].