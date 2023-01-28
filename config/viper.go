package config

import (
	"fmt"
	"github.com/spf13/viper"
	"os"
	"path/filepath"
	"strconv"
)

func init() {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		fmt.Println("Home directory error", err)
	}
	currentDir, err := os.Getwd()
	if err != nil {
		fmt.Println("Current directory error", err)
	}

	viper.SetConfigName("doing")
	viper.SetConfigType("yaml")
	viper.AddConfigPath(homeDir)
	viper.AddConfigPath(currentDir)

	err = viper.ReadInConfig()
	if _, ok := err.(viper.ConfigFileNotFoundError); !ok {
		fmt.Println("Could not read config", err)
	}
}

func GetAddress() string {
	host := getString("host", "localhost")
	port := getInt("port", 8080)
	return host + ":" + strconv.Itoa(port)
}

func GetDatabaseFilename() string {
	currentDir, _ := os.Getwd()
	return getString("file", filepath.Join(currentDir, "doing.db"))
}

func getString(key string, defValue string) string {
	value := viper.GetString(key)
	if value == "" {
		return defValue
	}
	return value
}

func getInt(key string, defValue int) int {
	value := viper.GetInt(key)
	if value == 0 {
		return defValue
	}
	return value
}
