package controller

import "github.com/gin-gonic/gin"

func HomeController(c *gin.Context) {
	c.File("home.html")
}
