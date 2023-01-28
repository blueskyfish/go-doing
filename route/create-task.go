package route

import (
	"github.com/labstack/echo/v4"
	"go-doing/repository"
	"go-doing/repository/models"
	"net/http"
)

func createTask(ctx echo.Context) error {
	body := models.TaskPayload{}

	if err := ctx.Bind(&body); err != nil {
		return echo.ErrBadRequest
	}
	task := repository.CreateTask(body)
	return ctx.JSON(http.StatusOK, task)
}
