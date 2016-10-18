class SessionsController < ApplicationController

  def new

  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      session[:user_name] = user.first_name
      redirect_to todos_index_path
    else
      flash[:errors] = ['Incorrect email or password']
      redirect_to root_path
    end
  end

  def destroy
    session[:user_id] = nil
    session[:user_name] = nil
    redirect_to root_path
  end
end
