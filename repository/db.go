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
