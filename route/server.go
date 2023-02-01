package route

import (
	"embed"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"io/fs"
	"net/http"
)

var server = echo.New()

// Start starts the rest service
func Start(webFiles embed.FS, address string) error {
	if err := initWebFiles(webFiles); err != nil {
		panic(err)
	}
	return server.Start(address)
}

func init() {
	server.HideBanner = true

	// middlewares
	server.Use(middleware.Logger())
	server.Use(middleware.Recover())

	// routes
	server.GET("/api/about", getAbout)
	server.GET("/api/tasks", getTaskList)
	server.POST("/api/tasks", createTask)
	server.GET("/api/tasks/:id", getTaskById)
	server.PUT("/api/tasks/:id", updateTask)
	server.PUT("/api/tasks/:id/done", updateTaskDone)

}

func initWebFiles(webFiles embed.FS) error {
	// embed resources
	fileSys, err := fs.Sub(webFiles, "web")
	if err != nil {
		return err
	}
	webHandler := http.FileServer(http.FS(fileSys))
	server.GET("/*", echo.WrapHandler(webHandler))
	return nil
}
