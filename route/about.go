package route

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

type About struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Version     string `json:"version"`
}

var about About

func init() {
	about = About{
		Name:        "Go-Doing",
		Description: "Another TODO application in the language Go",
		Version:     "0.0.1",
	}
}

// getAbout Get about entity from the server
func getAbout(ctx echo.Context) error {
	return ctx.JSON(http.StatusOK, about)
}
