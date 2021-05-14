package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/nguyentuan1696/fiber-todo-golang/routes"
)

func setupRoutes(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"success": true,
			"message": "You are at the endpoint",
		})
	})

	api := app.Group("/api")

	api.Get("", func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"success": true,
			"message": "You are at the endpoint",
		})
	})

    routes.TodoRoute(api.Group("/todos"))

}

func main() {

	// init app server
	app := fiber.New()

	// Middleware
	app.Use(logger.New())

	// setup routes
	setupRoutes(app)

	// Listn on server 8080 and catch error if any
	err := app.Listen(":8080")
	if err != nil {
		panic(err)
	}
}
