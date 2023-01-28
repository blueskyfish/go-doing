package route

import "github.com/labstack/echo/v4"

var server = echo.New()

// Start starts the rest service
func Start(address string) error {
	return server.Start(address)
}

func init() {
	server.HideBanner = true

	// routes
	server.GET("/", getAbout)
}
