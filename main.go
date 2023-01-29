package main

import (
	"embed"
	"go-doing/command"
	"go-doing/config"
)

//go:embed web
var webFiles embed.FS

func main() {
	config.SetWebFiles(webFiles)
	command.Execute()
}
