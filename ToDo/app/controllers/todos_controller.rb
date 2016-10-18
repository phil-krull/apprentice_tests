class TodosController < ApplicationController

  def index
    @todos = Todo.where(user: session[:user_id])
    respond_to do |format|
      format.html { redirect_to @todos }
      format.js {}
    end
  end

  def create
    puts params
    todo = Todo.new(create_params)
    if todo.valid?
      todo.user = User.find_by_id(session[:user_id])
      todo.completed = false
      todo.save
      redirect_to todos_index_path
    else
      flash[:errors] = todo.errors.full_messages
      redirect_to todos_index_path
    end
  end

  def update
    Todo.find_by_id(params[:id]).update( create_params )
    redirect_to todos_index_path
  end

  def complete
    todo = Todo.find(params[:id])
    todo.completed = true
    todo.save
    redirect_to todos_index_path
  end

  def destroy
    Todo.find(params[:id]).destroy
    redirect_to todos_index_path
  end

  private

  def create_params
    params.require(:todo).permit(:content)
  end
end
