class UsersController < ApplicationController
  def new
  end
  def create
    user = User.new(create_params)
    if user.valid?
      user.save
      session[:user_id] = user.id
      session[:user_name] = user.first_name
      redirect_to todos_index_path
    else
      flash[:errors] = user.errors.full_messages
      redirect_to root_path
    end
  end
  private
  def create_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
