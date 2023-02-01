package repository

import "go-doing/repository/models"

// GetTaskById get task by the given task id
func GetTaskById(id uint) models.Task {
	task := models.Task{}
	database.Find(&task, id)
	return task
}
