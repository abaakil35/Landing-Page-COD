# Low memory / VS Code performance tips

If VS Code and the dev server are making your PC slow, try these quick steps:

1. Close unused editors and panels. The repo includes many files; each open editor uses memory.
2. Close or stop any running dev servers or watchers (e.g., `npm run dev`). You can find them in the Terminal panel.
3. Reduce the number of extensions running: disable heavy language servers you don't need.
4. Use the built-in Process Explorer (Help → Process Explorer) to find the high-memory processes.
5. Limit open editors and enable preview mode (the repo adds a recommended `.vscode/settings.json`).
6. If necessary, reboot the machine to clear stuck processes.

Commands you can run in PowerShell to find and kill common culprits (use carefully):

# list node processes and their memory

Get-CimInstance Win32*Process | Where-Object { $*.Name -match "node|node.exe|esbuild|webpack|vite" } | Select-Object ProcessId, Name, CommandLine, WorkingSetSize | Sort-Object WorkingSetSize -Descending

# kill a process by id (replace PID)

Stop-Process -Id <PID> -Force

# alternatively, kill all node processes (be careful)

Get-Process node | Stop-Process -Force
