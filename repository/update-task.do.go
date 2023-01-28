package repository

import "go-doing/repository/models"

// UpdateTask updates an existing task
func UpdateTask(id uint, body models.TaskPayload) models.Task {
	entity := toTask(body)
	entity.ID = id
	database.Save(&entity)
	return entity
}
