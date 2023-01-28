package repository

import (
	"fmt"
	"go-doing/config"
	"go-doing/repository/models"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"os"
)

var database *gorm.DB = nil

func init() {
	file := config.GetDatabaseFilename()

	// open the database
	db, err := gorm.Open(sqlite.Open(file))
	if err != nil {
		fmt.Println("Doing database is not available", err)
		os.Exit(1)
	}

	// save into the "database" variable
	database = db

	err = database.AutoMigrate(&models.Task{})
	if err != nil {
		fmt.Println("Doing models are not migrate", err)
	}
}

// GetTaskList - get the list of tasks
func GetTaskList() []models.Task {
	var todos []models.Task

	database.Find(&todos)

	return todos
}

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
