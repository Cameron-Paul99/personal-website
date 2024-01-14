package main

import (
	"personal-site/controller"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/", controller.HomeController)
	router.Run(":8080")
}
