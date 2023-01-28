package repository

import "go-doing/repository/models"

// UpdateTaskDone update the existing task as done or undone
func UpdateTaskDone(id uint, body models.TaskDone) models.Task {
	task := models.Task{}
	database.Find(&task, id)
	task.Done = body.Done
	database.Save(&task)
	return task
}
