class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            login(@user)
            render '/api/users/show'
        else
            render json: ["Your login is invalid. Please try again."], status: 401
        end
    end

    def destroy
        if current_user
            logout
            render json: {} 
        else
            render json: ["no current user to logout"], status: 404
        end
    end
end