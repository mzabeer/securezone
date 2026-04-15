$ErrorActionPreference = "Stop"

# Stop anything currently listening on the dev port.
$portPids = Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue |
    Select-Object -ExpandProperty OwningProcess -Unique

foreach ($procId in $portPids) {
    if ($procId -and $procId -ne 0) {
        Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
    }
}

# Stop stale Next.js dev processes for this workspace.
$nextProcs = Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" |
    Where-Object { $_.CommandLine -match "securezone" -and $_.CommandLine -match "next" }

foreach ($proc in $nextProcs) {
    Stop-Process -Id $proc.ProcessId -Force -ErrorAction SilentlyContinue
}

# Remove potentially corrupted Next.js cache.
if (Test-Path ".next") {
    Remove-Item ".next" -Recurse -Force -ErrorAction SilentlyContinue
}

next dev --webpack -p 3000