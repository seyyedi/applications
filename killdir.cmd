@ECHO OFF
mkdir C:\Windows\Temp\devnull
robocopy C:\Windows\Temp\devnull "%1" /purge /ns /nc /nfl /ndl
rmdir C:\Windows\Temp\devnull