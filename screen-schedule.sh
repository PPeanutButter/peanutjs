#!/bin/bash

# dir name cmd
run_screen()
{
	screen -dmS $2
	#screen -x -S $2 -p 0 -X stuff "cd $1"
	#screen -x -S $2 -p 0 -X stuff '\n'

	#screen -x -S $2 -p 0 -X stuff "$3"
	#screen -x -S $2 -p 0 -X stuff '\n'
	screen_exe "$2" "cd $1"
	screen_exe "$2" "$3"
}

# name cmd
screen_exe()
{
	screen -x -S $1 -p 0 -X stuff "$2"
	screen -x -S $1 -p 0 -X stuff '\n'
}

run_screen "~/program/frp/frp_0.35.1_linux_arm64" "frp" "./start.sh"
run_screen "~/program/create_ap" "ap" "./start.sh"
