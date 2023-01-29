package config

import "embed"

var webFiles embed.FS

func SetWebFiles(wf embed.FS) {
	webFiles = wf
}

func WebFiles() embed.FS {
	return webFiles
}
