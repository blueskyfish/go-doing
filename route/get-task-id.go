package route

import (
	"github.com/labstack/echo/v4"
	"go-doing/repository"
	"net/http"
	"strconv"
)

func getTaskById(ctx echo.Context) error {
	idParam := ctx.Param("id")

	taskId, err := strconv.ParseUint(idParam, 10, strconv.IntSize)
	if err != nil {
		return echo.ErrBadRequest
	}

	task := repository.GetTaskById(uint(taskId))
	return ctx.JSON(http.StatusOK, task)
}
