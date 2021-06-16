chcp 65001
@echo off
NET FILE||(powershell start-process -FilePath '%0' -verb runas)&&(exit /B) >NUL 2>&1
echo 为Microsoft Office 16安装目录创建符号连接
if not exist "C:\Program Files\Microsoft Office" (
mkdir "D:\Program Files\Microsoft Office"
mklink /D "C:\Program Files\Microsoft Office" "D:\Program Files\Microsoft Office"
) else (
echo Microsoft Office 16安装目录以存在，请清空相应目录。
)
echo 全部完成，按回车结束。
pause>nul 