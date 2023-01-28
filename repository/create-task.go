package repository

import (
	"fmt"
	"go-doing/repository/models"
)

// CreateTask create a new task
func CreateTask(body models.TaskPayload) models.Task {
	entity := models.Task{
		Title:       body.Title,
		Description: body.Description,
		Done:        body.Done,
		Date:        body.Date,
	}

	database.Create(&entity)
	fmt.Printf("Inser new Task %d\n", entity.ID)

	return entity
}
