package models

import (
	"database/sql"
	"time"
)

// Task A task entity
type Task struct {
	ID          uint         `gorm:"primarykey" json:"id"`
	CreatedAt   time.Time    `json:"-"`
	UpdatedAt   time.Time    `json:"-"`
	DeletedAt   sql.NullTime `json:"-"`
	Title       string       `json:"title"`
	Description string       `json:"description"`
	Done        bool         `json:"done"`
	Date        string       `json:"date"`
}

// TaskPayload the payload in order to create or update a task
type TaskPayload struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Done        bool   `json:"done"`
	Date        string `json:"date"`
}

// TaskDone the payload for task being done or undone
type TaskDone struct {
	Done bool `json:"done"`
}
