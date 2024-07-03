package main

import (
	"github.com/gin-gonic/gin"
	"github.com/jvrtdev/TrilhaFullStackJR-JUN15/config"
)


var (
	logger *config.Logger
)



func main(){
	logger = config.GetLogger("main")
	//initialize configs
	err := config.Init()
	if err != nil {
		logger.Errorf("Config initialization error: %v", err)
		return 
	}


	s := gin.Default()
	s.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	s.Run(":8080") 
}