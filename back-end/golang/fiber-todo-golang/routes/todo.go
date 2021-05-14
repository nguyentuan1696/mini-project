package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/nguyentuan1696/fiber-todo-golang/controllers"
)

func  TodoRoute(route fiber.Router) {
	route.Post("", controllers.CreateTodo)
	route.Put("/:id", controllers.UpdateTodo)
	route.Delete("/:id", controllers.DeleteTodo)
	route.Get("", controllers.GetTodos)
	route.Get("/:id", controllers.GetTodo)

}