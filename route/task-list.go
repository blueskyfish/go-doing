package route

import (
	"github.com/labstack/echo/v4"
	"go-doing/repository"
	"net/http"
)

func getTaskList(ctx echo.Context) error {

	list := repository.GetTaskList()

	return ctx.JSON(http.StatusOK, list)
}
