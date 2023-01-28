package repository

import "go-doing/repository/models"

func toTask(body models.TaskPayload) models.Task {
	return models.Task{
		Title:       body.Title,
		Description: body.Description,
		Done:        body.Done,
		Date:        body.Date,
	}
}
