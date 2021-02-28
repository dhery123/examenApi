
import TDModel from "../models/ToDoModel.js";

var TD = new TDModel(); 
class TodoController{
    constructor(){}
    //services
    async createTodo(request,response){
        var data = request.body;

        var result = await TD.createtodo( 
            data.name,
            data.description,
            data.date,
            data.hour,
            data.done,
        );
        response.status(200).json(result);
    }
    async getTodo(request, response){
            var result = await TD.gettodo();
            response.status(200).json(result);
    }
    async updateTodo(request, response){
        var id = request.params.id;
        var updatedata = request.body;
        var result = await TD.updatetodo(id, updatedata);
        response.status(200).json(result);
    }

    async deleteTodo(request, response){
        var id = request.params.id;
        var result = await TD.deletetodo(id);
        response.status(200).json(result);
    }

} 
export default TodoController;