package repository

import "go-doing/repository/models"

// GetTaskList - get the list of tasks
func GetTaskList() []models.Task {
	var todos []models.Task

	database.Find(&todos)

	return todos
}
