package route

import (
	"github.com/labstack/echo/v4"
	"go-doing/repository"
	"go-doing/repository/models"
	"net/http"
	"strconv"
)

func updateTask(ctx echo.Context) error {
	body := models.TaskPayload{}
	idParam := ctx.Param("id")

	taskId, err := strconv.ParseUint(idParam, 10, strconv.IntSize)
	if err != nil {
		return echo.ErrBadRequest
	}

	if err := ctx.Bind(&body); err != nil {
		return echo.ErrBadRequest
	}

	task := repository.UpdateTask(uint(taskId), body)
	return ctx.JSON(http.StatusOK, task)
}
